package com.example.tp2_epicerie.data

import android.content.Context
import android.net.Uri
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ktx.toObject
import com.google.firebase.storage.FirebaseStorage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.tasks.await
import org.mindrot.jbcrypt.BCrypt


class GroceryDatabase private constructor(
    val userBD: UserBD,
    val listConnexionBD: ListConnexionBD,
    val settingsBD: SettingsBD,
    val groceryListBD: GroceryListBD,
    val listItemBD: ListItemBD
) {

    companion object {
        @Volatile
        private var INSTANCE: GroceryDatabase? = null

        fun getDatabase(context: Context): GroceryDatabase {
            return INSTANCE ?: synchronized(this) {
                val db = FirebaseFirestore.getInstance()
                val storage = FirebaseStorage.getInstance()

                val instance = GroceryDatabase(
                    userBD = UserBD(db, storage),
                    listConnexionBD = ListConnexionBD(db),
                    settingsBD = SettingsBD(db),
                    groceryListBD = GroceryListBD(db),
                    listItemBD = ListItemBD(db)
                )

                INSTANCE = instance
                instance
            }
        }
    }
}

class UserBD(private val db: FirebaseFirestore, private val storage: FirebaseStorage) {

    suspend fun createUser(user: User, password: String, imageUri: Uri) {
        val hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt())
        val iconRef = storage.reference.child("userIcons/${user.id}.jpg")

        try {
            // 1. Télécharge l'image
            iconRef.putFile(imageUri).await()
            val iconUrl = iconRef.downloadUrl.await().toString()

            // 2. Crée un utilisateur avec le mot de passe haché et l'URL d'image
            val newUser = user.copy(password = hashedPassword, iconUrl = iconUrl)
            db.collection("users").document(newUser.id).set(newUser).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la création de l'utilisateur : ${e.message}")
        }
    }

    suspend fun loginUser(username: String, password: String): Boolean {
        try {
            val snapshot = db.collection("users")
                .whereEqualTo("username", username)
                .get().await()

            if (!snapshot.isEmpty) {
                val user = snapshot.documents[0].toObject<User>() ?: return false
                return BCrypt.checkpw(password, user.password)
            }
        } catch (e: Exception) {
            throw Exception("Erreur lors de la connexion : ${e.message}")
        }
        return false
    }
}

class ListConnexionBD(private val db: FirebaseFirestore) {

    suspend fun createListConnexion(connexion: ListConnexion) {
        try {
            db.collection("listConnexions").document(connexion.id).set(connexion).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la création de la connexion : ${e.message}")
        }
    }

    suspend fun updateListConnexionPermission(connexionId: String, newPermission: String) {
        try {
            db.collection("listConnexions").document(connexionId)
                .update("permission", newPermission).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour des permissions : ${e.message}")
        }
    }

    suspend fun deleteListConnexion(connexionId: String) {
        try {
            db.collection("listConnexions").document(connexionId).delete().await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la suppression de la connexion : ${e.message}")
        }
    }
}

class SettingsBD(private val db: FirebaseFirestore) {

    suspend fun createOrUpdateSettings(settings: Settings) {
        try {
            db.collection("settings").document(settings.id).set(settings).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour des paramètres : ${e.message}")
        }
    }

    suspend fun getSettings(userId: String): Settings? {
        try {
            val snapshot = db.collection("settings").whereEqualTo("userId", userId).get().await()
            if (!snapshot.isEmpty) {
                return snapshot.documents[0].toObject<Settings>()
            }
        } catch (e: Exception) {
            throw Exception("Erreur lors de la récupération des paramètres : ${e.message}")
        }
        return null
    }
}

class GroceryListBD(private val db: FirebaseFirestore) {

    suspend fun createGroceryList(groceryList: GroceryList) {
        try {
            db.collection("groceryLists").document(groceryList.id).set(groceryList).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la création de la liste : ${e.message}")
        }
    }

    suspend fun updateGroceryList(groceryList: GroceryList) {
        try {
            db.collection("groceryLists").document(groceryList.id).set(groceryList).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour de la liste : ${e.message}")
        }
    }

    suspend fun deleteGroceryList(listId: String) {
        try {
            db.collection("groceryLists").document(listId).delete().await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la suppression de la liste : ${e.message}")
        }
    }

    /**
     * Récupère toutes les GroceryLists liées à un utilisateur via ListConnexion
     * @param userId L'ID de l'utilisateur
     * @return Une liste de GroceryList
     */
    suspend fun fetchAllGroceryListsByUserId(userId: String): List<GroceryList> {
        try {
            // 1. Récupère toutes les ListConnexion associées à l'utilisateur
            val listConnexionsSnapshot = db.collection("listConnexions")
                .whereEqualTo("userId", userId)
                .get()
                .await()

            if (listConnexionsSnapshot.isEmpty) return emptyList()

            val listIds = listConnexionsSnapshot.documents.mapNotNull { it.toObject<ListConnexion>()?.listId }

            // 2. Récupère toutes les GroceryLists liées aux IDs dans listIds
            val groceryListsSnapshot = db.collection("groceryLists")
                .whereIn("id", listIds)
                .get()
                .await()

            return groceryListsSnapshot.documents.mapNotNull { it.toObject<GroceryList>() }
        } catch (e: Exception) {
            throw Exception("Erreur lors de la récupération des listes pour l'utilisateur : ${e.message}")
        }
    }
}

class ListItemBD(private val db: FirebaseFirestore) {

    suspend fun createListItem(listItem: ListItem) {
        try {
            db.collection("listItems").document(listItem.id).set(listItem).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la création de l'élément de la liste : ${e.message}")
        }
    }

    suspend fun updateListItem(listItem: ListItem) {
        try {
            db.collection("listItems").document(listItem.id).set(listItem).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour de l'élément : ${e.message}")
        }
    }

    suspend fun deleteListItem(itemId: String) {
        try {
            db.collection("listItems").document(itemId).delete().await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la suppression de l'élément : ${e.message}")
        }
    }
}