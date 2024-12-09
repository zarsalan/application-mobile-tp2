package com.example.tp2_epicerie.ui.views

import android.widget.Toast
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
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
import com.example.tp2_epicerie.ui.common.AppBarView
import com.example.tp2_epicerie.ui.common.CustomDropdownMenu
import com.example.tp2_epicerie.ui.common.CustomDropdownMenus
import com.example.tp2_epicerie.viewModels.UserViewModel

// La page pour les paramètres de l'application
@Composable
fun SettingsView(userViewModel: UserViewModel, navHostController: NavHostController) {
    val context = LocalContext.current
    val currentUser by userViewModel.currentUser.collectAsState()

    // Variables locales pour l'état des paramètres utilisateur
    var darkMode by remember { mutableStateOf(currentUser?.settings?.darkMode ?: false) }
    var language by remember { mutableStateOf(currentUser?.settings?.language ?: "fr") }

    // Charger les paramètres utilisateur dès que currentUser est mis à jour
    LaunchedEffect(currentUser) {
        currentUser?.let {
            darkMode = it.settings.darkMode
            language = it.settings.language
        }
    }

    Scaffold(
        topBar = {
            AppBarView(
                title = stringResource(R.string.parameter_title),
                navHostController = navHostController
            )
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .padding(top = 15.dp, bottom = 15.dp)
                .fillMaxSize(),
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
                    ).map { lang ->
                        CustomDropdownMenu(
                            text = lang,
                            onClick = {
                                language = lang
                                currentUser?.let {
                                    val updatedSettings = it.settings.copy(language = language)
                                    userViewModel.updateSettings(updatedSettings)
                                    Toast.makeText(context, textSettingUpdated, Toast.LENGTH_SHORT).show()
                                }
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
                                currentUser?.let {
                                    val updatedSettings = it.settings.copy(darkMode = darkMode)
                                    userViewModel.updateSettings(updatedSettings)
                                    Toast.makeText(
                                        context,
                                        textSettingUpdated,
                                        Toast.LENGTH_SHORT
                                    ).show()
                                }
                            }
                        )
                    }
                )
            )
        }
    }
}