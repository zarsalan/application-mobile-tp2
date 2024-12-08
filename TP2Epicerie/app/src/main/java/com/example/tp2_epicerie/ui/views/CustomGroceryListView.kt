package com.example.tp2_epicerie.ui.views

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.example.tp2_epicerie.R
import com.example.tp2_epicerie.Screen
import com.example.tp2_epicerie.data.GroceryItemCategory
import com.example.tp2_epicerie.data.GroceryList
import com.example.tp2_epicerie.data.ListItem
import com.example.tp2_epicerie.ui.common.AppBarMenu
import com.example.tp2_epicerie.ui.common.AppBarMenuInfo
import com.example.tp2_epicerie.ui.common.AppBarView
import com.example.tp2_epicerie.ui.common.ListItemCard
import com.example.tp2_epicerie.ui.common.ListItemCardInfo
import com.example.tp2_epicerie.viewModels.GroceryCategoriesViewModel
import com.example.tp2_epicerie.viewModels.GroceryItemsViewModel
import com.example.tp2_epicerie.viewModels.GroceryListsViewModel
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.firstOrNull

// La vue pour afficher une liste d'épicerie (liste d'articles à acheter)
@Composable
fun CustomGroceryListView(
    id: String,
    groceryListsViewModel: GroceryListsViewModel,
    groceryItemsViewModel: GroceryItemsViewModel,
    navHostController: NavHostController
) {
    // On obtient les informations de la liste
    LaunchedEffect(id) { groceryListsViewModel.loadCurrentGroceryListItems(id) }

    // Collections des états de la liste d'épicerie et des items de la liste
    val currentGroceryList = groceryListsViewModel.currentGroceryList.collectAsState().value
    val currentGroceryItems =
        groceryListsViewModel.currentGroceryItems.collectAsState().value

    // État pour l'affichage des items cochés ou non cochés
    var indexCrossed by remember { mutableStateOf(false) }

    // Filtrage des items dépendamment de l'état indexCrossed
    val itemsToShow = currentGroceryList.listItems.filter { it.isChecked == indexCrossed }

    // Groupage des items par catégorie
    val listItemsByCategory = itemsToShow.groupBy { listItem ->
        currentGroceryItems.find { it.id == listItem.groceryItemId }?.category?.name
            ?: ""
    }

    Scaffold(
        topBar = {
            AppBarView(
                title = currentGroceryList.title,
                navHostController = navHostController,
                appBarMenuInfo = AppBarMenuInfo(menus = listOf(
                    AppBarMenu(
                        title = stringResource(R.string.menu_addItem),
                        onClick = { navHostController.navigate(Screen.AllItems.route) }
                    ),
                    AppBarMenu(
                        title = stringResource(R.string.menu_modifyThisList),
                        onClick = { navHostController.navigate(Screen.AddEditListScreen.route + "/${currentGroceryList.id}") }
                    ),
                ))
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            // Section de sélection de liste coché / non cochées
            Row(
                modifier = Modifier
                    .fillMaxWidth(),
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Boutton pour afficher les items non cochés
                Box(
                    modifier = Modifier
                        .clickable { indexCrossed = false }
                        .fillMaxWidth()
                        .weight(1f)
                ) {
                    Text(
                        text = stringResource(R.string.text_unchecked) + " (${currentGroceryList.listItems.count { !it.isChecked }})",
                        fontWeight = FontWeight.Bold,
                        fontSize = 20.sp,
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(20.dp),
                        textDecoration = if (!indexCrossed) TextDecoration.Underline else null,
                        textAlign = TextAlign.Center
                    )
                }

                // Boutton pour afficher les items cochés
                Box(
                    modifier = Modifier
                        .clickable { indexCrossed = true }
                        .fillMaxWidth()
                        .weight(1f)
                ) {
                    Text(
                        text = stringResource(R.string.text_checked) + " (${currentGroceryList.listItems.count { it.isChecked }})",
                        fontWeight = FontWeight.Bold,
                        fontSize = 20.sp,
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(20.dp),
                        textDecoration = if (indexCrossed) TextDecoration.Underline else null,
                        textAlign = TextAlign.Center
                    )
                }
            }

            // Un divider pour séparer les boutons de la liste
            Box(
                modifier = Modifier
                    .fillMaxWidth()
            ) {
                HorizontalDivider(
                    thickness = 2.dp,
                    color = MaterialTheme.colorScheme.primary,
                    modifier = Modifier
                        .align(Alignment.Center)
                        .width(150.dp)
                )
            }

            // Affichage de la liste d'items dynamiquement dans une LazyColumn (comme un RecyclerView mais bien meilleur)
            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(start = 8.dp, end = 8.dp, bottom = 8.dp)
            ) {
                listItemsByCategory.forEach { (categoryName, listItems) ->
                    item {
                        Text(
                            text = if (categoryName == "") stringResource(R.string.text_category_other) else categoryName,
                            fontWeight = FontWeight.Bold,
                            fontSize = 22.sp,
                            modifier = Modifier
                                .padding(start = 8.dp, end = 8.dp, top = 20.dp, bottom = 4.dp)
                                .fillMaxWidth()
                        )
                    }
                    items(listItems) { listItem ->
                        ListItemCard(
                            groceryListsViewModel = groceryListsViewModel,
                            groceryItemsViewModel = groceryItemsViewModel,
                            listItemCardInfo = ListItemCardInfo(
                                listItem = listItem,
                                onClick = { navHostController.navigate(Screen.AddEditItem.route + "/${listItem.groceryItemId}") },
                                containerColor = MaterialTheme.colorScheme.primaryContainer
                            )
                        )
                    }
                }
            }
        }
    }
}
