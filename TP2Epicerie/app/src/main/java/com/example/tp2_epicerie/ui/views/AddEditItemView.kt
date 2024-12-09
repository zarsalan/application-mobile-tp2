package com.example.tp2_epicerie.ui.views

import android.content.Context
import android.util.Log
import android.widget.Toast
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.outlined.FavoriteBorder
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.example.tp2_epicerie.R
import com.example.tp2_epicerie.Screen
import com.example.tp2_epicerie.data.GroceryItem
import com.example.tp2_epicerie.data.GroceryItemCategory
import com.example.tp2_epicerie.data.Recipe
import com.example.tp2_epicerie.viewModels.GroceryItemsViewModel
import com.example.tp2_epicerie.ui.common.AppBarMenu
import com.example.tp2_epicerie.ui.common.AppBarMenuInfo
import com.example.tp2_epicerie.ui.common.AppBarView
import com.example.tp2_epicerie.ui.common.CustomDropdownMenu
import com.example.tp2_epicerie.ui.common.CustomDropdownMenus
import com.example.tp2_epicerie.ui.common.CustomTextField
import com.example.tp2_epicerie.ui.common.CustomYesNoDialog
import com.example.tp2_epicerie.ui.common.RecipeCard
import com.example.tp2_epicerie.viewModels.GroceryCategoriesViewModel
import com.example.tp2_epicerie.viewModels.RecipeListsViewModel
import java.util.UUID

// La page pour ajouter ou modifier un item
@Composable
fun AddEditItemView(
    id: String = "",
    groceryItemViewModel: GroceryItemsViewModel,
    groceryCategoriesViewModel: GroceryCategoriesViewModel,
    recipeListsViewModel: RecipeListsViewModel,
    navHostController: NavHostController
) {
    fun saveItem(
        context: Context,
        id: String,
        name: String,
        description: String,
        categoryId: String,
        isFavorite: Boolean,
        categories: List<GroceryItemCategory>,
        groceryItemViewModel: GroceryItemsViewModel,
        navHostController: NavHostController,
        alertMessage: String,
        savedMessage: String
    ) {
        val category = categories.find { it.id == categoryId }
        if (name.isEmpty() || description.isEmpty() || categoryId.isEmpty() || category == null) {
            Toast.makeText(context, alertMessage, Toast.LENGTH_SHORT).show()
            return
        }

        val newItem = GroceryItem(
            id = id.ifEmpty { UUID.randomUUID().toString() },
            name = name.trim(),
            description = description.trim(),
            category = category,
            isFavorite = isFavorite
        )
        groceryItemViewModel.updateUserGroceryItem(newItem)
        Toast.makeText(context, savedMessage, Toast.LENGTH_SHORT).show()
        navHostController.popBackStack()
    }

    // Préparer les ressources
    val context = LocalContext.current
    val textAlert = stringResource(R.string.addItem_alert)
    val textItemSaved = stringResource(R.string.text_saveItem)
    val textRemoveItem = stringResource(R.string.text_removeItem)
    val textDeleteVerification = stringResource(R.string.text_deleteVerification)
    val textItemDeleted = stringResource(R.string.text_itemDeleted)
    val textRecipesUsingItem = stringResource(R.string.recipes_using_item)

    // État pour afficher le dialog de suppression
    var showDeleteDialog by remember { mutableStateOf(false) }

    // Charger les données de l'item
    val groceryItems by groceryItemViewModel.finalItems.collectAsState()
    val groceryItem = groceryItems.find { it.id == id }
    val categories by groceryCategoriesViewModel.finalCategories.collectAsState()


    // Champs liés aux données de l'item
    var name by remember { mutableStateOf(groceryItem?.name ?: "") }
    var description by remember { mutableStateOf(groceryItem?.description ?: "") }
    var categoryId by remember { mutableStateOf(groceryItem?.category?.id ?: "") }
    var selectedCategory by remember { mutableStateOf(groceryItem?.category?.name ?: "") }
    var isFavorite by remember { mutableStateOf(groceryItem?.isFavorite ?: false) }

    // Charger les recettes associées
    val ingredientRecipes by recipeListsViewModel.ingredientRecipes.collectAsState()
    val recipesAreLoading = recipeListsViewModel.isLoading.collectAsState().value

    LaunchedEffect(id) {
        if (id.isNotEmpty()) {
            recipeListsViewModel.fetchRecipesByIngredient(id)
        }
    }

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
        },
        content = { padding ->
            if (id == "") {
                // On affiche seulement les champs si on ajoute un nouvel item
                EditItemFields(
                    name = name,
                    description = description,
                    categoryId = categoryId,
                    selectedCategory = selectedCategory,
                    isFavorite = isFavorite,
                    categories = categories,
                    onNameChange = { name = it },
                    onDescriptionChange = { description = it },
                    onCategorySelect = { selectedCategory = it.name; categoryId = it.id },
                    onFavoriteToggle = { isFavorite = it },
                    onSave = {
                        saveItem(
                            context,
                            id,
                            name,
                            description,
                            categoryId,
                            isFavorite,
                            categories,
                            groceryItemViewModel,
                            navHostController,
                            textAlert,
                            textItemSaved
                        )
                    }
                )
            } else {
                BoxWithConstraints(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(padding)
                ) {
                    val aspectRatio = maxWidth / maxHeight
                    if (aspectRatio > 1f) {
                        // Mode paysage
                        Row(modifier = Modifier.fillMaxSize()) {
                            EditItemFields(
                                name = name,
                                description = description,
                                categoryId = categoryId,
                                selectedCategory = selectedCategory,
                                isFavorite = isFavorite,
                                categories = categories,
                                onNameChange = { name = it },
                                onDescriptionChange = { description = it },
                                onCategorySelect = {
                                    selectedCategory = it.name; categoryId = it.id
                                },
                                onFavoriteToggle = { isFavorite = it },
                                onSave = {
                                    saveItem(
                                        context,
                                        id,
                                        name,
                                        description,
                                        categoryId,
                                        isFavorite,
                                        categories,
                                        groceryItemViewModel,
                                        navHostController,
                                        textAlert,
                                        textItemSaved
                                    )
                                },
                                modifier = Modifier.weight(1f)
                            )
                            RecipeListSection(
                                title = textRecipesUsingItem,
                                recipes = ingredientRecipes,
                                recipesAreLoading = recipesAreLoading,
                                navHostController = navHostController,
                                modifier = Modifier.weight(1f)
                            )
                        }
                    } else {
                        // Mode portrait
                        Column(modifier = Modifier.fillMaxSize()) {
                            EditItemFields(
                                name = name,
                                description = description,
                                categoryId = categoryId,
                                selectedCategory = selectedCategory,
                                isFavorite = isFavorite,
                                categories = categories,
                                onNameChange = { name = it },
                                onDescriptionChange = { description = it },
                                onCategorySelect = {
                                    selectedCategory = it.name; categoryId = it.id
                                },
                                onFavoriteToggle = { isFavorite = it },
                                onSave = {
                                    saveItem(
                                        context,
                                        id,
                                        name,
                                        description,
                                        categoryId,
                                        isFavorite,
                                        categories,
                                        groceryItemViewModel,
                                        navHostController,
                                        textAlert,
                                        textItemSaved
                                    )
                                },
                                modifier = Modifier.weight(1f)
                            )
                            RecipeListSection(
                                title = textRecipesUsingItem,
                                recipes = ingredientRecipes,
                                recipesAreLoading = recipesAreLoading,
                                navHostController = navHostController,
                                modifier = Modifier.weight(1f)
                            )
                        }
                    }
                }
            }

        }
    )

    // Dialog pour confirmer la suppression
    CustomYesNoDialog(
        visible = showDeleteDialog,
        onDismissRequest = { showDeleteDialog = false },
        title = "$textRemoveItem $name?",
        message = textDeleteVerification,
        onYesWithContext = { ctx ->
            groceryItem?.let { groceryItemViewModel.removeUserGroceryItem(it.id) }
            showDeleteDialog = false
            navHostController.popBackStack()
            Toast.makeText(ctx, textItemDeleted, Toast.LENGTH_SHORT).show()
        },
        onNo = { showDeleteDialog = false }
    )
}


