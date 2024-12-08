package com.example.tp2_epicerie.ui.views

import android.util.Log
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController

import com.example.tp2_epicerie.R
import com.example.tp2_epicerie.Screen

import com.example.tp2_epicerie.data.GroceryItem
import com.example.tp2_epicerie.ui.common.AppBarMenu
import com.example.tp2_epicerie.ui.common.AppBarMenuInfo
import com.example.tp2_epicerie.ui.common.AppBarView
import com.example.tp2_epicerie.ui.common.GroceryItemCard
import com.example.tp2_epicerie.ui.common.GroceryItemCardInfo
import com.example.tp2_epicerie.viewModels.GroceryCategoriesViewModel
import com.example.tp2_epicerie.viewModels.GroceryItemsViewModel
import com.example.tp2_epicerie.viewModels.GroceryListsViewModel
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.flow.first

// La vue pour afficher les articles d'épicerie (tous ou favoris)
@Composable
fun GroceryItemsView(
    groceryItemsViewModel: GroceryItemsViewModel,
    groceryListsViewModel: GroceryListsViewModel,
    groceryCategoriesViewModel: GroceryCategoriesViewModel,
    navHostController: NavHostController,
    mode: Boolean // true pour "Tous les items", false pour "Favoris"
) {
    // Récupération des données d'items et de catégories
    val groceryItems by groceryItemsViewModel.finalItems.collectAsState(initial = emptyList())
    val groceryCategories by groceryCategoriesViewModel.finalCategories.collectAsState(initial = emptyList())

    // Chaîne pour la catégorie "Autres"
    val otherCategoryLabel = stringResource(R.string.text_category_other)

    // Regroupement des items par catégorie
    val itemsByCategory = groceryItems
        .filter { it.isFavorite == mode || mode } // Filtrer par favoris si nécessaire
        .groupBy { item ->
            groceryCategories.find { it.id == item.category.id }?.name ?: otherCategoryLabel
        }

    Scaffold(
        topBar = {
            AppBarView(
                title = if (mode) Screen.AllItems.title() else Screen.Favorites.title(),
                navHostController = navHostController,
                appBarMenuInfo = AppBarMenuInfo(
                    menus = listOf(
                        AppBarMenu(
                            title = stringResource(R.string.menu_addItem),
                            onClick = { navHostController.navigate(Screen.AddEditItem.route + "/0L") }
                        )
                    )
                )
            )
        },
        floatingActionButton = {
            if (mode) {
                FloatingActionButton(
                    onClick = { navHostController.navigate(Screen.AddEditItem.route + "/0L") },
                    containerColor = MaterialTheme.colorScheme.primary,
                    contentColor = Color.White
                ) {
                    Icon(imageVector = Icons.Default.Add, contentDescription = stringResource(R.string.text_add))
                }
            }
        }
    ) { paddingValues ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(horizontal = 8.dp, vertical = 8.dp)
        ) {
            itemsByCategory.forEach { (categoryName, items) ->
                item {
                    Text(
                        text = categoryName,
                        fontWeight = FontWeight.Bold,
                        fontSize = 22.sp,
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(vertical = 8.dp)
                    )
                }
                items(items) { groceryItem ->
                    GroceryItemCard(
                        groceryItemsViewModel = groceryItemsViewModel,
                        groceryListsViewModel = groceryListsViewModel,
                        cardInfo = GroceryItemCardInfo(
                            groceryItem = groceryItem,
                            onClick = { navHostController.navigate(Screen.AddEditItem.route + "/${groceryItem.id}") },
                            containerColor = MaterialTheme.colorScheme.primaryContainer,
                        )
                    )
                }
            }
        }
    }
}
