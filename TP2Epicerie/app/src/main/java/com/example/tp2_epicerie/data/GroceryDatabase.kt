package com.example.tp2_epicerie.data

import android.content.Context
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.storage.FirebaseStorage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch


class GroceryDatabase private constructor(
    val userBD: UserBD,
    val listConnexionBD: ListConnexionBD,
    val settingsBD: SettingsBD,
    val groceryListBD: GroceryListBD,
    val listItemBD: ListItemBD
) {

    companion object {
        @Volatile
        private var INSTANCE: GroceryDatabase? = null

        fun getDatabase(context: Context): GroceryDatabase {
            return INSTANCE ?: synchronized(this) {
                val db = FirebaseFirestore.getInstance()
                val storage = FirebaseStorage.getInstance()

                val instance = GroceryDatabase(
                    userBD = UserBD(db, storage),
                    listConnexionBD = ListConnexionBD(db),
                    settingsBD = SettingsBD(db),
                    groceryListBD = GroceryListBD(db),
                    listItemBD = ListItemBD(db)
                )

                INSTANCE = instance
                instance
            }
        }
    }
}
