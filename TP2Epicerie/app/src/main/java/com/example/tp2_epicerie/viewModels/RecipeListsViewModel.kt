package com.example.tp2_epicerie.viewModels

import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.tp2_epicerie.CurrentUserCache
import com.example.tp2_epicerie.Graph
import com.example.tp2_epicerie.data.Recipe
import com.example.tp2_epicerie.data.RecipeCategory
import com.example.tp2_epicerie.data.RecipeList
import com.example.tp2_epicerie.utilities.loadingFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class RecipeListsViewModel : ViewModel() {
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

    private val _ingredientRecipes = MutableStateFlow<List<Recipe>>(emptyList())
    val ingredientRecipes: StateFlow<List<Recipe>> = _ingredientRecipes

    private fun recipeListUpdated(recipeList: RecipeList) {
        if (_currentRecipeList.value?.id == recipeList.id) {
            _currentRecipeList.value = recipeList.copy()
        }
    }

    private fun setCurrentRecipe(recipe: Recipe) {
        val user = CurrentUserCache.user

        if (user == null) {
            _currentRecipe.value = recipe
        }
        else {
            if (user.favoriteRecipes.containsKey(recipe.id)) {
                recipe.isFavorite = true
            }

            _currentRecipe.value = recipe
        }
    }

    private fun setCurrentRecipes(recipes: List<Recipe>, recipesList: MutableStateFlow<List<Recipe>>) {
        val user = CurrentUserCache.user

        if (user == null) {
            recipesList.value = recipes
        }
        else {
            for (recipe in recipes) {
                if (user.favoriteRecipes.containsKey(recipe.id)) {
                    recipe.isFavorite = true
                }
            }

            recipesList.value = recipes
        }
    }

    // Récupération par l'API ----------------------------------------------------------------------
    // Récupération des recettes à partir de l'API
    fun fetchRecipes(categoryName: String = "", recipeName: String = "") {
        viewModelScope.launch {
            loadingFlow({
                val recipes = apiRepository.getRecipes(categoryName, recipeName)
                setCurrentRecipes(recipes, _currentRecipes)
            }, _isLoading)
        }
    }

    // Récupération de plusieurs recettes par id
    private fun fetchRecipesByIds(ids: List<String>) {
        viewModelScope.launch {
            loadingFlow({
                val recipes = apiRepository.getRecipesByIds(ids)
                setCurrentRecipes(recipes, _currentRecipes)
            }, _isLoading)
        }
    }

    // Récupération d'une recette à partir de l'API
    fun fetchRecipeById(id: String) {
        viewModelScope.launch {
            loadingFlow({
                val recipe = apiRepository.getRecipeById(id)
                setCurrentRecipe(recipe)
            }, _isLoading)
        }
    }

    // Récupération des recettes contenant un item à partir de l'API
    fun fetchRecipesByIngredient(ingredientId: String) {
        viewModelScope.launch {
            loadingFlow({
                val recipes = apiRepository.getRecipesContainingIngredient(ingredientId)
                setCurrentRecipes(recipes, _ingredientRecipes)
            }, _isLoading)
        }
    }

    // Récupération des catégories de recettes à partir de l'API
    fun fetchRecipeCategories() {
        viewModelScope.launch {
            loadingFlow({
                val categories = apiRepository.getRecipeCategories()
                _recipeCategories.value = categories
            }, _isLoading)
        }
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
        _currentRecipeList.value = user.recipeLists[recipeList.id]?.copy()
    }

    // Ajout de liste de recettes à l'utilisateur connecté
    fun addRecipeList(recipeList: RecipeList) {
        val user = CurrentUserCache.user ?: return
        user.recipeLists[recipeList.id] = recipeList

        _recipeLists.value = user.recipeLists.values.toList()

        viewModelScope.launch {
            userDB.updateRecipeList(recipeList)
        }
    }

    // Suppression de liste de recettes de l'utilisateur connecté
    fun deleteRecipeList(recipeList: RecipeList) {
        val user = CurrentUserCache.user ?: return
        user.recipeLists.remove(recipeList.id)

        _recipeLists.value = user.recipeLists.values.toList()

        viewModelScope.launch {
            userDB.deleteRecipeList(recipeList)
        }
    }

    // Mise à jour de liste de recettes de l'utilisateur connecté
    fun updateRecipeList(recipeList: RecipeList) {
        val user = CurrentUserCache.user ?: return
        user.recipeLists[recipeList.id] = recipeList

        recipeListUpdated(recipeList)
        _recipeLists.value = user.recipeLists.values.toList()

        viewModelScope.launch {
            userDB.updateRecipeList(recipeList)
        }
    }

    // Ajout de recette à une liste de recettes de l'utilisateur connecté
    fun addRecipeToList(recipe: Recipe, recipeList: RecipeList) {
        val user = CurrentUserCache.user ?: return
        user.recipeLists[recipeList.id]?.recipes?.add(recipe)

        recipeListUpdated(user.recipeLists[recipeList.id]!!)
        _recipeLists.value = user.recipeLists.values.toList()

        viewModelScope.launch {
            userDB.updateRecipeList(user.recipeLists[recipeList.id]!!)
        }
    }

    // Suppression de recette d'une liste de recettes de l'utilisateur connecté
    fun removeRecipeFromList(recipe: Recipe, recipeList: RecipeList) {
        val user = CurrentUserCache.user ?: return
        user.recipeLists[recipeList.id]?.recipes?.remove(recipe)

        recipeListUpdated(user.recipeLists[recipeList.id]!!)
        _recipeLists.value = user.recipeLists.values.toList()

        viewModelScope.launch {
            userDB.updateRecipeList(user.recipeLists[recipeList.id]!!)
        }
    }

    // Recettes favorites de l'utilisateur ---------------------------------------------------------
    fun addFavoriteRecipe(recipe: Recipe) {
        val user = CurrentUserCache.user ?: return
        user.favoriteRecipes[recipe.id] = true

        viewModelScope.launch {
            userDB.addFavoriteRecipe(recipe)
        }
    }

    fun removeFavoriteRecipe(recipe: Recipe) {
        val user = CurrentUserCache.user ?: return
        user.favoriteRecipes.remove(recipe.id)

        viewModelScope.launch {
            userDB.removeFavoriteRecipe(recipe)
        }
    }

    fun loadFavoriteRecipes() {
        val user = CurrentUserCache.user ?: return

        fetchRecipesByIds(user.favoriteRecipes.keys.toList())
    }
}