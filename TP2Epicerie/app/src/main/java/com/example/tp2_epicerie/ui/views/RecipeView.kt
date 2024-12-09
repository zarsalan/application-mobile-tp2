package com.example.tp2_epicerie.ui.views

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.example.tp2_epicerie.Screen
import com.example.tp2_epicerie.data.GroceryItem
import com.example.tp2_epicerie.data.Ingredient
import com.example.tp2_epicerie.data.Recipe
import com.example.tp2_epicerie.ui.common.AppBarView
import com.example.tp2_epicerie.ui.common.GroceryItemCard
import com.example.tp2_epicerie.ui.common.GroceryItemCardInfo
import com.example.tp2_epicerie.viewModels.GroceryItemsViewModel
import com.example.tp2_epicerie.viewModels.GroceryListsViewModel
import com.example.tp2_epicerie.viewModels.RecipeListsViewModel

@Composable
fun RecipeView(
    recipeListsViewModel: RecipeListsViewModel,
    groceryItemsViewModel: GroceryItemsViewModel,
    groceryListsViewModel: GroceryListsViewModel,
    navHostController: NavHostController
) {
    // Récupération de la recette courante
    val currentRecipe by recipeListsViewModel.currentRecipe.collectAsState()

    // Afficher un loader si la recette n'est pas encore chargée
    if (currentRecipe == null) {
        Box(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            CircularProgressIndicator(
                color = MaterialTheme.colorScheme.primary,
                strokeWidth = 4.dp
            )
        }
        return
    }

    // Détails de la recette
    val recipe = currentRecipe!!

    // Obtention des items d'épicerie
    val groceryItems by groceryItemsViewModel.finalItems.collectAsState()
    val groceryItemLookup = remember(groceryItems) { groceryItems.associateBy { it.id } }

    val addEditItemRoute = remember { Screen.AddEditItem.route }

    Scaffold(
        topBar = {
            AppBarView(
                title = recipe.name,
                navHostController = navHostController
            )
        },
        content = { padding ->
            BoxWithConstraints(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(padding)
            ) {
                val aspectRatio = maxWidth / maxHeight
                if (aspectRatio > 1f) {
                    Row(
                        modifier = Modifier
                            .fillMaxSize()
                    ) {
                        RecipeSection(
                            recipe = recipe, modifier = Modifier
                                .weight(1f)
                                .padding(16.dp)
                        )
                        GroceryItems(
                            modifier = Modifier.weight(1f),
                            ingredients = recipe.ingredients,
                            groceryItemLookup = groceryItemLookup,
                            groceryItemsViewModel = groceryItemsViewModel,
                            groceryListsViewModel = groceryListsViewModel,
                            navHostController = navHostController,
                            addEditItemRoute = addEditItemRoute
                        )
                    }
                } else {
                    Column(
                        modifier = Modifier
                            .fillMaxSize()
                    ) {
                        RecipeSection(
                            recipe = recipe, modifier = Modifier
                                .weight(1.25f)
                                .padding(16.dp)
                        )
                        GroceryItems(
                            modifier = Modifier.weight(1f),
                            ingredients = recipe.ingredients,
                            groceryItemLookup = groceryItemLookup,
                            groceryItemsViewModel = groceryItemsViewModel,
                            groceryListsViewModel = groceryListsViewModel,
                            navHostController = navHostController,
                            addEditItemRoute = addEditItemRoute
                        )
                    }
                }
            }
        }
    )
}

@Composable
fun RecipeSection(recipe: Recipe, modifier: Modifier) {
    Column(
        modifier = modifier.verticalScroll(rememberScrollState()),
    ) { // Nom de la recette
        Text(
            text = recipe.name,
            style = MaterialTheme.typography.headlineLarge,
            fontWeight = FontWeight.Bold,
            modifier = Modifier.padding(bottom = 4.dp)
        )

        // Catégorie
        Text(
            text = "Catégorie : ${recipe.category.name}",
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.primary,
            modifier = Modifier.padding(bottom = 16.dp)
        )

        // Description
        Text(
            text = recipe.description,
            style = MaterialTheme.typography.bodyLarge,
            modifier = Modifier.padding(bottom = 16.dp)
        )

        // Ingrédients
        Text(
            text = "Ingrédients",
            style = MaterialTheme.typography.titleMedium,
            fontWeight = FontWeight.Bold,
            modifier = Modifier.padding(bottom = 8.dp)
        )
        recipe.ingredients.forEach { ingredient ->
            Text(
                text = "- ${ingredient.quantity} ${ingredient.groceryItem.name}",
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(bottom = 4.dp)
            )
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Étapes
        Text(
            text = "Étapes",
            style = MaterialTheme.typography.titleMedium,
            fontWeight = FontWeight.Bold,
            modifier = Modifier.padding(bottom = 8.dp)
        )
        recipe.steps.forEachIndexed { index, step ->
            Text(
                text = "${index + 1}. $step",
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(bottom = 4.dp)
            )
        }
        /*
        Spacer(modifier = Modifier.height(16.dp))

        // Bouton pour marquer comme favori
        Button(
            onClick = {
                val newFavoriteStatus = !recipe.isFavorite
                if (newFavoriteStatus) {
                    recipeListsViewModel.addFavoriteRecipe(recipe)
                } else {
                    recipeListsViewModel.removeFavoriteRecipe(recipe)
                }
            },
            colors = ButtonDefaults.buttonColors(
                containerColor = if (recipe.isFavorite) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.secondary
            ),
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(
                text = if (recipe.isFavorite) "Retirer des favoris" else "Ajouter aux favoris",
                color = Color.White
            )
        }
         */
    }
}

@Composable
fun GroceryItems(
    modifier: Modifier,
    ingredients: List<Ingredient>,
    groceryItemLookup: Map<String, GroceryItem>,
    groceryItemsViewModel: GroceryItemsViewModel,
    groceryListsViewModel: GroceryListsViewModel,
    navHostController: NavHostController,
    addEditItemRoute: String
) {
    LazyColumn(
        modifier = modifier
            .fillMaxSize()
    ) {
        items(ingredients, key = { it.groceryItem.id }) { ingredient ->
            GroceryItemCard(
                groceryItemsViewModel = groceryItemsViewModel,
                groceryListsViewModel = groceryListsViewModel,
                cardInfo = GroceryItemCardInfo(
                    groceryItem = groceryItemLookup[ingredient.groceryItem.id]
                        ?: ingredient.groceryItem,
                    onClick = {
                        navHostController.navigate("$addEditItemRoute/${ingredient.groceryItem.id}")
                    },
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                )
            )
        }
    }
}
