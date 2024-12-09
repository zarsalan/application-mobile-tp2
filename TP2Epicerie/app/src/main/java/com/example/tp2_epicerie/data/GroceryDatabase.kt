package com.example.tp2_epicerie.data

import com.example.tp2_epicerie.CurrentUserCache
import com.google.firebase.firestore.FieldValue
import com.google.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.tasks.await
import org.mindrot.jbcrypt.BCrypt

class GroceryDatabase private constructor(
    val userDB: UserDB,
) {
    companion object {
        @Volatile
        private var INSTANCE: GroceryDatabase? = null

        fun getDatabase(): GroceryDatabase {
            return INSTANCE ?: synchronized(this) {
                val db = FirebaseFirestore.getInstance()

                val instance = GroceryDatabase(
                    userDB = UserDB(db),
                )

                INSTANCE = instance
                instance
            }
        }
    }
}

// Base de données pour User ----------------------------------------------------------------------------
class UserDB(private val db: FirebaseFirestore) {
    private suspend fun usernameIsTaken(username: String): Boolean {
        val snapshot = db.collection("users")
            .whereEqualTo("username", username)
            .get()
            .await()
        return !snapshot.isEmpty
    }

    // Utilisateurs ----------------------------------------------------------------------------------------
    suspend fun createUser(user: User, password: String): User {
        if (usernameIsTaken(user.username)) {
            throw Exception("Nom d'utilisateur déjà pris")
        }

        val hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt())
        val documentReference = db.collection("users").document()
        val newUser = user.copy(id = documentReference.id, password = hashedPassword)

        try {
            documentReference.set(newUser).await()
            CurrentUserCache.user = newUser

            return newUser
        } catch (e: Exception) {
            throw Exception("Erreur lors de la création de l'utilisateur : ${e.message}")
        }
    }

    suspend fun loginUser(username: String, password: String): User? {
        try {
            val snapshot = db.collection("users")
                .whereEqualTo("username", username)
                .get().await()

            if (!snapshot.isEmpty) {
                val user = snapshot.documents[0].toObject(User::class.java) ?: return null

                if (BCrypt.checkpw(password, user.password)) {
                    CurrentUserCache.user = user

                    return user
                } else {
                    throw Exception("Mot de passe incorrect")
                }
            }
        } catch (e: Exception) {
            throw Exception("Erreur lors de la connexion : ${e.message}")
        }
        return null
    }

    // Paramètres de l'utilisateur ----------------------------------------------------------------------------
    suspend fun updateSettings() {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("settings", user.settings).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour des paramètres : ${e.message}")
        }
    }

    // Catégories d'items d'épicerie ----------------------------------------------------------------------------
    suspend fun updateGroceryCategories() {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("groceryCategories", user.groceryCategories).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour de la catégorie d'item d'épicerie : ${e.message}")
        }
    }

    suspend fun updateGroceryCategory(category: GroceryItemCategory) {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("groceryCategories.${category.id}", category).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour de la catégorie d'item d'épicerie : ${e.message}")
        }
    }

    suspend fun deleteGroceryCategory(categoryId: String) {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("groceryCategories.${categoryId}", FieldValue.delete()).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la suppression de la catégorie d'item d'épicerie : ${e.message}")
        }
    }

    // Items d'épicerie ----------------------------------------------------------------------------------------
    suspend fun updateGroceryItems() {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("groceryItems", user.groceryItems).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour de l'item d'épicerie : ${e.message}")
        }
    }

    suspend fun updateGroceryItem(item: GroceryItemUser) {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("groceryItems.${item.id}", item).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour de l'item d'épicerie : ${e.message}")
        }
    }

    suspend fun deleteGroceryItem(itemId: String) {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("groceryItems.${itemId}", FieldValue.delete()).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la suppression de l'item d'épicerie : ${e.message}")
        }
    }

    // Listes d'items d'épicerie ----------------------------------------------------------------------------
    suspend fun updateGroceryLists() {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("groceryLists", user.groceryLists).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour de la liste d'items d'épicerie : ${e.message}")
        }
    }

    suspend fun updateGroceryList(list: GroceryList) {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("groceryLists.${list.id}", list).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour de la liste d'items d'épicerie : ${e.message}")
        }
    }

    suspend fun deleteGroceryList(listId: String) {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("groceryLists.${listId}", FieldValue.delete()).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la suppression de la liste d'items d'épicerie : ${e.message}")
        }
    }

    // Listes de recettes ----------------------------------------------------------------------------
    suspend fun updateRecipeLists() {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("recipeLists", user.recipeLists).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour de la liste de recettes : ${e.message}")
        }
    }

    suspend fun updateRecipeList(list: RecipeList) {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("recipeLists.${list.id}", list).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour de la liste de recettes : ${e.message}")
        }
    }

    suspend fun deleteRecipeList(list: RecipeList) {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("recipeLists.${list.id}", FieldValue.delete()).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la suppression de la liste de recettes : ${e.message}")
        }
    }

    // Recettes favoris ----------------------------------------------------------------------------
    suspend fun updateFavoriteRecipes() {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("favoriteRecipes", user.favoriteRecipes).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la mise à jour des recettes favorites : ${e.message}")
        }
    }

    suspend fun addFavoriteRecipe(recipe: Recipe) {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("favoriteRecipes.${recipe.id}", true).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de l'ajout de la recette favorite : ${e.message}")
        }
    }

    suspend fun removeFavoriteRecipe(recipe: Recipe) {
        try {
            val user = CurrentUserCache.user ?: throw Exception("Utilisateur non connecté")
            db.collection("users").document(user.id).update("favoriteRecipes.${recipe.id}", FieldValue.delete()).await()
        } catch (e: Exception) {
            throw Exception("Erreur lors de la suppression de la recette favorite : ${e.message}")
        }
    }
}