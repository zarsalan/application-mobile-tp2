package com.example.tp2_epicerie.api

import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitInstance {
    private const val BASE_URL = "https://tp2applimobile.playwoostudios.com/api/"
    private const val API_KEY = "598e548fc983784487b6259e491e2795e9755c8be9cc35ecfcd408a79ac721f4"

    private val okHttpClient: OkHttpClient by lazy {
        OkHttpClient.Builder()
            .addInterceptor { chain ->
                val original = chain.request()
                val requestBuilder = original.newBuilder()
                    .addHeader("Authorization", API_KEY)
                val request = requestBuilder.build()
                chain.proceed(request)
            }
            .build()
    }

    val apiService: ApiService by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .client(okHttpClient)
            .build()
            .create(ApiService::class.java)
    }
}