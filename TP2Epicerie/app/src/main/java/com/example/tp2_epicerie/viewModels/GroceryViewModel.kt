package com.example.tp2_epicerie.viewModels

import android.net.Uri
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.tp2_epicerie.Graph
import com.example.tp2_epicerie.GroceryApp
import com.example.tp2_epicerie.data.GroceryDatabase
import com.example.tp2_epicerie.data.GroceryList
import com.example.tp2_epicerie.data.ListItem
import com.example.tp2_epicerie.data.Settings
import com.example.tp2_epicerie.data.User
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch

class GroceryViewModel(
) : ViewModel() {
    // Section GroceryList -------------------------------------------------
    private val _userGroceryLists = MutableStateFlow<List<GroceryList>>(emptyList())
    val userGroceryLists: StateFlow<List<GroceryList>> = _userGroceryLists

    fun fetchUserGroceryLists(userId: String) {
        viewModelScope.launch {
            try {
                val lists = groceryListBD.fetchAllGroceryListsByUserId(userId)
                _userGroceryLists.value = lists
            } catch (e: Exception) {
                println("Erreur lors de la récupération des listes de l'utilisateur : ${e.message}")
            }
        }
    }

    fun createGroceryList(groceryList: GroceryList) {
        viewModelScope.launch {
            try {
                groceryListBD.createGroceryList(groceryList)
            } catch (e: Exception) {
                println("Erreur lors de la création de la liste : ${e.message}")
            }
        }
    }

    fun updateGroceryList(groceryList: GroceryList) {
        viewModelScope.launch {
            try {
                groceryListBD.updateGroceryList(groceryList)
            } catch (e: Exception) {
                println("Erreur lors de la mise à jour de la liste : ${e.message}")
            }
        }
    }

    fun deleteGroceryList(listId: String) {
        viewModelScope.launch {
            try {
                groceryListBD.deleteGroceryList(listId)
            } catch (e: Exception) {
                println("Erreur lors de la suppression de la liste : ${e.message}")
            }
        }
    }

    // Section ListItem -------------------------------------------------
    fun createListItem(listItem: ListItem) {
        viewModelScope.launch {
            try {
                listItemBD.createListItem(listItem)
            } catch (e: Exception) {
                println("Erreur lors de la création de l'élément de la liste : ${e.message}")
            }
        }
    }

    fun updateListItem(listItem: ListItem) {
        viewModelScope.launch {
            try {
                listItemBD.updateListItem(listItem)
            } catch (e: Exception) {
                println("Erreur lors de la mise à jour de l'élément de la liste : ${e.message}")
            }
        }
    }

    fun deleteListItem(itemId: String) {
        viewModelScope.launch {
            try {
                listItemBD.deleteListItem(itemId)
            } catch (e: Exception) {
                println("Erreur lors de la suppression de l'élément de la liste : ${e.message}")
            }
        }
    }


    // État actuel du mode sombre
    private val _isDarkTheme = MutableStateFlow(false)
    val isDarkTheme: StateFlow<Boolean> = _isDarkTheme

    // Initialisation du thème en fonction des paramètres
    init {
        viewModelScope.launch {
            _currentUser.collect { user ->
                if (user != null) {
                    fetchSettings()
                } else {
                    _isDarkTheme.value = false // Valeur par défaut
                }
            }
        }
    }

    // Mise à jour du mode sombre
    fun updateDarkMode(enabled: Boolean) {
        viewModelScope.launch {
            val userId = _currentUser.value?.id
            if (userId == null) {
                println("Impossible de mettre à jour le mode sombre : Aucun utilisateur connecté")
                return@launch
            }

            val currentSettings = settingsBD.getSettings(userId) ?: Settings(userId = userId)
            val updatedSettings = currentSettings.copy(darkMode = enabled)

            try {
                settingsBD.createOrUpdateSettings(updatedSettings)
                _isDarkTheme.value = enabled
            } catch (e: Exception) {
                println("Erreur lors de la mise à jour du mode sombre : ${e.message}")
            }
        }
    }

}