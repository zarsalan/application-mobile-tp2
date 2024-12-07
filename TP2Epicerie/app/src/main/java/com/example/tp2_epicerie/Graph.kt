package com.example.tp2_epicerie

import android.content.Context
import com.example.tp2_epicerie.api.ApiRepository
import com.example.tp2_epicerie.data.GroceryDatabase
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.storage.FirebaseStorage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.SupervisorJob

object Graph {
    private lateinit var database: GroceryDatabase

    // Initialisation de l'API
    val apiRepository: ApiRepository by lazy { ApiRepository() }

    // Base de données UserDB
    val userDB by lazy { database.userDB }

    // Initialisation de la base de données
    fun provide(context: Context) {
        database = GroceryDatabase.getDatabase()
    }
}