@Composable
fun EditItemFields(
    name: String,
    description: String,
    categoryId: String,
    selectedCategory: String,
    isFavorite: Boolean,
    categories: List<GroceryItemCategory>,
    onNameChange: (String) -> Unit,
    onDescriptionChange: (String) -> Unit,
    onCategorySelect: (GroceryItemCategory) -> Unit,
    onFavoriteToggle: (Boolean) -> Unit,
    onSave: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier
            .padding(16.dp)
            .verticalScroll(rememberScrollState()),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Champs Nom et Description
        CustomTextField(label = "Nom", value = name, onValueChanged = onNameChange)
        CustomTextField(
            label = "Description",
            value = description,
            onValueChanged = onDescriptionChange
        )

        // Dropdown des catégories
        CustomDropdownMenu(
            label = "Catégorie",
            value = selectedCategory,
            customDropdownMenus = CustomDropdownMenus(
                menus = categories.map { category ->
                    CustomDropdownMenu(
                        text = category.name,
                        onClick = { onCategorySelect(category) }
                    )
                }
            )
        )

        // Favoris
        Row(
            modifier = Modifier.padding(top = 8.dp),
            horizontalArrangement = Arrangement.Center,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(text = "Favori")
            Icon(
                imageVector = if (isFavorite) Icons.Filled.Favorite else Icons.Outlined.FavoriteBorder,
                contentDescription = null,
                modifier = Modifier
                    .padding(start = 8.dp)
                    .clickable { onFavoriteToggle(!isFavorite) }
            )
        }

        // Bouton Sauvegarder
        Button(onClick = onSave, modifier = Modifier.padding(top = 16.dp)) {
            Text(text = "Sauvegarder")
        }
    }
}

@Composable
fun RecipeListSection(
    title: String,
    recipes: List<Recipe>,
    recipesAreLoading: Boolean,
    navHostController: NavHostController,
    modifier: Modifier = Modifier
) {
    Column(modifier = modifier.padding(16.dp)) {
        Text(
            text = title + " (${recipes.size})",
            style = MaterialTheme.typography.titleMedium,
            modifier = Modifier.padding(bottom = 8.dp)
        )
        if (recipesAreLoading) {
            Box(
                modifier = Modifier.fillMaxSize(),
                contentAlignment = Alignment.Center
            ) {
                CircularProgressIndicator(
                    color = MaterialTheme.colorScheme.primary,
                    strokeWidth = 4.dp
                )
            }
        } else {
            LazyColumn(modifier = Modifier.fillMaxSize()) {
                items(recipes) { recipe ->
                    Log.d("Recipe", recipe.toString())
                    RecipeCard(
                        recipe = recipe,
                        onClick = { navHostController.navigate("recipe/${recipe.id}") },
                        onFavoriteToggle = { }
                    )
                }
            }
        }
    }
}