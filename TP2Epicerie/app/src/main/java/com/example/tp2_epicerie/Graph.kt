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

    // Firebase initialisation
    val firebaseFirestore: FirebaseFirestore by lazy { FirebaseFirestore.getInstance() }
    val firebaseStorage: FirebaseStorage by lazy { FirebaseStorage.getInstance() }

    // API initialisation
    val apiRepository: ApiRepository by lazy { ApiRepository() }

    // DAOs from GroceryDatabase
    val userDao by lazy { database.userBD }
    val listConnexionDao by lazy { database.listConnexionBD }
    val settingsDao by lazy { database.settingsBD }
    val groceryListDao by lazy { database.groceryListBD }
    val listItemDao by lazy { database.listItemBD }

    // Initialise the database
    fun provide(context: Context) {
        database = GroceryDatabase.getDatabase(context)
    }
}