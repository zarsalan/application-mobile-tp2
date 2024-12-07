package com.example.tp2_epicerie.data

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.Index
import androidx.room.PrimaryKey

data class User(
    var id: String = "",
    var username: String = "",
    var password: String = "", // Stocke le mot de passe haché de bcrypt
    var settings: Settings = Settings(),
    var groceryLists: List<GroceryList> = emptyList(),
    var recipeLists: List<RecipeList> = emptyList(),
)

data class Settings(
    var id: String = "",
    var darkMode: Boolean = false,
    var language: String = "fr"
)

data class GroceryList(
    var id: String = "",
    var title: String = "",
    var description: String = "",
    var listItems: List<ListItem> = emptyList(),
)

data class ListItem(
    var id: String = "",
    var groceryListId: String = "", // Référence à la liste GroceryList
    var groceryItemId: String = "", // Référence à l'item d'épicerie
    var quantity: Int = 0,
    var isCrossed: Boolean = false,
    var isFavorite: Boolean = false,
)

// Entités venant de l'API (modifiable par l'utilisateur)
data class GroceryItem(
    var id: String = "",
    var idApi: String = "",
    var categoryId: String = "", // Référence à la catégorie GroceryItemCategory
    var name: String = "",
    var description: String = "",
)

data class GroceryItemCategory(
    var id: String = "",
    var idApi: String = "",
    val name: String = "",
    val description: String = "",
)

data class RecipeList(
    var id: String = "",
    var title: String = "",
    var description: String = "",
    var recipes: List<Recipe> = emptyList(),
)

// Entités venant de l'API (NON modifiable par l'utilisateur)
data class Recipe(
    var id: String = "",
    var idApi: String = "",
    var name: String,
    var description: String,
    var ingredients: List<Ingredient>,
    var steps: List<String>,
    var category: RecipeCategory,
)

data class RecipeCategory(
    var id: String = "",
    var idApi: String = "",
    var name: String,
    var description: String
)

data class Ingredient(
    var groceryItem: GroceryItem,
    var quantity: Int,
)