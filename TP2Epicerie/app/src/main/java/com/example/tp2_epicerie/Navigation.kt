package com.example.tp2_epicerie

import androidx.compose.runtime.Composable
import androidx.navigation.compose.rememberNavController
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavType
import androidx.navigation.navArgument
import com.example.tp2_epicerie.ui.views.AddEditCategoryView
import com.example.tp2_epicerie.ui.views.AddEditItemView
import com.example.tp2_epicerie.ui.views.AddEditListView
import com.example.tp2_epicerie.ui.views.CategoriesView
import com.example.tp2_epicerie.ui.views.ConnexionView
import com.example.tp2_epicerie.ui.views.CustomGroceryListView
import com.example.tp2_epicerie.ui.views.GroceryItemsView
import com.example.tp2_epicerie.ui.views.HomeView
import com.example.tp2_epicerie.ui.views.SettingsView
import com.example.tp2_epicerie.viewModels.GroceryCategoriesViewModel
import com.example.tp2_epicerie.viewModels.GroceryItemsViewModel
import com.example.tp2_epicerie.viewModels.GroceryListsViewModel
import com.example.tp2_epicerie.viewModels.RecipeListsViewModel
import com.example.tp2_epicerie.viewModels.UserViewModel


@Composable
fun Navigation(
    modifier: Modifier = Modifier,
    userViewModel: UserViewModel = viewModel(),
    groceryCategoriesViewModel: GroceryCategoriesViewModel = viewModel(),
    groceryItemsViewModel: GroceryItemsViewModel = viewModel(),
    groceryListsViewModel: GroceryListsViewModel = viewModel(),
    recipeListsViewModel: RecipeListsViewModel = viewModel(),
    navHostController: NavHostController = rememberNavController()
) {
    NavHost(
        navController = navHostController,
        startDestination = Screen.ConnexionScreen.route,
        modifier = modifier
    ) {
        // Page de connexion
        composable(Screen.ConnexionScreen.route) {
            ConnexionView(
                userViewModel,
                groceryCategoriesViewModel,
                groceryItemsViewModel,
                groceryListsViewModel,
                recipeListsViewModel,
                navHostController
            )
        }

        // Page principal
        composable(Screen.HomeScreen.route) {
            HomeView(userViewModel, groceryListsViewModel, navHostController)
        }

        // Affichage de tous les articles
        composable(Screen.AllItems.route) {
            GroceryItemsView(
                groceryItemsViewModel,
                groceryListsViewModel,
                groceryCategoriesViewModel,
                navHostController,
                true
            )
        }

        // Affichage des articles favoris
        composable(Screen.Favorites.route) {
            GroceryItemsView(
                groceryItemsViewModel,
                groceryListsViewModel,
                groceryCategoriesViewModel,
                navHostController,
                false
            )
        }

        // Affichage d'une liste custom
        composable(
            Screen.GroceryList.route + "/{id}",
            arguments = listOf(navArgument("id") {
                type = NavType.StringType; defaultValue = ""; nullable
            })
        ) {
            val id = it.arguments?.getString("id") ?: ""
            CustomGroceryListView(
                id,
                groceryListsViewModel,
                groceryItemsViewModel,
                navHostController
            )
        }

        // Ajout ou modification d'une liste
        composable(
            Screen.AddEditListScreen.route + "/{id}",
            arguments = listOf(navArgument("id") {
                type = NavType.StringType; defaultValue = ""; nullable
            })
        ) {
            val id = it.arguments?.getString("id") ?: ""
            AddEditListView(id, groceryListsViewModel, navHostController)
        }

        // Ajout ou modification d'un article
        composable(
            Screen.AddEditItem.route + "/{id}",
            arguments = listOf(navArgument("id") {
                type = NavType.StringType; defaultValue = ""; nullable
            })
        ) {
            val id = it.arguments?.getString("id") ?: ""
            AddEditItemView(id, groceryItemsViewModel, groceryCategoriesViewModel, navHostController)
        }

        // Ajout ou modification d'une catégorie
        composable(
            Screen.AddEditCategory.route + "/{id}",
            arguments = listOf(navArgument("id") {
                type = NavType.StringType; defaultValue = ""; nullable
            })
        ) {
            val id = it.arguments?.getString("id") ?: ""
            AddEditCategoryView(id, groceryCategoriesViewModel, navHostController)
        }

        // Affichage de tous les catégories
        composable(Screen.Categories.route) {
            CategoriesView(groceryCategoriesViewModel, groceryItemsViewModel, navHostController)
        }

        // Paramètres
        composable(Screen.Settings.route) {
            SettingsView(userViewModel, navHostController)
        }

    }
}