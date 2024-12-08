package com.example.tp2_epicerie.viewModels

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.tp2_epicerie.CurrentUserCache
import com.example.tp2_epicerie.Graph
import com.example.tp2_epicerie.data.GroceryItemCategory
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class GroceryCategories : ViewModel() {
    private val userDB = Graph.userDB
    private val apiRepository = Graph.apiRepository
    private val groceryRepository = Graph.groceryRepository

    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading

    private val _groceryCategoriesAPI = MutableStateFlow<List<GroceryItemCategory>>(emptyList())
    val groceryCategoriesAPI: StateFlow<List<GroceryItemCategory>> = _groceryCategoriesAPI

    private val _finalCategories = MutableStateFlow<List<GroceryItemCategory>>(emptyList())
    val finalCategories: StateFlow<List<GroceryItemCategory>> = _finalCategories

    // Récupération des catégories à partir de l'API et des catégories de l'utilisateur connecté
    fun refreshCategories() {
        viewModelScope.launch {
            _isLoading.value = true
            try {
                val categories = apiRepository.getGroceryCategories()
                _groceryCategoriesAPI.value = categories

                updateGroceryCategories()
            } catch (e: Exception) {
                println("Erreur lors de la récupération des catégories d'épicerie : ${e.message}")
            } finally {
                _isLoading.value = false
            }
        }
    }

    // Récupération des catégories de l'utilisateur connecté en le combinant avec les catégories de l'API
    private fun updateGroceryCategories() {
        val user = CurrentUserCache.user ?: return
        val categories = mutableListOf<GroceryItemCategory>()

        // Insertion des catégories venant de l'api
        _isLoading.value = true

        for (category in _groceryCategoriesAPI.value) {
            if (user.groceryCategories.contains(category.id)) {
                categories.add(user.groceryCategories[category.id]!!)
            } else {
                categories.add(category)
            }
        }
        _finalCategories.value = categories.toList()

        _isLoading.value = false
    }

    // Ajout/modification d'une catégorie à l'utilisateur connecté
    suspend fun updateUserGroceryCategory(category: GroceryItemCategory) {
        groceryRepository.addUserCategory(category)
        updateGroceryCategories()
    }

    // Suppression d'une catégorie de l'utilisateur connecté
    suspend fun removeUserGroceryCategory(category: GroceryItemCategory) {
        val user = CurrentUserCache.user ?: return

        if (category.id.isBlank()) {
            return
        }

        // Suppression des items de cette catégorie
        groceryRepository.removeGroceryItemsByCategory(category)

        // Suppression de la catégorie de l'utilisateur
        user.groceryCategories.remove(category.id)

        userDB.deleteGroceryCategory(category.id)
        updateGroceryCategories()
    }
}