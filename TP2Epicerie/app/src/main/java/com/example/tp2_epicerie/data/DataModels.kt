package com.example.tp2_epicerie.data

data class User(
    var id: String = "",
    var username: String = "",
    var password: String = "", // Stocke le mot de passe haché de bcrypt
    var settings: Settings = Settings(),
    var groceryCategories: MutableMap<String, GroceryItemCategoryUser> = mutableMapOf(),
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
    var id: String = "", // Idée unique générée par UUID
    var title: String = "",
    var description: String = "",
    var listItems: MutableList<ListItem> = mutableListOf(),
)

data class ListItem(
    var id: String = "", // Idée unique générée par UUID
    var groceryListId: String = "", // Référence à la liste GroceryList
    var groceryItemId: String = "", // Référence à l'item d'épicerie
    var quantity: Int = 0,
    var isCrossed: Boolean = false,
)

data class RecipeList(
    var id: String = "", // Idée unique générée par UUID
    var title: String = "",
    var description: String = "",
    var recipes: MutableList<Recipe> = mutableListOf(),
)

// Entités venant de l'API et modifié par l'utilisateur
data class GroceryItemUser(
    var id: String = "", // Idée unique générée par UUID
    var idApi: String = "",
    var categoryName: String = "", // Référence au nom de catégorie GroceryItemCategoryUser
    var name: String = "",
    var description: String = "",
    var isFavorite: Boolean = false,
)

data class GroceryItemCategoryUser(
    var id: String = "", // Idée unique générée par UUID
    var idApi: String = "",
    val name: String = "",
    val description: String = "",
)

// Entités venant de l'API (NON modifiable par l'utilisateur)
data class GroceryItemAPI(
    var id: String = "",
    var category: GroceryItemCategoryAPI,
    var name: String = "",
    var description: String = "",
)

data class GroceryItemCategoryAPI(
    var id: String = "",
    val name: String = "",
    val description: String = "",
)

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
    var name: String,
    var description: String
)

data class Ingredient(
    var groceryItem: GroceryItemAPI,
    var quantity: Int,
)