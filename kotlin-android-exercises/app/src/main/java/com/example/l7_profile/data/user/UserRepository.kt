package com.example.l7_profile.data.user

import com.example.l7_profile.R

class UserRepository {
    fun getUser(name: String) = User("John",
        "Doe",
        listOf("Kotlin", "Android", "Jetpack Compose"),
        R.drawable.cool_image,
        "Pointing at the cutest person in the room?",
        "I am the man of lies, but yet my heart is pure, and my points are always true."
    )
}