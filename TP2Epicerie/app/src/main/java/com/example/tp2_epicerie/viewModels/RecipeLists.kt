package com.example.tp2_epicerie.viewModels

import androidx.lifecycle.ViewModel
import com.example.tp2_epicerie.CurrentUserCache
import com.example.tp2_epicerie.Graph
import com.example.tp2_epicerie.data.Recipe
import com.example.tp2_epicerie.data.RecipeCategory
import com.example.tp2_epicerie.data.RecipeList
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

class RecipeLists : ViewModel() {
    private val userDB = Graph.userDB
    private val apiRepository = Graph.apiRepository

    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading

    private val _recipeLists = MutableStateFlow<List<RecipeList>>(emptyList())
    val recipeLists: StateFlow<List<RecipeList>> = _recipeLists

    private val _currentRecipeList = MutableStateFlow<RecipeList?>(null)
    val currentRecipeList: StateFlow<RecipeList?> = _currentRecipeList

    private val _recipeCategories = MutableStateFlow<List<RecipeCategory>>(emptyList())
    val recipeCategories: StateFlow<List<RecipeCategory>> = _recipeCategories

    private val _currentRecipes = MutableStateFlow<List<Recipe>>(emptyList())
    val currentRecipes: StateFlow<List<Recipe>> = _currentRecipes

    private val _currentRecipe = MutableStateFlow<Recipe?>(null)
    val currentRecipe: StateFlow<Recipe?> = _currentRecipe

    private fun recipeListUpdated(recipeList : RecipeList) {
        if (_currentRecipeList.value?.id == recipeList.id) {
            _currentRecipeList.value = recipeList
        }
    }

    // Récupération par l'API ----------------------------------------------------------------------
    // Récupération des recettes à partir de l'API
    suspend fun fetchRecipes(categoryName: String = "", recipeName: String = "") {
        _isLoading.value = true

        val lists = apiRepository.getRecipes(categoryName, recipeName)
        _currentRecipes.value = lists

        _isLoading.value = false
    }

    // Récupération d'une recette à partir de l'API
    suspend fun fetchRecipeById(id: String) {
        _isLoading.value = true

        val recipe = apiRepository.getRecipeById(id)
        _currentRecipe.value = recipe

        _isLoading.value = false
    }

    // Récupération des catégories de recettes à partir de l'API
    suspend fun fetchRecipeCategories() {
        _isLoading.value = true

        val categories = apiRepository.getRecipeCategories()
        _recipeCategories.value = categories

        _isLoading.value = false
    }

    // Listes de recettes de l'utilisateur ---------------------------------------------------------
    // Récupération des listes de recettes de l'utilisateur connecté
    fun loadRecipeLists() {
        val user = CurrentUserCache.user ?: return
        val lists = mutableListOf<RecipeList>()

        for (list in user.recipeLists) {
            lists.add(list.value)
        }

        _recipeLists.value = lists.toList()
    }

    // Récupération d'une liste de recettes de l'utilisateur connecté
    fun loadRecipeList(recipeList: RecipeList) {
        val user = CurrentUserCache.user ?: return
        _currentRecipeList.value = user.recipeLists[recipeList.id]
    }

    // Ajout de liste de recettes à l'utilisateur connecté
    suspend fun addRecipeList(recipeList: RecipeList) {
        val user = CurrentUserCache.user ?: return
        user.recipeLists[recipeList.id] = recipeList

        _recipeLists.value = user.recipeLists.values.toList()
        userDB.updateRecipeList(recipeList)
    }

    // Suppression de liste de recettes de l'utilisateur connecté
    suspend fun deleteRecipeList(recipeList: RecipeList) {
        val user = CurrentUserCache.user ?: return
        user.recipeLists.remove(recipeList.id)

        _recipeLists.value = user.recipeLists.values.toList()
        userDB.deleteRecipeList(recipeList)
    }

    // Mise à jour de liste de recettes de l'utilisateur connecté
    suspend fun updateRecipeList(recipeList: RecipeList) {
        val user = CurrentUserCache.user ?: return
        user.recipeLists[recipeList.id] = recipeList

        recipeListUpdated(recipeList)
        _recipeLists.value = user.recipeLists.values.toList()
        userDB.updateRecipeList(recipeList)
    }

    // Ajout de recette à une liste de recettes de l'utilisateur connecté
    suspend fun addRecipeToList(recipe: Recipe, recipeList: RecipeList) {
        val user = CurrentUserCache.user ?: return
        user.recipeLists[recipeList.id]?.recipes?.add(recipe)

        recipeListUpdated(user.recipeLists[recipeList.id]!!)
        _recipeLists.value = user.recipeLists.values.toList()
        userDB.updateRecipeList(user.recipeLists[recipeList.id]!!)
    }

    // Suppression de recette d'une liste de recettes de l'utilisateur connecté
    suspend fun removeRecipeFromList(recipe: Recipe, recipeList: RecipeList) {
        val user = CurrentUserCache.user ?: return
        user.recipeLists[recipeList.id]?.recipes?.remove(recipe)

        recipeListUpdated(user.recipeLists[recipeList.id]!!)
        _recipeLists.value = user.recipeLists.values.toList()
        userDB.updateRecipeList(user.recipeLists[recipeList.id]!!)
    }
}