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
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.example.tp2_epicerie.R
import com.example.tp2_epicerie.Screen
import com.example.tp2_epicerie.data.GroceryItemCategory
import com.example.tp2_epicerie.ui.common.AppBarView
import com.example.tp2_epicerie.ui.common.CustomTextField
import com.example.tp2_epicerie.ui.theme.submitButtonColors
import com.example.tp2_epicerie.viewModels.GroceryCategoriesViewModel

// La page pour ajouter ou modifier une catégorie
@Composable
fun AddEditCategoryView(
    id: String = "",
    groceryCategoriesViewModel: GroceryCategoriesViewModel,
    navHostController: NavHostController
) {
    val categoriesList = groceryCategoriesViewModel.finalCategories.collectAsState().value
    val category = categoriesList.find { it.id == id }
    var name by remember { mutableStateOf(category?.name ?: "") }

    Scaffold(
        topBar = {
            AppBarView(
                title = if (category != null) Screen.AddEditCategory.title2() else Screen.AddEditCategory.title(),
                navHostController = navHostController
            )
        },
    ) {
        Column(
            modifier = Modifier
                .padding(it)
                .padding(top = 15.dp)
                .wrapContentSize(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            // Champ de texte pour la catégorie
            CustomTextField(
                label = "Titre",
                value = name,
                labelColor = MaterialTheme.colorScheme.primary,
                onValueChanged = { newValue ->
                    name = newValue
                }
            )

            // Bouton pour ajouter ou modifier la catégorie
            if (id != "") {
                val textCategoryUpdated: String = stringResource(R.string.text_categoryUpdated)
                val textCategoryNotFound: String = stringResource(R.string.text_categoryNotFound)
                Button(modifier = Modifier.padding(top = 15.dp),
                    onClick = {
                        if (category != null) {
                            groceryCategoriesViewModel.updateUserGroceryCategory(
                                category.copy(name = name.trim())
                            )
                            Toast.makeText(
                                navHostController.context,
                                textCategoryUpdated,
                                Toast.LENGTH_SHORT
                            ).show()
                        } else {
                            Toast.makeText(
                                navHostController.context,
                                textCategoryNotFound,
                                Toast.LENGTH_SHORT
                            ).show()
                        }
                        navHostController.popBackStack()
                    }) {
                    Text(
                        text = stringResource(R.string.text_save),
                        style = TextStyle(
                            fontSize = 18.sp
                        )
                    )
                }
            } else {
                // Bouton pour ajouter la catégorie
                val textCategoryAdded: String = stringResource(R.string.text_categoryAdded)
                Button(modifier = Modifier.padding(top = 15.dp),
                    colors = ButtonDefaults.submitButtonColors(),
                    onClick = {
                        groceryCategoriesViewModel.updateUserGroceryCategory(
                            GroceryItemCategory(
                                name = name.trim()
                            )
                        )
                        Toast.makeText(
                            navHostController.context,
                            textCategoryAdded,
                            Toast.LENGTH_SHORT
                        ).show()
                        navHostController.popBackStack()
                    }) {
                    Text(
                        text = stringResource(R.string.text_add),
                        style = TextStyle(
                            fontSize = 18.sp
                        )
                    )
                }
            }
        }
    }
}
