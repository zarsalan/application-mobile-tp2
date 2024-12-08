package com.example.tp2_epicerie.viewModels

import androidx.lifecycle.ViewModel
import com.example.tp2_epicerie.Graph

class groceryLists : ViewModel() {
    private val apiRepository = Graph.apiRepository
    private val groceryRepository = Graph.groceryRepository


}