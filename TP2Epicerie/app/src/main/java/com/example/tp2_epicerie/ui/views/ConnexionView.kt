package com.example.tp2_epicerie.ui.views

import GroceryViewModel
import android.net.Uri
import android.widget.Toast
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.example.tp2_epicerie.data.User
import kotlinx.coroutines.launch
import java.util.UUID

@Composable
fun ConnexionView(viewModel: GroceryViewModel, navHostController: NavHostController) {
    val context = LocalContext.current
    val coroutineScope = rememberCoroutineScope()

    // Déclarez les variables avec MutableState explicitement
    val isSignUp = remember { mutableStateOf(false) }
    val username = remember { mutableStateOf("") }
    val password = remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = if (isSignUp.value) "Sign up" else "Login",
            style = MaterialTheme.typography.h5,
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
                    if (imageUri.value == null) {
                        Toast.makeText(context, "Veuillez choisir une image", Toast.LENGTH_SHORT).show()
                        return@Button
                    }
                    val user = User(
                        id = UUID.randomUUID().toString(),
                        username = username.value,
                        password = "", // Le mot de passe sera haché dans `createUser`
                    )
                    coroutineScope.launch {
                        try {
                            viewModel.createUser(user, password.value)
                            Toast.makeText(context, "Compte créé avec succès", Toast.LENGTH_SHORT).show()
                            isSignUp.value = false // Retour à l'écran de connexion
                        } catch (e: Exception) {
                            Toast.makeText(context, "Erreur : ${e.message}", Toast.LENGTH_SHORT).show()
                        }
                    }
                } else {
                    coroutineScope.launch {
                        try {
                            viewModel.loginUser(username.value, password.value) { success ->
                                if (success) {
                                    Toast.makeText(context, "Connexion réussie", Toast.LENGTH_SHORT).show()
                                    // Redirigez vers la page principale
                                } else {
                                    Toast.makeText(context, "Nom ou mot de passe incorrect", Toast.LENGTH_SHORT).show()
                                }
                            }
                        } catch (e: Exception) {
                            Toast.makeText(context, "Erreur : ${e.message}", Toast.LENGTH_SHORT).show()
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
                style = MaterialTheme.typography.body2
            )
        }
    }
}