import android.net.Uri
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.State
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.tp2_epicerie.GroceryApp
import com.example.tp2_epicerie.data.GroceryDatabase
import com.example.tp2_epicerie.data.GroceryList
import com.example.tp2_epicerie.data.ListConnexion
import com.example.tp2_epicerie.data.ListItem
import com.example.tp2_epicerie.data.Settings
import com.example.tp2_epicerie.data.User
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch

class GroceryViewModel(
    private val database: GroceryDatabase = GroceryDatabase.getDatabase(GroceryApp.context)
) : ViewModel() {

    private val userBD = database.userBD
    private val listConnexionBD = database.listConnexionBD
    private val settingsBD = database.settingsBD
    private val groceryListBD = database.groceryListBD
    private val listItemBD = database.listItemBD


    // Stockage de l'utilisateur connecté
    private val _currentUser = MutableStateFlow<User?>(null)
    val currentUser: StateFlow<User?> = _currentUser

    // Connexion utilisateur
    fun loginUser(username: String, password: String, onResult: (Boolean) -> Unit) {
        viewModelScope.launch {
            try {
                val success = userBD.loginUser(username, password)
                if (success) {
                    // Récupérer les informations de l'utilisateur connecté
                    val userSnapshot = userBD.getUserByUsername(username)
                    _currentUser.value = userSnapshot
                }
                onResult(success)
            } catch (e: Exception) {
                println("Erreur lors de la connexion : ${e.message}")
                onResult(false)
            }
        }
    }

    // Création d'utilisateur
    fun createUser(user: User, password: String, imageUri: Uri, onResult: (Boolean) -> Unit) {
        viewModelScope.launch {
            try {
                userBD.createUser(user, password, imageUri)
                _currentUser.value = user // Sauvegarde de l'utilisateur nouvellement créé
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
    }

    // Section ListConnexion -------------------------------------------------
    fun createListConnexion(connexion: ListConnexion) {
        viewModelScope.launch {
            try {
                listConnexionBD.createListConnexion(connexion)
            } catch (e: Exception) {
                println("Erreur lors de la création de la connexion : ${e.message}")
            }
        }
    }

    fun updateListConnexionPermission(connexionId: String, newPermission: String) {
        viewModelScope.launch {
            try {
                listConnexionBD.updateListConnexionPermission(connexionId, newPermission)
            } catch (e: Exception) {
                println("Erreur lors de la mise à jour de la permission : ${e.message}")
            }
        }
    }

    fun deleteListConnexion(connexionId: String) {
        viewModelScope.launch {
            try {
                listConnexionBD.deleteListConnexion(connexionId)
            } catch (e: Exception) {
                println("Erreur lors de la suppression de la connexion : ${e.message}")
            }
        }
    }

    // Section Settings -------------------------------------------------
    private val _settings = MutableStateFlow<Settings?>(null)
    val settings: StateFlow<Settings?> = _settings

    fun fetchSettings(userId: String) {
        viewModelScope.launch {
            try {
                val userSettings = settingsBD.getSettings(userId)
                _settings.value = userSettings
            } catch (e: Exception) {
                println("Erreur lors de la récupération des paramètres : ${e.message}")
            }
        }
    }

    fun updateSettings(settings: Settings) {
        viewModelScope.launch {
            try {
                settingsBD.createOrUpdateSettings(settings)
            } catch (e: Exception) {
                println("Erreur lors de la mise à jour des paramètres : ${e.message}")
            }
        }
    }

    // Section GroceryList -------------------------------------------------
    private val _userGroceryLists = MutableStateFlow<List<GroceryList>>(emptyList())
    val userGroceryLists: StateFlow<List<GroceryList>> = _userGroceryLists

    fun fetchUserGroceryLists(userId: String) {
        viewModelScope.launch {
            try {
                val lists = groceryListBD.fetchAllGroceryListsByUserId(userId)
                _userGroceryLists.value = lists
            } catch (e: Exception) {
                println("Erreur lors de la récupération des listes de l'utilisateur : ${e.message}")
            }
        }
    }

    fun createGroceryList(groceryList: GroceryList) {
        viewModelScope.launch {
            try {
                groceryListBD.createGroceryList(groceryList)
            } catch (e: Exception) {
                println("Erreur lors de la création de la liste : ${e.message}")
            }
        }
    }

    fun updateGroceryList(groceryList: GroceryList) {
        viewModelScope.launch {
            try {
                groceryListBD.updateGroceryList(groceryList)
            } catch (e: Exception) {
                println("Erreur lors de la mise à jour de la liste : ${e.message}")
            }
        }
    }

    fun deleteGroceryList(listId: String) {
        viewModelScope.launch {
            try {
                groceryListBD.deleteGroceryList(listId)
            } catch (e: Exception) {
                println("Erreur lors de la suppression de la liste : ${e.message}")
            }
        }
    }

    // Section ListItem -------------------------------------------------
    fun createListItem(listItem: ListItem) {
        viewModelScope.launch {
            try {
                listItemBD.createListItem(listItem)
            } catch (e: Exception) {
                println("Erreur lors de la création de l'élément de la liste : ${e.message}")
            }
        }
    }

    fun updateListItem(listItem: ListItem) {
        viewModelScope.launch {
            try {
                listItemBD.updateListItem(listItem)
            } catch (e: Exception) {
                println("Erreur lors de la mise à jour de l'élément de la liste : ${e.message}")
            }
        }
    }

    fun deleteListItem(itemId: String) {
        viewModelScope.launch {
            try {
                listItemBD.deleteListItem(itemId)
            } catch (e: Exception) {
                println("Erreur lors de la suppression de l'élément de la liste : ${e.message}")
            }
        }
    }


    // État actuel du mode sombre
    private val _isDarkTheme = MutableStateFlow(false)
    val isDarkTheme: StateFlow<Boolean> = _isDarkTheme

    init {
        // Initialiser le mode sombre à partir des paramètres de Firebase
        viewModelScope.launch {
            val userId = getCurrentUserId()
            val settings = settingsBD.getSettings(userId)
            _isDarkTheme.value = settings?.darkMode ?: false
        }
    }

    // Mise à jour du mode sombre
    fun updateDarkMode(enabled: Boolean) {
        viewModelScope.launch {
            val userId =
            val currentSettings = settingsBD.getSettings(userId) ?: Settings(userId = userId)
            val updatedSettings = currentSettings.copy(darkMode = enabled)

            try {
                settingsBD.createOrUpdateSettings(updatedSettings)
                _isDarkTheme.value = enabled
            } catch (e: Exception) {
                println("Erreur lors de la mise à jour du mode sombre : ${e.message}")
            }
        }
    }

}