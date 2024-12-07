package com.example.tp2_epicerie.api

import com.example.tp2_epicerie.data.GroceryItemAPI
import com.example.tp2_epicerie.data.GroceryItemCategoryAPI
import com.example.tp2_epicerie.data.Recipe
import com.example.tp2_epicerie.data.RecipeCategory

class ApiRepository {
    // Requêttes pour les items -----------------------------------------------------
    suspend fun getGroceryItemsByName(name: String) : List<GroceryItemAPI> {
        return RetrofitInstance.apiService.getGroceryItemsByName(name)
    }

    suspend fun getGroceryItemsByCategory(categoryName: String) : List<GroceryItemAPI> {
        return RetrofitInstance.apiService.getGroceryItemsByCategory(categoryName)
    }

    suspend fun getGroceryItemsByCategoryAndName(categoryName: String, name: String) : List<GroceryItemAPI> {
        return RetrofitInstance.apiService.getGroceryItemsByCategoryAndName(categoryName, name)
    }

    suspend fun getGroceryItemById(id: String) : GroceryItemAPI {
        return RetrofitInstance.apiService.getGroceryItemById(id)
    }

    suspend fun getAllGroceryItems() : List<GroceryItemAPI> {
        return RetrofitInstance.apiService.getAllGroceryItems()
    }

    suspend fun getGroceryCategories() : List<GroceryItemCategoryAPI> {
        return RetrofitInstance.apiService.getGroceryCategories()
    }

    // Requêttes pour les recettes ---------------------------------------------------
    suspend fun getRecipes(categoryName: String? = null, name: String? = null) : List<Recipe> {
        return RetrofitInstance.apiService.getRecipes(categoryName, name)
    }

    suspend fun getRecipeById(id: String) : Recipe {
        return RetrofitInstance.apiService.getRecipeById(id)
    }

    suspend fun getAllRecipes() : List<Recipe> {
        return RetrofitInstance.apiService.getAllRecipes()
    }

    suspend fun getRecipeCategories() : List<RecipeCategory> {
        return RetrofitInstance.apiService.getRecipeCategories()
    }
}