package com.example.tp2_epicerie.utilities

import kotlinx.coroutines.flow.MutableStateFlow

// Fonction qui permet de gérer l'état de chargement d'une fonction asynchrone
suspend fun <T> loadingFlow(block: suspend () -> T, loadingState: MutableStateFlow<Boolean>): T {
    loadingState.value = true
    return try {
        block()
    } finally {
        loadingState.value = false
    }
}