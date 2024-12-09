package com.example.tp2_epicerie.ui.views

import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.example.tp2_epicerie.R
import com.example.tp2_epicerie.Screen
import com.example.tp2_epicerie.data.User
import com.example.tp2_epicerie.viewModels.GroceryCategoriesViewModel
import com.example.tp2_epicerie.viewModels.GroceryItemsViewModel
import com.example.tp2_epicerie.viewModels.GroceryListsViewModel
import com.example.tp2_epicerie.viewModels.RecipeListsViewModel
import com.example.tp2_epicerie.viewModels.UserViewModel

import kotlinx.coroutines.launch
import java.util.UUID

@Composable
fun ConnexionView(
    userViewModel: UserViewModel,
    categoriesViewModel: GroceryCategoriesViewModel,
    groceryItemsViewModel: GroceryItemsViewModel,
    groceryListsViewModel: GroceryListsViewModel,
    recipeListsViewModel: RecipeListsViewModel,
    navHostController: NavHostController
) {
    val context = LocalContext.current
    val coroutineScope = rememberCoroutineScope()
    val isLoading = userViewModel.isLoading.collectAsState(false).value

    // Déclaration des variables avec MutableState
    val isSignUp = remember { mutableStateOf(false) }
    val username = remember { mutableStateOf("") }
    val password = remember { mutableStateOf("") }

    val errorConnexion: String = stringResource(R.string.error_connexion)
    val creationSuccess: String = stringResource(R.string.creation_succes)
    val connexionSuccess: String = stringResource(R.string.connexion_succes)

    fun connectUser(onResult: (Boolean) -> Unit) {
        try {
            userViewModel.loginUser(username.value, password.value) { success ->
                if (success) {

                    // Exécution des fonctions fetch des données
                    categoriesViewModel.fetchCategories()
                    groceryItemsViewModel.fetchGroceryItems()
                    groceryListsViewModel.loadGroceryLists()
                    recipeListsViewModel.loadRecipeLists()

                    // Mettre à jour le mode sombre


                    onResult(true)
                } else {
                    Toast.makeText(
                        context,
                        errorConnexion,
                        Toast.LENGTH_SHORT
                    ).show()
                    onResult(false)
                }
            }
        } catch (e: Exception) {
            Toast.makeText(context, "Error : ${e.message}", Toast.LENGTH_SHORT)
                .show()
            onResult(false)
        }
    }

    if (isLoading) {
        Box(
            modifier = Modifier
                .fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            CircularProgressIndicator(
                color = MaterialTheme.colorScheme.primary,
                strokeWidth = 4.dp
            )
        }
    }else{
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text(
                text = if (isSignUp.value) stringResource(R.string.sign_up) else stringResource(R.string.login),
                style = MaterialTheme.typography.headlineMedium,
                modifier = Modifier.padding(bottom = 16.dp)
            )

            OutlinedTextField(
                value = username.value,
                onValueChange = { username.value = it },
                label = { Text(stringResource(R.string.username)) },
                modifier = Modifier.fillMaxWidth()
            )

            Spacer(modifier = Modifier.height(8.dp))

            OutlinedTextField(
                value = password.value,
                onValueChange = { password.value = it },
                label = { Text(stringResource(R.string.password)) },
                modifier = Modifier.fillMaxWidth(),
                visualTransformation = PasswordVisualTransformation()
            )

            Spacer(modifier = Modifier.height(16.dp))

            Button(
                onClick = {
                    if (isSignUp.value) {
                        val user = User(
                            username = username.value,
                        )
                        coroutineScope.launch {
                            try {
                                userViewModel.createUser(user, password.value) { success ->
                                    if (success) {
                                        Toast.makeText(
                                            context,
                                            creationSuccess,
                                            Toast.LENGTH_SHORT
                                        ).show()

                                        // Connection de l'utilisateur
                                        connectUser { connectionSuccess ->
                                            if (connectionSuccess) {
                                                // Redirection vers la page principale
                                                navHostController.navigate(Screen.HomeScreen.route)
                                            }
                                        }
                                    }
                                }
                                isSignUp.value = false // Retour à l'écran de connexion
                            } catch (e: Exception) {
                                Toast.makeText(context, "Error : ${e.message}", Toast.LENGTH_SHORT)
                                    .show()
                            }
                        }
                    } else {
                        coroutineScope.launch {
                            connectUser { success ->
                                if (success) {
                                    Toast.makeText(context, connexionSuccess, Toast.LENGTH_SHORT)
                                        .show()
                                    // Redirection vers la page principale
                                    navHostController.navigate(Screen.HomeScreen.route)
                                }
                            }
                        }
                    }
                },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(if (isSignUp.value) stringResource(R.string.create_account) else stringResource(R.string.to_connexion))
            }

            Spacer(modifier = Modifier.height(8.dp))

            TextButton(onClick = { isSignUp.value = !isSignUp.value }) {
                Text(
                    text = if (isSignUp.value) stringResource(R.string.already_account) else stringResource(R.string.not_yet_account),
                    style = MaterialTheme.typography.bodyMedium
                )
            }
        }
    }
}