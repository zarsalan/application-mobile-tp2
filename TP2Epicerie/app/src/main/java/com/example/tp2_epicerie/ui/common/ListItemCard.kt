package com.example.tp2_epicerie.ui.common

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.FavoriteBorder
import androidx.compose.material.icons.filled.KeyboardArrowDown
import androidx.compose.material.icons.filled.KeyboardArrowUp
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.example.tp2_epicerie.R
import com.example.tp2_epicerie.data.GroceryItem
import com.example.tp2_epicerie.data.ListItem
import com.example.tp2_epicerie.viewModels.GroceryItemsViewModel
import com.example.tp2_epicerie.viewModels.GroceryListsViewModel

data class ListItemCardInfo(
    val listItem: ListItem,
    val groceryItem: GroceryItem,
    val onClick: () -> Unit,
    val containerColor: Color
)

@Composable
fun ListItemCard(
    groceryListsViewModel: GroceryListsViewModel,
    groceryItemsViewModel: GroceryItemsViewModel,
    listItemCardInfo: ListItemCardInfo
) {
    val listItem = listItemCardInfo.listItem
    val groceryItem = listItemCardInfo.groceryItem

    var showDeleteDialog by remember { mutableStateOf(false) }

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(bottom = 6.dp, start = 3.dp, end = 3.dp)
            .clickable { listItemCardInfo.onClick() },
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp, pressedElevation = 4.dp),
        colors = CardDefaults.cardColors(
            containerColor = listItemCardInfo.containerColor,
            contentColor = Color.Black
        )
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Row(
                modifier = Modifier
                    .padding(
                        start = 15.dp,
                        end = 3.dp,
                        top = 1.dp,
                        bottom = 1.dp
                    )
                    .weight(1f),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                // Colonne pour afficher le nom et la description de l'item
                Column(
                    modifier = Modifier
                        .weight(1f)
                ) {
                    Text(
                        text = groceryItem.name,
                        fontWeight = FontWeight.ExtraBold,
                        fontSize = 18.sp,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                    Text(
                        text = groceryItem.description,
                        maxLines = 2,
                        overflow = TextOverflow.Ellipsis
                    )
                }

                // Colonne pour afficher la quantité et les boutons de modification
                Row(
                    modifier = Modifier.fillMaxHeight(),
                    horizontalArrangement = Arrangement.End,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    // Colonne pour changer la quantité
                    Column(
                        verticalArrangement = Arrangement.spacedBy(
                            0.dp,
                            Alignment.CenterVertically
                        ),
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        IconButton(onClick = {
                            groceryListsViewModel.updateGroceryListItem(listItem.copy(quantity = listItem.quantity + 1))
                        }) {
                            Icon(
                                imageVector = Icons.Default.KeyboardArrowUp,
                                contentDescription = "Add",
                                tint = Color.Black
                            )
                        }
                        Text(text = listItem.quantity.toString())
                        IconButton(onClick = {
                            if (listItem.quantity > 1) {
                                groceryListsViewModel.updateGroceryListItem(listItem.copy(quantity = listItem.quantity - 1))
                            }
                        }) {
                            Icon(
                                imageVector = Icons.Default.KeyboardArrowDown,
                                contentDescription = "Substract",
                                tint = Color.Black
                            )
                        }
                    }

                    // Icône pour marquer/cocher l'item
                    IconButton(onClick = {
                        groceryListsViewModel.updateGroceryListItem(listItem.copy(isChecked = !listItem.isChecked))
                    }) {
                        Icon(
                            imageVector = if (listItem.isChecked) Icons.Filled.CheckCircle else Icons.Filled.Check,
                            contentDescription = "Checkmark",
                            tint = colorResource(id = R.color.check_mark)
                        )
                    }

                    // Icône pour marquer l'item comme favori
                    IconButton(onClick = {
                        groceryItemsViewModel.updateUserGroceryItem(groceryItem.copy(isFavorite = !groceryItem.isFavorite))
                    }) {
                        Icon(
                            imageVector = if (groceryItem.isFavorite) {
                                Icons.Filled.Favorite
                            } else {
                                Icons.Default.FavoriteBorder
                            },
                            contentDescription = "Favorite",
                            tint = if (groceryItem.isFavorite) Color.Red else Color.Black,
                        )
                    }

                    // Icône pour supprimer l'item
                    IconButton(onClick = {
                        showDeleteDialog = true
                    }) {
                        Icon(
                            imageVector = Icons.Default.Delete,
                            contentDescription = "Delete",
                            tint = Color.Black
                        )
                    }
                }

            }
        }

        // Dialog de suppression
        CustomYesNoDialog(
            visible = showDeleteDialog,
            onDismissRequest = { showDeleteDialog = false },
            title = stringResource(R.string.text_removeItem) + " ${groceryItem.name}?",
            message = stringResource(R.string.text_delete_from_list_verification),
            onYes = {
                groceryListsViewModel.deleteGroceryListItem(listItem)
                showDeleteDialog = false
            },
            onNo = {
                showDeleteDialog = false
            },
        )
    }
}