package com.example.tp1_epicerie

import android.app.Application
import android.content.Context

// Classe GroceryApp pour initialiser le graph
class GroceryApp : Application() {

    companion object {
        lateinit var instance: GroceryApp
            private set

        val context: Context
            get() = instance.applicationContext
    }

    override fun onCreate() {
        super.onCreate()

        // Initialisation de l'instance
        instance = this

        // Initialisation du graph
        Graph.provide(this)
    }
}