package com.example.tp2_epicerie.ui.views

import android.widget.Toast
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
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
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.example.tp2_epicerie.R
import com.example.tp2_epicerie.Screen
import com.example.tp2_epicerie.data.GroceryList
import com.example.tp2_epicerie.ui.common.AppBarView
import com.example.tp2_epicerie.ui.common.CustomTextField
import com.example.tp2_epicerie.ui.theme.submitButtonColors
import com.example.tp2_epicerie.viewModels.GroceryListsViewModel

// La page pour ajouter ou modifier une liste
@Composable
fun AddEditListView(
    id: String = "",
    groceryListsViewModel: GroceryListsViewModel,
    navHostController: NavHostController
) {
    val groceryList = groceryListsViewModel.groceryLists.collectAsState().value.find { it.id == id }
    var title by remember { mutableStateOf(groceryList?.title ?: "") }
    var description by remember { mutableStateOf(groceryList?.description ?: "") }

    Scaffold(
        topBar = {
            AppBarView(
                title = if (groceryList != null) Screen.AddEditListScreen.title2() else Screen.AddEditListScreen.title(),
                navHostController = navHostController
            )
        },
    ) {
        // Titre et description de la liste avec un bouton pour ajouter ou modifier
        Column(
            modifier = Modifier
                .padding(it)
                .padding(top = 15.dp)
                .wrapContentSize(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            CustomTextField(
                label = stringResource(R.string.text_title),
                labelColor = MaterialTheme.colorScheme.primary,
                value = title,
                onValueChanged = { newValue ->
                    title = newValue
                }
            )
            CustomTextField(
                label = stringResource(R.string.text_description),
                labelColor = MaterialTheme.colorScheme.primary,
                value = description,
                onValueChanged = { newValue ->
                    description = newValue
                }
            )

            // Bouton pour ajouter ou modifier la liste
            if (id != "") {
                // Modification de la liste
                val textNotFound: String = stringResource(R.string.addlist_notFound)
                val textUpdated: String = stringResource(R.string.addlist_updated)

                Button(modifier = Modifier.padding(top = 15.dp),
                    colors = ButtonDefaults.submitButtonColors(),
                    onClick = {
                        if (groceryList != null) {
                            groceryListsViewModel.updateGroceryList(
                                listId = groceryList.id,
                                title = title.trim(),
                                description = description.trim(),
                            )
                            Toast.makeText(
                                navHostController.context,
                                textUpdated,
                                Toast.LENGTH_SHORT
                            ).show()
                        } else {
                            Toast.makeText(
                                navHostController.context,
                                textNotFound,
                                Toast.LENGTH_SHORT
                            ).show()
                        }
                        navHostController.popBackStack()
                    }) {
                    Text(
                        text = stringResource(R.string.addlist_update),
                        fontSize = 18.sp
                    )
                }
            } else {
                // Ajout de la liste
                val textToast: String = stringResource(R.string.addlist_toast)

                Button(modifier = Modifier.padding(top = 15.dp),
                    colors = ButtonDefaults.submitButtonColors(),
                    onClick = {
                        groceryListsViewModel.addGroceryList(
                            title = title.trim(),
                            description = description.trim(),
                        )
                        Toast.makeText(
                            navHostController.context,
                            textToast,
                            Toast.LENGTH_SHORT
                        ).show()
                        navHostController.popBackStack()
                    }) {
                    Text(
                        text = stringResource(R.string.addlist_button),
                        fontSize = 18.sp
                    )
                }
            }
        }
    }
}
