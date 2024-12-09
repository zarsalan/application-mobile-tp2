package com.example.tp2_epicerie.ui.common

import android.widget.Toast
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewModelScope
import androidx.navigation.NavHostController
import com.example.tp2_epicerie.R
import com.example.tp2_epicerie.Screen
import com.example.tp2_epicerie.data.GroceryItemCategory
import com.example.tp2_epicerie.viewModels.GroceryCategoriesViewModel
import com.example.tp2_epicerie.viewModels.GroceryItemsViewModel
import kotlinx.coroutines.launch

data class CustomCategoryCardInfo(
    val groceryItemCategory: GroceryItemCategory,
    val onClick: () -> Unit,
    val containerColor: Color,
)

// Carte pour afficher les catégories
@Composable
fun CategoryCard(
    groceryCategoriesViewModel: GroceryCategoriesViewModel,
    groceryItemsViewModel: GroceryItemsViewModel,
    navHostController: NavHostController,
    cardInfo: CustomCategoryCardInfo
) {
    var showDeleteDialog by remember { mutableStateOf(false) }

    val categoryFromApiText = stringResource(R.string.text_category_from_api)
    val cannotDeleteDefaultCategory = stringResource(R.string.cannot_delete_default_category)

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(start = 6.dp, end = 6.dp, bottom = 6.dp)
            .clickable { cardInfo.onClick() },
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp, pressedElevation = 4.dp),
        colors = CardDefaults.cardColors(
            containerColor = cardInfo.containerColor,
            contentColor = Color.Black
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(8.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Affichage du titre de la catégorie
            Text(
                text = cardInfo.groceryItemCategory.name,
                fontWeight = FontWeight.ExtraBold,
                fontSize = 20.sp,
                modifier = Modifier
                    .padding(start = 16.dp)
                    .weight(1f),
                maxLines = 2,
                overflow = TextOverflow.Ellipsis
            )

            // Affichage des boutons pour modifier et supprimer la catégorie
            Row(modifier = Modifier.padding(end = 3.dp), horizontalArrangement = Arrangement.End) {
                IconButton(onClick = {
                    navHostController.navigate(Screen.AddEditCategory.route + "/${cardInfo.groceryItemCategory.id}")
                }) {
                    Icon(
                        imageVector = Icons.Default.Edit,
                        contentDescription = "Edit Icon",
                        tint = Color.Black
                    )
                }
                IconButton(onClick = {
                    if (cardInfo.groceryItemCategory.id == "1") {
                        Toast.makeText(
                            navHostController.context,
                            cannotDeleteDefaultCategory,
                            Toast.LENGTH_SHORT
                        ).show()
                    } else if (!cardInfo.groceryItemCategory.userCreated) {
                        Toast.makeText(
                            navHostController.context,
                            categoryFromApiText,
                            Toast.LENGTH_SHORT
                        ).show()
                    } else {
                        showDeleteDialog = true
                    }
                }) {
                    Icon(
                        imageVector = Icons.Default.Delete,
                        contentDescription = "Delete Icon",
                        tint = Color.Black
                    )
                }
            }
        }
    }

    // Dialogue de suppression
    CustomYesNoDialog(
        visible = showDeleteDialog,
        onDismissRequest = { showDeleteDialog = false },
        title = stringResource(R.string.text_removeCategory) + " ${cardInfo.groceryItemCategory.name}?",
        message = stringResource(R.string.text_categoryVerification),
        onYes = {
            groceryItemsViewModel.categoryDeleted(cardInfo.groceryItemCategory.id)
            groceryCategoriesViewModel.removeUserGroceryCategory(cardInfo.groceryItemCategory.id)
            showDeleteDialog = false
        },
        onNo = {
            showDeleteDialog = false
        },
    )
}