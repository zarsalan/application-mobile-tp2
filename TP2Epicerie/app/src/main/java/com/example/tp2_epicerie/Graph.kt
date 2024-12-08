package com.example.tp2_epicerie

import android.content.Context
import com.example.tp2_epicerie.repositories.ApiRepository
import com.example.tp2_epicerie.data.GroceryDatabase
import com.example.tp2_epicerie.repositories.GroceryRepository

object Graph {
    private lateinit var database: GroceryDatabase

    // Initialisation des repositories
    val apiRepository: ApiRepository by lazy { ApiRepository() }
    val groceryRepository: GroceryRepository by lazy { GroceryRepository() }

    // Base de données UserDB
    val userDB by lazy { database.userDB }

    // Initialisation de la base de données
    fun provide(context: Context) {
        database = GroceryDatabase.getDatabase()
    }
}