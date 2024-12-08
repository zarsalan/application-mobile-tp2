package com.example.tp2_epicerie.data

import java.util.UUID

data class User(
    var id: String = "",
    var username: String = "",
    var password: String = "", // Stocke le mot de passe haché de bcrypt
    var settings: Settings = Settings(),
    var groceryCategories: MutableMap<String, GroceryItemCategory> = mutableMapOf(),
    var groceryItems: MutableMap<String, GroceryItemUser> = mutableMapOf(),
    var groceryLists: MutableMap<String, GroceryList> = mutableMapOf(
        "1" to GroceryList(
            id = "1",
            title = "Liste favoris",
            description = "Liste des items favoris",
        ),
        "2" to GroceryList(
            id = "2",
            title = "Liste d'épicerie",
            description = "Liste d'épicerie",
        )
    ),
    var favoriteRecipes: MutableMap<String, Boolean> = mutableMapOf(), // Id de la recette et si elle est favorite
    var recipeLists: MutableMap<String, RecipeList> = mutableMapOf(
        "1" to RecipeList(
            id = "1",
            title = "Liste favoris",
            description = "Liste des recettes favoris",
        ),
        "2" to RecipeList(
            id = "2",
            title = "Liste de recettes",
            description = "Liste de recettes",
        )
    ),
)

data class Settings(
    var darkMode: Boolean = false,
    var language: String = "fr"
)

data class GroceryList(
    var id: String = UUID.randomUUID().toString(), // Idée unique générée par UUID
    var title: String = "",
    var description: String = "",
    var listItems: MutableList<ListItem> = mutableListOf(),
)

data class ListItem(
    var id: String = UUID.randomUUID().toString(), // Idée unique générée par UUID
    var groceryListId: String = "", // Référence à l'id de GroceryList
    var groceryItemId: String = "", // Référence à l'id de GroceryItemUser
    var quantity: Int = 0,
    var isChecked: Boolean = false,
)

data class RecipeList(
    var id: String = UUID.randomUUID().toString(), // Idée unique générée par UUID
    var title: String = "",
    var description: String = "",
    var recipes: MutableList<Recipe> = mutableListOf(),
)

// Entités venant de l'API et modifié par l'utilisateur
data class GroceryItemUser(
    var id: String = "", // Idée unique de l'api ou générée par UUID
    var categoryId: String = "", // Référence au id de GroceryItemCategory
    var name: String = "",
    var description: String = "",
    var isFavorite: Boolean = false,
)

data class GroceryItemCategory(
    var id: String = "", // Idée unique de l'api ou générée par UUID
    val userCreated: Boolean = false, // Si la catégorie a été créée par l'utilisateur
    val name: String = "",
    val description: String = "",
)

data class GroceryItem(
    var id: String = "",
    var category: GroceryItemCategory = GroceryItemCategory(),
    var name: String = "",
    var description: String = "",
    var isFavorite: Boolean = false,
)

// Entités venant de l'API (NON modifiable par l'utilisateur)
data class Recipe(
    var id: String = "", // Idée unique de l'api
    var name: String,
    var description: String,
    var ingredients: List<Ingredient>,
    var steps: List<String>,
    var category: RecipeCategory,
    var isFavorite: Boolean = false,
)

data class RecipeCategory(
    var id: String = "",
    var name: String,
    var description: String
)

data class Ingredient(
    var groceryItem: GroceryItem,
    var quantity: Int,
)