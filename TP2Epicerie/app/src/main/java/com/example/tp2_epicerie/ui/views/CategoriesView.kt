package com.example.tp2_epicerie.ui.views

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Scaffold
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.example.tp2_epicerie.R
import com.example.tp2_epicerie.Screen
import com.example.tp2_epicerie.ui.common.AppBarView
import com.example.tp2_epicerie.ui.common.CategoryCard
import com.example.tp2_epicerie.ui.common.CustomCategoryCardInfo
import com.example.tp2_epicerie.viewModels.GroceryCategoriesViewModel

// La page pour afficher les catégories
@Composable
fun CategoriesView(
    groceryCategoriesViewModel: GroceryCategoriesViewModel,
    navHostController: NavHostController
) {
    Scaffold(
        topBar = {
            AppBarView(
                title = Screen.Categories.title(),
                navHostController = navHostController,
            )
        },
        floatingActionButton = {
            FloatingActionButton(
                modifier = Modifier.padding(all = 20.dp),
                contentColor = Color.White,
                containerColor = colorResource(id = R.color.app_bar),
                onClick = {
                    navHostController.navigate(Screen.AddEditCategory.route + "/")
                }
            ) {
                Icon(imageVector = Icons.Default.Add, contentDescription = null)
            }
        }
    ) { paddingValues ->
        val categoriesList =
            groceryCategoriesViewModel.finalCategories.collectAsState(emptyList()).value
        val isLoading = groceryCategoriesViewModel.isLoading.collectAsState(false).value

        // Affichage des catégories dans un LazyColumn (comme recyclerView mais bien meilleur)
        if (isLoading) {
            // Affichage d'un loader
            CircularProgressIndicator(
                color = MaterialTheme.colorScheme.primary,
                strokeWidth = 4.dp
            )
        } else {
            if (categoriesList.isEmpty()) {
                // Affichage d'un message si la liste est vide
                Text(
                    text = "Aucune catégorie trouvée",
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(16.dp),
                    style = TextStyle(fontSize = 20.sp),
                )
            } else {
                LazyColumn(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(paddingValues)
                        .padding(top = 6.dp)
                ) {
                    items(categoriesList) { groceryItemCategory ->
                        CategoryCard(
                            groceryCategoriesViewModel = groceryCategoriesViewModel,
                            navHostController = navHostController,
                            cardInfo = CustomCategoryCardInfo(
                                groceryItemCategory = groceryItemCategory,
                                onClick = { navHostController.navigate(Screen.AddEditCategory.route + "/${groceryItemCategory.id}") },
                                containerColor = MaterialTheme.colorScheme.primaryContainer
                            )
                        )
                    }
                }
            }
        }
    }
}
