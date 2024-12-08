package com.example.tp2_epicerie.viewModels

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.tp2_epicerie.CurrentUserCache
import com.example.tp2_epicerie.Graph
import com.example.tp2_epicerie.data.Settings
import com.example.tp2_epicerie.data.User
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class User : ViewModel() {
    private val userDB = Graph.userDB

    // Stockage de l'utilisateur connecté
    private val _currentUser = MutableStateFlow<User?>(null)
    val currentUser: StateFlow<User?> = _currentUser

    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading

    // Connexion utilisateur
    fun loginUser(username: String, password: String, onResult: (Boolean) -> Unit) {
        viewModelScope.launch {
            try {
                _isLoading.value = true

                val user = userDB.loginUser(username, password)
                if (user != null) {
                    // Récupérer les informations de l'utilisateur connecté
                    _currentUser.value = user
                }

                _isLoading.value = false
                onResult(user != null)
            } catch (e: Exception) {
                println("Erreur lors de la connexion : ${e.message}")
                onResult(false)
            }
        }
    }

    // Création d'utilisateur
    fun createUser(user: User, password: String, onResult: (Boolean) -> Unit) {
        viewModelScope.launch {
            try {
                _isLoading.value = true

                val newUser = userDB.createUser(user, password)
                _currentUser.value = newUser // Sauvegarde de l'utilisateur nouvellement créé

                _isLoading.value = false
                onResult(true)
            } catch (e: Exception) {
                println("Erreur lors de la création de l'utilisateur : ${e.message}")
                onResult(false)
            }
        }
    }

    // Déconnexion utilisateur
    fun logoutUser() {
        _currentUser.value = null // Réinitialisation de l'utilisateur connecté
        CurrentUserCache.user = null
    }

    fun updateSettings(settings: Settings) {
        if (_currentUser.value == null) {
            return
        }

        _currentUser.value = _currentUser.value!!.copy(settings = settings)

        viewModelScope.launch {
            try {
                userDB.updateSettings()
            } catch (e: Exception) {
                println("Erreur lors de la mise à jour des paramètres : ${e.message}")
            }
        }
    }
}