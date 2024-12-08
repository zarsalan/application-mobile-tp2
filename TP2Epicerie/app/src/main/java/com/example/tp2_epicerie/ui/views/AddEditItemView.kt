package com.example.tp2_epicerie.ui.views

import android.widget.Toast
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.outlined.FavoriteBorder
import androidx.compose.material3.Button
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.example.tp2_epicerie.R
import com.example.tp2_epicerie.Screen
import com.example.tp2_epicerie.data.GroceryItem
import com.example.tp2_epicerie.viewModels.GroceryItemsViewModel
import com.example.tp2_epicerie.ui.common.AppBarMenu
import com.example.tp2_epicerie.ui.common.AppBarMenuInfo
import com.example.tp2_epicerie.ui.common.AppBarView
import com.example.tp2_epicerie.ui.common.CustomDropdownMenu
import com.example.tp2_epicerie.ui.common.CustomDropdownMenus
import com.example.tp2_epicerie.ui.common.CustomTextField
import com.example.tp2_epicerie.ui.common.CustomYesNoDialog
import com.example.tp2_epicerie.viewModels.GroceryCategoriesViewModel
import java.util.UUID

// La page pour ajouter ou modifier un item
@Composable
fun AddEditItemView(
    id: String = "",
    groceryItemViewModel: GroceryItemsViewModel,
    groceryCategoriesViewModel: GroceryCategoriesViewModel,
    navHostController: NavHostController
) {
    // Précharger les ressources de chaîne
    val textAlert = stringResource(R.string.addItem_alert)
    val textItemSaved = stringResource(R.string.text_saveItem)
    val textSave = stringResource(R.string.text_save)
    val textRemoveItem = stringResource(R.string.text_removeItem)
    val textDeleteVerification = stringResource(R.string.text_deleteVerification)
    val textItemDeleted = stringResource(R.string.text_itemDeleted)

    // État pour afficher le dialog de suppression
    var showDeleteDialog by remember { mutableStateOf(false) }

    // État pour afficher les données de l'item
    val context = LocalContext.current
    val groceryItems by groceryItemViewModel.finalItems.collectAsState()
    val groceryItem = groceryItems.find { it.id == id }
    val categories by groceryCategoriesViewModel.finalCategories.collectAsState()

    // Champs liés aux données de l'item
    var name by remember { mutableStateOf(groceryItem?.name ?: "") }
    var description by remember { mutableStateOf(groceryItem?.description ?: "") }
    var categoryId by remember { mutableStateOf(groceryItem?.category?.id ?: "") }
    var selectedCategory by remember { mutableStateOf(groceryItem?.category?.name ?: "") }
    var isFavorite by remember { mutableStateOf(groceryItem?.isFavorite ?: false) }

    val scrollState = rememberScrollState()

    Scaffold(
        topBar = {
            AppBarView(
                title = if (id.isEmpty()) {
                    Screen.AddEditItem.title()
                } else {
                    Screen.AddEditItem.title2()
                },
                navHostController = navHostController,
                appBarMenuInfo = AppBarMenuInfo(
                    menus = if (id.isNotEmpty()) {
                        listOf(
                            AppBarMenu(
                                title = stringResource(R.string.menu_delete_this_item),
                                onClick = { showDeleteDialog = true }
                            )
                        )
                    } else {
                        emptyList()
                    }
                )
            )
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .fillMaxWidth()
                .verticalScroll(scrollState),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // Champs Nom et Description
            CustomTextField(
                label = stringResource(R.string.text_name),
                value = name,
                onValueChanged = { name = it },
                labelColor = MaterialTheme.colorScheme.primary
            )
            CustomTextField(
                label = stringResource(R.string.text_description),
                value = description,
                onValueChanged = { description = it },
                labelColor = MaterialTheme.colorScheme.primary
            )

            // Sélection de la catégorie
            CustomDropdownMenu(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 8.dp),
                label = stringResource(R.string.text_category),
                value = selectedCategory,
                customDropdownMenus = CustomDropdownMenus(
                    menus = categories.map { category ->
                        CustomDropdownMenu(
                            text = category.name,
                            onClick = {
                                selectedCategory = category.name
                                categoryId = category.id
                            }
                        )
                    }
                )
            )

            // Gestion des favoris
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 8.dp),
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = stringResource(R.string.addEdit_favorite),
                    modifier = Modifier.padding(end = 8.dp),
                    fontSize = 18.sp
                )
                Icon(
                    imageVector = if (isFavorite) Icons.Filled.Favorite else Icons.Outlined.FavoriteBorder,
                    contentDescription = null,
                    modifier = Modifier
                        .size(40.dp)
                        .clickable { isFavorite = !isFavorite },
                    tint = if (isFavorite) colorResource(id = R.color.app_bar) else MaterialTheme.colorScheme.primary
                )
            }

            // Bouton pour sauvegarder l'item
            Button(
                onClick = {
                    if (name.isEmpty() || description.isEmpty() || categoryId.isEmpty()) {
                        Toast.makeText(
                            context,
                            textAlert,
                            Toast.LENGTH_SHORT
                        ).show()
                    } else {
                        val category = categories.find { it.id == categoryId }
                        if (category == null) {
                            Toast.makeText(
                                context,
                                textAlert,
                                Toast.LENGTH_SHORT
                            ).show()
                            return@Button
                        }

                        val newItem = GroceryItem(
                            id = id.ifEmpty { UUID.randomUUID().toString() },
                            name = name.trim(),
                            description = description.trim(),
                            category = category,
                            isFavorite = isFavorite
                        )

                        groceryItemViewModel.updateUserGroceryItem(newItem)

                        Toast.makeText(
                            context,
                            textItemSaved,
                            Toast.LENGTH_SHORT
                        ).show()
                        navHostController.popBackStack()
                    }
                },
                modifier = Modifier.padding(top = 16.dp)
            ) {
                Text(
                    text = textSave,
                    fontWeight = FontWeight.Bold,
                    fontSize = 18.sp
                )
            }
        }
    }

    // Dialog pour confirmer la suppression
    CustomYesNoDialog(
        visible = showDeleteDialog,
        onDismissRequest = { showDeleteDialog = false },
        title = "$textRemoveItem $name?",
        message = textDeleteVerification,
        onYesWithContext = { ctx ->
            groceryItem?.let { groceryItemViewModel.removeUserGroceryItem(it.id)}
            showDeleteDialog = false
            navHostController.popBackStack()
            Toast.makeText(ctx, textItemDeleted, Toast.LENGTH_SHORT).show()
        },
        onNo = { showDeleteDialog = false }
    )
}