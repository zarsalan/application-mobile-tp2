package com.example.tp2_epicerie.api

import com.example.tp2_epicerie.data.GroceryItem
import com.example.tp2_epicerie.data.Recipe

class ApiRepository {
    // Requêttes pour les items -----------------------------------------------------
    suspend fun getGroceryItemsByName(name: String) : List<GroceryItem> {
        return RetrofitInstance.apiService.getGroceryItemsByName(name)
    }

    suspend fun getGroceryItemsByCategory(categoryName: String) : List<GroceryItem> {
        return RetrofitInstance.apiService.getGroceryItemsByCategory(categoryName)
    }

    suspend fun getGroceryItemsByCategoryAndName(categoryName: String, name: String) : List<GroceryItem> {
        return RetrofitInstance.apiService.getGroceryItemsByCategoryAndName(categoryName, name)
    }

    suspend fun getGroceryItemById(id: String) : GroceryItem {
        return RetrofitInstance.apiService.getGroceryItemById(id)
    }

    suspend fun getAllGroceryItems() : List<GroceryItem> {
        return RetrofitInstance.apiService.getAllGroceryItems()
    }

    suspend fun getGroceryCategories() : List<String> {
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

    suspend fun getRecipeCategories() : List<String> {
        return RetrofitInstance.apiService.getRecipeCategories()
    }
}