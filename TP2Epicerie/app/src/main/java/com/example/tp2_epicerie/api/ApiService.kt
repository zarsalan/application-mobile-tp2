package com.example.tp2_epicerie.api

import com.example.tp2_epicerie.data.GroceryItemAPI
import com.example.tp2_epicerie.data.GroceryItemCategoryAPI
import com.example.tp2_epicerie.data.Recipe
import com.example.tp2_epicerie.data.RecipeCategory
import retrofit2.http.GET
import retrofit2.http.Path
import retrofit2.http.Query

interface ApiService {
    // Routes pour items -----------------------------------------------------
    @GET("grocery-items/get")
    suspend fun getGroceryItemsByName(
        @Query("name") name: String
    ): List<GroceryItemAPI>

    @GET("grocery-items/get")
    suspend fun getGroceryItemsByCategory(
        @Query("categoryName") categoryName: String
    ): List<GroceryItemAPI>

    @GET("grocery-items/get")
    suspend fun getGroceryItemsByCategoryAndName(
        @Query("categoryName") categoryName: String,
        @Query("name") name: String
    ): List<GroceryItemAPI>

    @GET("grocery-items/get/{id}")
    suspend fun getGroceryItemById(
        @Path("id") id: String
    ): GroceryItemAPI

    @GET("grocery-items/get-items")
    suspend fun getAllGroceryItems(): List<GroceryItemAPI>

    @GET("grocery-items/get-categories")
    suspend fun getGroceryCategories(): List<GroceryItemCategoryAPI>

    // Routes pour les recettes ----------------------------------------------
    @GET("recipes/get")
    suspend fun getRecipes(
        @Query("categoryName") categoryName: String? = null,
        @Query("name") name: String? = null
    ): List<Recipe>

    @GET("recipes/get/{id}")
    suspend fun getRecipeById(
        @Path("id") id: String
    ): Recipe

    @GET("recipes/get-recipes")
    suspend fun getAllRecipes(): List<Recipe>

    @GET("recipes/get-categories")
    suspend fun getRecipeCategories(): List<RecipeCategory>
}