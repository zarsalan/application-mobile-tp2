package com.example.tp2_epicerie.repositories

import com.example.tp2_epicerie.api.RetrofitInstance
import com.example.tp2_epicerie.data.GroceryItem
import com.example.tp2_epicerie.data.GroceryItemCategory
import com.example.tp2_epicerie.data.Recipe
import com.example.tp2_epicerie.data.RecipeCategory

class ApiRepository {
    // Requêttes pour les items -----------------------------------------------------
    suspend fun getGroceryItemsByName(name: String) : List<GroceryItem> {
        val response = RetrofitInstance.apiService.getGroceryItemsByName(name)

        return if (response.isSuccessful) {
            response.body() ?: emptyList()
        } else {
            emptyList()
        }
    }

    suspend fun getGroceryItemsByCategory(categoryName: String) : List<GroceryItem> {
        val response = RetrofitInstance.apiService.getGroceryItemsByCategory(categoryName)

        return if (response.isSuccessful) {
            response.body() ?: emptyList()
        } else {
            emptyList()
        }
    }

    suspend fun getGroceryItemsByCategoryAndName(categoryName: String, name: String) : List<GroceryItem> {
        val response = RetrofitInstance.apiService.getGroceryItemsByCategoryAndName(categoryName, name)

        return if (response.isSuccessful) {
            response.body() ?: emptyList()
        } else {
            emptyList()
        }
    }

    suspend fun getGroceryItemById(id: String) : GroceryItem {
        val response = RetrofitInstance.apiService.getGroceryItemById(id)

        return if (response.isSuccessful) {
            response.body() ?: GroceryItem()
        } else {
            GroceryItem()
        }
    }

    suspend fun getAllGroceryItems() : List<GroceryItem> {
        val response = RetrofitInstance.apiService.getAllGroceryItems()

        return if (response.isSuccessful) {
            response.body() ?: emptyList()
        } else {
            emptyList()
        }
    }

    suspend fun getGroceryCategories() : List<GroceryItemCategory> {
        val response = RetrofitInstance.apiService.getGroceryCategories()

        return if (response.isSuccessful) {
            response.body() ?: emptyList()
        } else {
            emptyList()
        }
    }

    // Requêttes pour les recettes ---------------------------------------------------
    suspend fun getRecipes(categoryName: String? = null, name: String? = null) : List<Recipe> {
        val response = RetrofitInstance.apiService.getRecipes(categoryName, name)

        return if (response.isSuccessful) {
            response.body() ?: emptyList()
        } else {
            emptyList()
        }
    }

    suspend fun getRecipeById(id: String) : Recipe {
        val response = RetrofitInstance.apiService.getRecipeById(id)

        return if (response.isSuccessful) {
            response.body() ?: Recipe()
        } else {
            Recipe()
        }
    }

    suspend fun getRecipesByIds(ids: List<String>) : List<Recipe> {
        val response = RetrofitInstance.apiService.getRecipesByIds(ids)

        return if (response.isSuccessful) {
            response.body() ?: emptyList()
        } else {
            emptyList()
        }
    }

    suspend fun getAllRecipes() : List<Recipe> {
        val response = RetrofitInstance.apiService.getAllRecipes()

        return if (response.isSuccessful) {
            response.body() ?: emptyList()
        } else {
            emptyList()
        }
    }

    suspend fun getRecipesContainingIngredient(ingredientId: String) : List<Recipe> {
        val response = RetrofitInstance.apiService.getRecipesContainingIngredient(ingredientId)

        return if (response.isSuccessful) {
            response.body() ?: emptyList()
        } else {
            emptyList()
        }
    }

    suspend fun getRecipeCategories() : List<RecipeCategory> {
        val response = RetrofitInstance.apiService.getRecipeCategories()

        return if (response.isSuccessful) {
            response.body() ?: emptyList()
        } else {
            emptyList()
        }
    }
}