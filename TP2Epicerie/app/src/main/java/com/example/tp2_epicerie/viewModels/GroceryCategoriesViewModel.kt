package com.example.tp2_epicerie.viewModels

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.tp2_epicerie.CurrentUserCache
import com.example.tp2_epicerie.Graph
import com.example.tp2_epicerie.data.GroceryItemCategory
import com.example.tp2_epicerie.utilities.loadingFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class GroceryCategoriesViewModel : ViewModel() {
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
    fun fetchCategories() {
        viewModelScope.launch {
            loadingFlow({
                _groceryCategoriesAPI.value = apiRepository.getGroceryCategories()
                updateGroceryCategories()
            }, _isLoading)
        }
    }

    // Récupération des catégories de l'utilisateur connecté en le combinant avec les catégories de l'API
    private fun updateGroceryCategories() {
        val user = CurrentUserCache.user ?: return
        val categories = mutableListOf<GroceryItemCategory>()

        // Insertion des catégories venant de l'api si existant dans les catégories de l'utilisateur
        for (category in _groceryCategoriesAPI.value) {
            categories.add(user.groceryCategories[category.id] ?: category)
        }

        // Insertion des catégories de l'utilisateur si non existant dans les catégories de l'api
        for (category in user.groceryCategories.values) {
            if (!_groceryCategoriesAPI.value.any { it.id == category.id }) {
                categories.add(category)
            }
        }

        _finalCategories.value = categories.toList()
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