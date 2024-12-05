package com.example.tp1_epicerie.data

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.Index
import androidx.room.PrimaryKey
import androidx.room.TypeConverter
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken

data class ListItem(
    var id: String = "",
    var groceryItem: String = "",
    var groceryListId: String = "",
    var quantity: Int = 0,
    var isCrossed: Boolean = false,
    var userId: String = ""
)

data class GroceryList(
    var id: String = "",
    var title: String = "",
    var description: String = ""
)

data class Settings(
    var id: String = "app_settings",
    var userId: String = "",
    var darkMode: Boolean = false,
    var language: String = "fr"
)

data class User(
    var id: String = "",
    var username: String = "",
    var password: String = "", // Stocke le mot de passe haché de bcrypt
    var iconUrl: String = "" // URL de l'image stockée dans Firebase Storage
)

data class ListConnexion(
    var id: String = "",
    var userId: String = "",
    var listId: String = "",
    var permission: String = "" //Reader, Modifier, Admin, Founder
)