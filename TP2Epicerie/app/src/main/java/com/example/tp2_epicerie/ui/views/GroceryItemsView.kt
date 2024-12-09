package com.example.tp2_epicerie.ui.views

import android.util.Log
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
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
    // États pour les filtres
    var selectedCategory by remember { mutableStateOf("Toutes les catégories") }
    var searchText by remember { mutableStateOf("") }
    var isDropdownExpanded by remember { mutableStateOf(false) }

    // Récupération des données
    val groceryItems by groceryItemsViewModel.finalItems.collectAsState()
    val groceryCategories by groceryCategoriesViewModel.finalCategories.collectAsState()
    val isLoading by groceryItemsViewModel.isLoading.collectAsState()

    // Chaîne pour les catégories
    val categoryOptions = remember(groceryCategories) {
        listOf("Toutes les catégories") + groceryCategories.map { it.name }
    }

    val addEditItemRoute = remember { Screen.AddEditItem.route }

    val otherCategoryLabel = stringResource(R.string.text_category_other)

    // Création de map pour les catégories et les items
    val categoryLookup = remember(groceryCategories) {
        groceryCategories.associateBy { it.id }
    }

    // Regroupement et filtrage des items
    val filteredItems = remember(selectedCategory, searchText, groceryItems, mode) {
        groceryItems.filter { item ->
            val matchesCategory = selectedCategory == "Toutes les catégories" ||
                    categoryLookup[item.category.id]?.name == selectedCategory
            val matchesSearch = searchText.isBlank() || item.name.contains(searchText, ignoreCase = true)
            val matchesMode = item.isFavorite != mode || mode
            matchesCategory && matchesSearch && matchesMode
        }
    }

    val itemsByCategory = remember(filteredItems) {
        filteredItems.groupBy { item ->
            categoryLookup[item.category.id]?.name ?: otherCategoryLabel
        }
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
                    contentColor = Color.White,
                    containerColor = colorResource(id = R.color.app_bar)
                ) {
                    Icon(imageVector = Icons.Default.Add, contentDescription = stringResource(R.string.text_add))
                }
            }
        }
    ) { paddingValues ->
        if (isLoading) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues),
                contentAlignment = Alignment.Center
            ) {
                CircularProgressIndicator(color = MaterialTheme.colorScheme.primary)
            }
        } else {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues)
            ) {
                // Barre de recherche et de tri
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 8.dp, vertical = 8.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    // Dropdown pour sélectionner la catégorie
                    Box(
                        modifier = Modifier
                            .weight(1f)
                            .clickable { isDropdownExpanded = true }
                            .background(MaterialTheme.colorScheme.surface, MaterialTheme.shapes.small)
                            .padding(8.dp)
                    ) {
                        Text(text = selectedCategory, color = MaterialTheme.colorScheme.onSurface)
                        DropdownMenu(
                            expanded = isDropdownExpanded,
                            onDismissRequest = { isDropdownExpanded = false }
                        ) {
                            categoryOptions.forEach { category ->
                                DropdownMenuItem(
                                    text = { Text(category) },
                                    onClick = {
                                        selectedCategory = category
                                        isDropdownExpanded = false
                                    }
                                )
                            }
                        }
                    }

                    Spacer(modifier = Modifier.width(8.dp))

                    // Champ de recherche
                    TextField(
                        value = searchText,
                        onValueChange = { searchText = it },
                        label = { Text(stringResource(R.string.search)) },
                        modifier = Modifier.weight(2f),
                        singleLine = true
                    )
                }

                // Liste des items
                LazyColumn(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(horizontal = 8.dp)
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
                        items(items, key = { it.id }) { groceryItem ->
                            GroceryItemCard(
                                groceryItemsViewModel = groceryItemsViewModel,
                                groceryListsViewModel = groceryListsViewModel,
                                cardInfo = GroceryItemCardInfo(
                                    groceryItem = groceryItem,
                                    onClick = {
                                        navHostController.navigate("$addEditItemRoute/${groceryItem.id}")
                                    },
                                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                                )
                            )
                        }
                    }
                }
            }
        }
    }
}

