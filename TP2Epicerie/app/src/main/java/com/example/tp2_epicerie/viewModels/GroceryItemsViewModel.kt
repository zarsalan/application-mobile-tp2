package com.example.tp2_epicerie.viewModels

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.tp2_epicerie.CurrentUserCache
import com.example.tp2_epicerie.Graph
import com.example.tp2_epicerie.data.GroceryItem
import com.example.tp2_epicerie.data.GroceryItemCategory
import com.example.tp2_epicerie.utilities.loadingFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class GroceryItemsViewModel : ViewModel() {
    private val userDB = Graph.userDB
    private val apiRepository = Graph.apiRepository
    private val groceryRepository = Graph.groceryRepository

    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading

    private val _groceryItemsAPI = MutableStateFlow<List<GroceryItem>>(emptyList())
    val groceryItemsAPI = _groceryItemsAPI

    private val _finalItems = MutableStateFlow<List<GroceryItem>>(emptyList())
    val finalItems = _finalItems

    private val _currentGroceryItem = MutableStateFlow(GroceryItem())
    val currentGroceryItem: StateFlow<GroceryItem> = _currentGroceryItem

    // Récupération des items d'épicerie à partir de l'API et des items de l'utilisateur connecté
    fun fetchGroceryItems(name: String = "", category: String = "") {
        viewModelScope.launch {
            try {
                loadingFlow({
                    _groceryItemsAPI.value = apiRepository.getGroceryItemsByCategoryAndName(name, category)
                    updateGroceryItems(name, category)
                }, _isLoading)
            } catch (e: Exception) {
                println("Erreur lors de la récupération des items d'épicerie : ${e.message}")
            }
        }
    }

    private fun updateGroceryItems(name: String = "", category: String = "") {
        val user = CurrentUserCache.user ?: return
        val items = mutableListOf<GroceryItem>()

        // Ajout des items de l'API et des items de l'utilisateur
        for (apiItem in _groceryItemsAPI.value) {
            if (user.groceryItems.contains(apiItem.id)) {
                val groceryItemUser = user.groceryItems[apiItem.id]!!

                val groceryItem = GroceryItem(
                    id = groceryItemUser.id,
                    userCreated = true,
                    name = groceryItemUser.name,
                    description = groceryItemUser.description,
                    isFavorite = groceryItemUser.isFavorite,
                    category = user.groceryCategories[groceryItemUser.categoryId] ?: apiItem.category,
                )
                items.add(groceryItem)
            } else {
                items.add(apiItem)
            }
        }

        // Ajout des items de l'utilisateur qui ne sont pas dans les items de l'API
        val userItemsNotInAPI = user.groceryItems.values.filter { userItem ->
            // Vérifier que l'item respecte les critères de recherche et qu'il n'est pas déjà dans les items
            val matchesName = name.isBlank() || userItem.name.contains(name, ignoreCase = true)
            val matchesCategory = category.isBlank() || user.groceryCategories[userItem.categoryId]?.name?.lowercase() == category.lowercase()

            matchesName && matchesCategory && items.none { it.id == userItem.id }
        }

        // Ajouter les items filtrés à la liste finale
        userItemsNotInAPI.forEach { userItem ->
            val groceryItem = GroceryItem(
                id = userItem.id,
                userCreated = true,
                name = userItem.name,
                description = userItem.description,
                isFavorite = userItem.isFavorite,
                category = user.groceryCategories[userItem.categoryId] ?: GroceryItemCategory(),
            )
            items.add(groceryItem)
        }

        _finalItems.value = items.toList()
    }

    private fun groceryItemChanged(groceryItem: GroceryItem) {
        if (_currentGroceryItem.value.id.isBlank() || groceryItem.id != _currentGroceryItem.value.id) {
            return
        }

        getCurrentGroceryItem(_currentGroceryItem.value.id)
    }

    // Ajout/modification d'un item à l'utilisateur connecté
    fun updateUserGroceryItem(item: GroceryItem) {
        viewModelScope.launch {
            groceryRepository.addUserGroceryItem(item)
            updateGroceryItems()
            groceryItemChanged(item)
        }
    }

    fun removeUserGroceryItem(itemId: String) {
        val user = CurrentUserCache.user ?: return

        if (itemId.isBlank()) {
            return
        }

        val item = user.groceryItems[itemId] ?: return

        viewModelScope.launch {
            user.groceryItems.remove(item.id)
            userDB.deleteGroceryItem(item.id)

            updateGroceryItems()
        }
    }

    fun categoryDeleted(categoryId: String) {
        val user = CurrentUserCache.user ?: return
        val items = user.groceryItems.values.filter { it.categoryId == categoryId }
        val defaultCategory = GroceryItemCategory(id = "1")

        viewModelScope.launch {
            items.forEach { item ->
                val groceryItem = GroceryItem(
                    id = item.id,
                    category = defaultCategory,
                    name = item.name,
                    description = item.description,
                    isFavorite = item.isFavorite,
                )
                groceryRepository.addUserGroceryItem(groceryItem)
                updateGroceryItems()
                groceryItemChanged(groceryItem)
            }

            updateGroceryItems()
        }
    }

    fun getCurrentGroceryItem(itemId: String) {
        val user = CurrentUserCache.user ?: return
        val item = user.groceryItems[itemId] ?: return
        _currentGroceryItem.value = GroceryItem(
            id = item.id,
            name = item.name,
            description = item.description,
            isFavorite = item.isFavorite,
            category = user.groceryCategories[item.categoryId] ?: GroceryItemCategory(),
        )
    }
}