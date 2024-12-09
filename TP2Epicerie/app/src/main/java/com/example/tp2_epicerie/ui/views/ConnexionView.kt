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
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
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

    // Déclarez les variables avec MutableState explicitement
    val isSignUp = remember { mutableStateOf(false) }
    val username = remember { mutableStateOf("") }
    val password = remember { mutableStateOf("") }
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
                text = if (isSignUp.value) "Sign up" else "Login",
                style = MaterialTheme.typography.headlineMedium,
                modifier = Modifier.padding(bottom = 16.dp)
            )

            OutlinedTextField(
                value = username.value,
                onValueChange = { username.value = it },
                label = { Text("Username") },
                modifier = Modifier.fillMaxWidth()
            )

            Spacer(modifier = Modifier.height(8.dp))

            OutlinedTextField(
                value = password.value,
                onValueChange = { password.value = it },
                label = { Text("Password") },
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
                                        // Exécution des fonctions fetch des données
                                        categoriesViewModel.fetchCategories()
                                        Toast.makeText(
                                            context,
                                            "Compte créé avec succès",
                                            Toast.LENGTH_SHORT
                                        ).show()
                                    }
                                }
                                isSignUp.value = false // Retour à l'écran de connexion
                            } catch (e: Exception) {
                                Toast.makeText(context, "Erreur : ${e.message}", Toast.LENGTH_SHORT)
                                    .show()
                            }
                        }
                    } else {
                        coroutineScope.launch {
                            try {
                                userViewModel.loginUser(username.value, password.value) { success ->
                                    if (success) {
                                        // Exécution des fonctions fetch des données
                                        categoriesViewModel.fetchCategories()
                                        groceryItemsViewModel.fetchGroceryItems()
                                        groceryListsViewModel.loadGroceryLists()
                                        recipeListsViewModel.loadRecipeLists()

                                        Toast.makeText(context, "Connexion réussie", Toast.LENGTH_SHORT)
                                            .show()
                                        // Redirigez vers la page principale
                                        navHostController.navigate(Screen.HomeScreen.route)
                                    } else {
                                        Toast.makeText(
                                            context,
                                            "Nom ou mot de passe incorrect",
                                            Toast.LENGTH_SHORT
                                        ).show()
                                    }
                                }
                            } catch (e: Exception) {
                                Toast.makeText(context, "Erreur : ${e.message}", Toast.LENGTH_SHORT)
                                    .show()
                            }
                        }
                    }
                },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(if (isSignUp.value) "Créer un compte" else "Se connecter")
            }

            Spacer(modifier = Modifier.height(8.dp))

            TextButton(onClick = { isSignUp.value = !isSignUp.value }) {
                Text(
                    text = if (isSignUp.value) "Vous avez déjà un compte ? Connectez-vous" else "Pas encore inscrit ? Créez un compte",
                    style = MaterialTheme.typography.bodyMedium
                )
            }
        }
    }
}