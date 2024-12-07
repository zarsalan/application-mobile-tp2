package com.example.tp2_epicerie.viewModels

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.tp2_epicerie.CurrentUserCache
import com.example.tp2_epicerie.Graph
import com.example.tp2_epicerie.api.ApiRepository
import com.example.tp2_epicerie.data.GroceryItemCategory
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class GroceryCategories : ViewModel() {
    private val apiRepository = ApiRepository()
    private val userDB = Graph.userDB

    private val _groceryCategoriesAPI = MutableStateFlow<List<GroceryItemCategory>>(emptyList())
    val groceryCategoriesAPI: StateFlow<List<GroceryItemCategory>> = _groceryCategoriesAPI

    private val _finalCategories = MutableStateFlow<List<GroceryItemCategory>>(emptyList())
    val finalCategories: StateFlow<List<GroceryItemCategory>> = _finalCategories

    private val _loading = MutableStateFlow(false)
    val loading: StateFlow<Boolean> = _loading

    // Récupération des catégories à partir de l'API et des catégories de l'utilisateur connecté
    fun refreshCategories() {
        viewModelScope.launch {
            try {
                _loading.value = true

                val categories = apiRepository.getGroceryCategories()
                _groceryCategoriesAPI.value = categories

                updateGroceryCategories()

                _loading.value = false
            } catch (e: Exception) {
                println("Erreur lors de la récupération des catégories d'épicerie : ${e.message}")
            }
        }
    }

    // Récupération des catégories de l'utilisateur connecté en le combinant avec les catégories de l'API
    private fun updateGroceryCategories() {
        val user = CurrentUserCache.user ?: return
        val categories = mutableListOf<GroceryItemCategory>()

        // Insertion des catégories venant de l'api
        _loading.value = true

        for (category in _groceryCategoriesAPI.value) {
            if (user.groceryCategories.contains(category.id)) {
                categories.add(user.groceryCategories[category.id]!!)
            } else {
                categories.add(category)
            }
        }
        _finalCategories.value = categories.toList()

        _loading.value = false
    }

    // Ajout/modification d'une catégorie à l'utilisateur connecté
    suspend fun updateUserGroceryCategory(category: GroceryItemCategory) {
        val user = CurrentUserCache.user ?: return
        user.groceryCategories[category.id] = category
        userDB.updateGroceryCategory(category)
        updateGroceryCategories()
    }

    // Suppression d'une catégorie de l'utilisateur connecté
    suspend fun removeUserGroceryCategory(category: GroceryItemCategory) {
        val user = CurrentUserCache.user ?: return
        user.groceryCategories.remove(category.id)
        userDB.deleteGroceryCategory(category)
        updateGroceryCategories()
    }
}