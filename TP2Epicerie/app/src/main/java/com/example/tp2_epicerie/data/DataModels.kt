package com.example.tp2_epicerie.data

import com.google.gson.annotations.SerializedName
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
            title = "Liste d'épicerie",
            description = "Liste d'épicerie",
        )
    ),
    var favoriteRecipes: MutableMap<String, Boolean> = mutableMapOf(), // Id de la recette et si elle est favorite
    var recipeLists: MutableMap<String, RecipeList> = mutableMapOf(
        "1" to RecipeList(
            id = "1",
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
) {
    fun copy(): GroceryList {
        return GroceryList(
            id = this.id,
            title = this.title,
            description = this.description,
            listItems = this.listItems.toMutableList()
        )
    }
}

data class ListItem(
    var id: String = UUID.randomUUID().toString(), // Idée unique générée par UUID
    var groceryListId: String = "", // Référence à l'id de GroceryList
    var groceryItemId: String = "", // Référence à l'id de GroceryItemUser
    var quantity: Int = 0,
    var isChecked: Boolean = false,
)

data class RecipeList(
    @SerializedName("_id") var id: String = UUID.randomUUID().toString(), // Idée unique générée par UUID
    var title: String = "",
    var description: String = "",
    var recipes: MutableList<Recipe> = mutableListOf(),
) {
    fun copy(): RecipeList {
        return RecipeList(
            id = this.id,
            title = this.title,
            description = this.description,
            recipes = this.recipes.toMutableList()
        )
    }
}

// Entités venant de l'API et modifié par l'utilisateur
data class GroceryItemUser(
    var id: String = UUID.randomUUID().toString(), // Idée unique de l'api ou générée par UUID
    var categoryId: String = "", // Référence au id de GroceryItemCategory
    var name: String = "",
    var description: String = "",
    var isFavorite: Boolean = false,
)

data class GroceryItemCategory(
    @SerializedName("_id") var id: String = "", // Idée unique de l'api ou générée par UUID
    val userCreated: Boolean = false, // Si la catégorie a été créée par l'utilisateur
    val name: String = "",
    val description: String = "",
)

data class GroceryItem(
    @SerializedName("_id") var id: String = "",
    var userCreated: Boolean = false, // Si l'item a été créé par l'utilisateur
    var category: GroceryItemCategory = GroceryItemCategory(),
    var name: String = "",
    var description: String = "",
    var isFavorite: Boolean = false,
) {
    fun toUserItem(): GroceryItemUser {
        return GroceryItemUser(
            id = this.id,
            categoryId = this.category.id,
            name = this.name,
            description = this.description,
            isFavorite = this.isFavorite
        )
    }
}

// Entités venant de l'API (NON modifiable par l'utilisateur)
data class Recipe(
    @SerializedName("_id") var id: String = "", // Idée unique de l'api
    var name: String,
    var description: String,
    var ingredients: List<Ingredient>,
    var steps: List<String>,
    var category: RecipeCategory,
    var isFavorite: Boolean = false,
)

data class RecipeCategory(
    @SerializedName("_id") var id: String = "",
    var name: String,
    var description: String
)

data class Ingredient(
    var groceryItem: GroceryItem,
    var quantity: String,
)