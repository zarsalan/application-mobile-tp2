package com.example.tp2_epicerie.viewModels

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.tp2_epicerie.CurrentUserCache
import com.example.tp2_epicerie.Graph
import com.example.tp2_epicerie.data.GroceryItem
import com.example.tp2_epicerie.data.GroceryItemCategory
import com.example.tp2_epicerie.data.GroceryList
import com.example.tp2_epicerie.data.ListItem
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class GroceryListsViewModel : ViewModel() {
    private val userDB = Graph.userDB
    private val groceryRepository = Graph.groceryRepository

    // Les listes d'épicerie de l'utilisateur
    private val _groceryLists = MutableStateFlow<List<GroceryList>>(emptyList())
    val groceryLists : StateFlow<List<GroceryList>> = _groceryLists

    // L'id de la liste d'épicerie courante
    private val _currentGroceryList = MutableStateFlow(GroceryList())
    val currentGroceryList: StateFlow<GroceryList> = _currentGroceryList

    // Les items de la liste d'épicerie courante
    private val _currentGroceryItems = MutableStateFlow<List<GroceryItem>>(emptyList())
    val currentGroceryItems: StateFlow<List<GroceryItem>> = _currentGroceryItems

    // L'item demandé non cochée
    private val _currentGroceryListItemUnchecked = MutableStateFlow<ListItem?>(null)
    val currentGroceryListItemUnchecked: StateFlow<ListItem?> = _currentGroceryListItemUnchecked

    private fun saveGroceryList(groceryList: GroceryList) {
        viewModelScope.launch {
            try {
                userDB.updateGroceryList(groceryList)
            } catch (e: Exception) {
                throw Exception("Erreur lors de la mise à jour de la liste d'épicerie : ${e.message}")
            }
        }
    }

    // Chargement des listes d'épicerie de l'utilisateur
    fun loadGroceryLists() {
        val user = CurrentUserCache.user ?: return
        _groceryLists.value = user.groceryLists.values.toList()
    }

    // Chargement des items de la liste d'épicerie spécifiée
    fun loadCurrentGroceryListItems(groceryListId: String) {
        val user = CurrentUserCache.user ?: return
        val groceryList = user.groceryLists[groceryListId] ?: return
        _currentGroceryList.value = groceryList
        val items = mutableListOf<GroceryItem>()

        // On obtient les GroceryItem de la liste
        for (listItem in groceryList.listItems) {
            val groceryItemUser = user.groceryItems[listItem.groceryItemId] ?: continue
            val groceryItem = GroceryItem(
                id = groceryItemUser.id,
                userCreated = true,
                name = groceryItemUser.name,
                description = groceryItemUser.description,
                isFavorite = groceryItemUser.isFavorite,
                category = user.groceryCategories[groceryItemUser.categoryId] ?: GroceryItemCategory(),
            )
            items.add(groceryItem)
        }

        _currentGroceryItems.value = items
    }

    // Rechargement des items de la liste si la liste actuel a été modifiée
    private fun groceryListUpdated(groceryList: GroceryList) {
        if (_currentGroceryList.value.id == groceryList.id) {
            loadCurrentGroceryListItems(groceryList.id)
        }
    }

    // Ajout d'une liste
    fun addGroceryList(title: String, description: String) {
        val user = CurrentUserCache.user ?: return
        val newList = GroceryList(title = title, description = description)
        user.groceryLists[newList.id] = newList
        loadGroceryLists()

        saveGroceryList(newList)
    }

    // Mise à jour des détails d'une liste
    fun saveGroceryList(listId: String, title: String, description: String) {
        val user = CurrentUserCache.user ?: return
        val list = user.groceryLists[listId] ?: return
        list.title = title
        list.description = description
        user.groceryLists[listId] = list
        loadGroceryLists()

        saveGroceryList(list)
    }

    // Suppression d'une liste
    fun deleteGroceryList(listId: String) {
        val user = CurrentUserCache.user ?: return
        user.groceryLists.remove(listId)
        loadGroceryLists()

        viewModelScope.launch {
            try {
                userDB.deleteGroceryList(listId)
            } catch (e: Exception) {
                throw Exception("Erreur lors de la suppression de la liste d'épicerie : ${e.message}")
            }
        }
    }

    // Ajout d'un ListItem à la liste d'épicerie
    fun addGroceryListItem(listItem: ListItem, groceryItem: GroceryItem) {
        val user = CurrentUserCache.user ?: return
        val list = user.groceryLists[listItem.groceryListId] ?: return

        viewModelScope.launch {
            val groceryItemUser = groceryRepository.addUserGroceryItem(groceryItem)
            val newItem = listItem.copy(groceryItemId = groceryItemUser.id)
            list.listItems.add(newItem)
            groceryListUpdated(list)

            saveGroceryList(list)
        }
    }

    // Mise à jour d'un ListItem de la liste d'épicerie
    fun updateGroceryListItem(listItem: ListItem) {
        val user = CurrentUserCache.user ?: return
        val list = user.groceryLists[listItem.groceryListId] ?: return
        val itemIndex = list.listItems.indexOfFirst { it.id == listItem.id }
        if (itemIndex != -1) {
            list.listItems[itemIndex] = listItem
            groceryListUpdated(list)

            saveGroceryList(list)
        }
    }

    // Suppression d'un ListItem de la liste d'épicerie
    fun deleteGroceryListItem(listItem: ListItem) {
        val user = CurrentUserCache.user ?: return
        val list = user.groceryLists[listItem.groceryListId] ?: return
        list.listItems.removeIf { it.id == listItem.id }
        groceryListUpdated(list)

        saveGroceryList(list)
    }

    // Obtention de l'item de la liste d'épicerie non cochée
    fun getCurrentGroceryListItemUnchecked(groceryList: GroceryList, groceryItemId: String) {
        val listItem = groceryList.listItems.find { it.groceryItemId == groceryItemId } ?: return
        _currentGroceryListItemUnchecked.value = listItem
    }
}