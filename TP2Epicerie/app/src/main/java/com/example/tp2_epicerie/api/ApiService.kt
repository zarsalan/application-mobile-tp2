package com.example.tp2_epicerie.api

import com.example.tp2_epicerie.data.GroceryItem
import com.example.tp2_epicerie.data.GroceryItemCategory
import com.example.tp2_epicerie.data.Recipe
import com.example.tp2_epicerie.data.RecipeCategory
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Path
import retrofit2.http.Query

interface ApiService {
    // Routes pour items -----------------------------------------------------
    @GET("grocery-items/get")
    suspend fun getGroceryItemsByName(
        @Query("name") name: String
    ): Response<List<GroceryItem>>

    @GET("grocery-items/get")
    suspend fun getGroceryItemsByCategory(
        @Query("categoryName") categoryName: String
    ): Response<List<GroceryItem>>

    @GET("grocery-items/get")
    suspend fun getGroceryItemsByCategoryAndName(
        @Query("categoryName") categoryName: String,
        @Query("name") name: String
    ): Response<List<GroceryItem>>

    @GET("grocery-items/get/{id}")
    suspend fun getGroceryItemById(
        @Path("id") id: String
    ): Response<GroceryItem>

    @GET("grocery-items/get-items")
    suspend fun getAllGroceryItems(): Response<List<GroceryItem>>

    @GET("grocery-items/get-categories")
    suspend fun getGroceryCategories(): Response<List<GroceryItemCategory>>

    // Routes pour les recettes ----------------------------------------------
    @GET("recipes/get")
    suspend fun getRecipes(
        @Query("categoryName") categoryName: String? = null,
        @Query("name") name: String? = null
    ): Response<List<Recipe>>

    @GET("recipes/get/{id}")
    suspend fun getRecipeById(
        @Path("id") id: String
    ): Response<Recipe>

    @GET("recipes/get-recipes")
    suspend fun getRecipesByIds(
        @Query("ids") ids: List<String>
    ): Response<List<Recipe>>

    @GET("recipes/get-recipes")
    suspend fun getAllRecipes(): Response<List<Recipe>>

    @GET("recipes/get-recipes-containing-ingredient")
    suspend fun getRecipesContainingIngredient(
        @Query("ingredientId") ingredientId: String
    ): Response<List<Recipe>>

    @GET("recipes/get-categories")
    suspend fun getRecipeCategories(): Response<List<RecipeCategory>>
}