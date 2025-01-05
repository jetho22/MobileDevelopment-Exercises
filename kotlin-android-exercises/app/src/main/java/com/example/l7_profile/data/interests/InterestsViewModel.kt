package com.example.l7_profile.data.interests

class InterestsViewModel (
    private val interestsRepository: InterestsRepository
) {
    fun getInterests() = interestsRepository.getInterests()
}