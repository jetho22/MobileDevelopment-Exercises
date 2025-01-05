package com.example.l7_profile.data.user

class User(val name: String, val lastName: String, val interestNames: List<String>, val profilePicture: Int, val quote: String, val description: String) {
    fun getFullName(): String {
        return "$name $lastName"
    }
}