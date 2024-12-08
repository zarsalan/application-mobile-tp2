package com.example.tp2_epicerie.viewModels

import androidx.lifecycle.ViewModel
import com.example.tp2_epicerie.CurrentUserCache
import com.example.tp2_epicerie.Graph
import com.example.tp2_epicerie.data.GroceryItem
import com.example.tp2_epicerie.data.GroceryItemCategory
import com.example.tp2_epicerie.data.GroceryList
import com.example.tp2_epicerie.data.ListItem
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

class GroceryLists : ViewModel() {
    private val userDB = Graph.userDB
    private val groceryRepository = Graph.groceryRepository

    // Les listes d'épicerie de l'utilisateur
    private val _groceryLists = MutableStateFlow<List<GroceryList>>(emptyList())
    val groceryLists : StateFlow<List<GroceryList>> = _groceryLists

    // L'id de la liste d'épicerie courante
    private val _currentGroceryListId = MutableStateFlow<String?>(null)
    val currentGroceryListId: StateFlow<String?> = _currentGroceryListId

    // Les items de la liste d'épicerie courante
    private val _currentGroceryListItems = MutableStateFlow<List<GroceryItem>>(emptyList())
    val currentGroceryListItems: StateFlow<List<GroceryItem>> = _currentGroceryListItems

    private suspend fun updateGroceryList(groceryList: GroceryList) {
        try {
            userDB.updateGroceryList(groceryList)
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour de la liste d'épicerie : ${e.message}")
        }
    }

    // Chargement des listes d'épicerie de l'utilisateur
    fun loadGroceryLists() {
        val user = CurrentUserCache.user ?: return
        _groceryLists.value = user.groceryLists.values.toList()
    }

    // Chargement des items de la liste d'épicerie spécifiée
    fun loadGroceryListItems(groceryList : GroceryList) {
        val user = CurrentUserCache.user ?: return
        _currentGroceryListId.value = groceryList.id
        val items = mutableListOf<GroceryItem>()

        // On obtient les GroceryItem de la liste
        for (listItem in groceryList.listItems) {
            val groceryItemUser = user.groceryItems[listItem.groceryItemId] ?: continue
            val groceryItem = GroceryItem(
                id = groceryItemUser.id,
                name = groceryItemUser.name,
                description = groceryItemUser.description,
                isFavorite = groceryItemUser.isFavorite,
                category = user.groceryCategories[groceryItemUser.categoryId] ?: GroceryItemCategory(),
            )
            items.add(groceryItem)
        }

        _currentGroceryListItems.value = items
    }

    // Rechargement des items de la liste si la liste actuel a été modifiée
    private fun groceryListUpdated(groceryList: GroceryList) {
        if (_currentGroceryListId.value == groceryList.id) {
            loadGroceryListItems(groceryList)
        }
    }

    // Ajout d'une liste
    suspend fun addGroceryList(title: String, description: String) {
        val user = CurrentUserCache.user ?: return
        val newList = GroceryList(title = title, description = description)
        user.groceryLists[newList.id] = newList
        loadGroceryLists()

        updateGroceryList(newList)
    }

    // Mise à jour des détails d'une liste
    suspend fun updateGroceryList(listId: String, title: String, description: String) {
        val user = CurrentUserCache.user ?: return
        val list = user.groceryLists[listId] ?: return
        list.title = title
        list.description = description
        user.groceryLists[listId] = list
        loadGroceryLists()

        updateGroceryList(list)
    }

    // Suppression d'une liste
    suspend fun deleteGroceryList(listId: String) {
        val user = CurrentUserCache.user ?: return
        user.groceryLists.remove(listId)
        loadGroceryLists()

        try {
            userDB.deleteGroceryList(listId)
        } catch (e: Exception) {
            throw Exception("Erreur lors de la suppression de la liste d'épicerie : ${e.message}")
        }
    }

    // Ajout d'un ListItem à la liste d'épicerie
    suspend fun addGroceryListItem(listItem: ListItem, groceryItem: GroceryItem) {
        val user = CurrentUserCache.user ?: return
        val list = user.groceryLists[listItem.groceryListId] ?: return
        val groceryItemUser = groceryRepository.addUserGroceryItem(groceryItem)
        val newItem = listItem.copy(groceryItemId = groceryItemUser.id)
        list.listItems.add(newItem)
        groceryListUpdated(list)

        updateGroceryList(list)
    }

    // Mise à jour d'un ListItem de la liste d'épicerie
    suspend fun updateGroceryListItem(listItem: ListItem) {
        val user = CurrentUserCache.user ?: return
        val list = user.groceryLists[listItem.groceryListId] ?: return
        val itemIndex = list.listItems.indexOfFirst { it.id == listItem.id }
        if (itemIndex != -1) {
            list.listItems[itemIndex] = listItem
            groceryListUpdated(list)

            updateGroceryList(list)
        }
    }

    // Suppression d'un ListItem de la liste d'épicerie
    suspend fun deleteGroceryListItem(listItem: ListItem) {
        val user = CurrentUserCache.user ?: return
        val list = user.groceryLists[listItem.groceryListId] ?: return
        list.listItems.removeIf { it.id == listItem.id }
        groceryListUpdated(list)

        updateGroceryList(list)
    }
}