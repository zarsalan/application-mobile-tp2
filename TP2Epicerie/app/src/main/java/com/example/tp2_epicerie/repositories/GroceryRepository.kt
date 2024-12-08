package com.example.tp2_epicerie.repositories

import com.example.tp2_epicerie.CurrentUserCache
import com.example.tp2_epicerie.Graph
import com.example.tp2_epicerie.data.GroceryItem
import com.example.tp2_epicerie.data.GroceryItemCategory
import com.example.tp2_epicerie.data.GroceryItemUser
import com.example.tp2_epicerie.data.UserDB
import java.util.UUID

class GroceryRepository(private val userDB: UserDB = Graph.userDB){
    // Ajout d'une catégorie d'item d'épicerie à l'utilisateur
    suspend fun addUserCategory(category: GroceryItemCategory): GroceryItemCategory {
        val user = CurrentUserCache.user ?: throw Exception("L'utilisateur n'est pas connecté")

        // Vérification de l'existence de la catégorie
        val existingCategory = user.groceryCategories.values.find { it.name == category.name }
        if (existingCategory != null) {
            return existingCategory
        }

        // On ajoute un id à la catégorie si manquant
        val categoryWithId = if (category.id.isBlank()) {
            category.copy(id = UUID.randomUUID().toString())
        } else {
            category
        }

        // Création d'une nouvelle catégorie
        user.groceryCategories[categoryWithId.id] = categoryWithId
        userDB.updateGroceryCategory(categoryWithId)

        return categoryWithId
    }

    // Ajout d'un item d'épicerie à l'utilisateur
    suspend fun addUserGroceryItem(item: GroceryItem): GroceryItemUser {
        val user = CurrentUserCache.user ?: throw Exception("L'utilisateur n'est pas connecté")

        // On obtient la catégorie de l'item
        val category = addUserCategory(item.category)

        // Création d'un nouvel item d'épicerie pour l'utilisateur
        val groceryItemUser = GroceryItemUser(
            id = item.id,
            categoryId = category.id,
            name = item.name,
            description = item.description,
            isFavorite = item.isFavorite,
        )

        // Ajout de l'item à la liste d'items d'épicerie de l'utilisateur
        user.groceryItems[item.id] = groceryItemUser

        // Mise à jour de la base de données
        userDB.updateGroceryItem(groceryItemUser)

        return groceryItemUser
    }

    // Suppression des items d'épicerie de l'utilisateur dépendant de la catégorie
    suspend fun removeGroceryItemsByCategory(category: GroceryItemCategory) {
        val user = CurrentUserCache.user ?: throw Exception("L'utilisateur n'est pas connecté")

        // Suppression des items d'épicerie de la catégorie
        val itemsToDelete = user.groceryItems.values.filter { it.categoryId == category.id }
        for (item in itemsToDelete) {
            user.groceryItems.remove(item.id)
        }

        // Mise à jour de la base de données
        userDB.updateGroceryItems()
    }
}