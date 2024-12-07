package com.example.tp2_epicerie.ui.views

import com.example.tp2_epicerie.viewModels.GroceryViewModel
import android.util.Log
import android.widget.Toast
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.Scaffold
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
import com.example.tp2_epicerie.data.Settings
import com.example.tp2_epicerie.ui.common.AppBarView
import com.example.tp2_epicerie.ui.common.CustomDropdownMenu
import com.example.tp2_epicerie.ui.common.CustomDropdownMenus

// La page pour les paramètres de l'application
@Composable
fun SettingsView(viewModel: GroceryViewModel, navHostController: NavHostController) {
    val context = LocalContext.current
    val currentUser by viewModel.currentUser.collectAsState()
    val settings by viewModel.settings.collectAsState()

    // Variables locales pour l'état des paramètres
    var darkMode by remember { mutableStateOf(settings.darkMode) }
    var language by remember { mutableStateOf(settings.language) }

    // Chargement des paramètres utilisateur
    LaunchedEffect(currentUser) {
        if (currentUser != null) {
            viewModel.fetchSettings()
        }
    }

    Log.d("SettingsView", "darkMode: $darkMode, language: $language")

    Scaffold(
        topBar = {
            AppBarView(
                title = Screen.AddEditCategory.title(),
                navHostController = navHostController
            )
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .padding(top = 15.dp, bottom = 15.dp)
                .wrapContentSize(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            val textSettingUpdated: String = stringResource(R.string.settings_toast)

            // Dropdown pour le choix de la langue
            CustomDropdownMenu(
                modifier = Modifier.padding(start = 25.dp, top = 10.dp, end = 25.dp),
                label = stringResource(R.string.text_language),
                value = language,
                customDropdownMenus = CustomDropdownMenus(
                    menus = listOf(
                        stringResource(R.string.language_french),
                        stringResource(R.string.language_english)
                    ).map { it ->
                        CustomDropdownMenu(
                            text = it,
                            onClick = {
                                language = it
                                viewModel.updateSettings(
                                    Settings(
                                        darkMode = darkMode,
                                        language = language
                                    )
                                )
                                Toast.makeText(context, textSettingUpdated, Toast.LENGTH_SHORT).show()
                            }
                        )
                    }
                )
            )

            // Dropdown pour le mode sombre
            CustomDropdownMenu(
                modifier = Modifier.padding(start = 25.dp, top = 10.dp, end = 25.dp),
                label = stringResource(R.string.text_theme),
                value = if (darkMode) "Sombre" else "Clair",
                customDropdownMenus = CustomDropdownMenus(
                    menus = listOf("Clair", "Sombre").map { theme ->
                        CustomDropdownMenu(
                            text = theme,
                            onClick = {
                                darkMode = theme == "Sombre"
                                viewModel.updateSettings(
                                    Settings(
                                        darkMode = darkMode,
                                        language = language
                                    )
                                )
                                viewModel.updateDarkMode(darkMode)
                                Toast.makeText(
                                    context,
                                    "Vos paramètres ont été mis à jour",
                                    Toast.LENGTH_SHORT
                                ).show()
                            }
                        )
                    }
                )
            )
        }
    }
}
