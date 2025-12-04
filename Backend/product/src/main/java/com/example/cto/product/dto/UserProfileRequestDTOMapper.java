package com.example.cto.product.dto;

import org.springframework.stereotype.Component;

import com.example.cto.product.models.UserProfile;




@Component
public class UserProfileRequestDTOMapper {

    public UserProfile mapToEntity(UserProfileRequestDTO dto) {
        if (dto == null) return null;

        UserProfile userProfile = new UserProfile();

        // Profil
        userProfile.setAge(dto.getAge());
        userProfile.setGender(dto.getGender());
        userProfile.setHeight(dto.getHeight());
        userProfile.setWeight(dto.getWeight());

        // Santé & sécurité
        userProfile.setHealthConditions(dto.getHealthConditions());
        userProfile.setPainAreas(dto.getPainAreas());
        userProfile.setPastInjury(dto.getPastInjury());

        // Niveau d'activité
        userProfile.setEnergyLevel(dto.getEnergyLevel());
        userProfile.setWeeklyActivity(dto.getWeeklyActivity());
        userProfile.setActivityTypes(dto.getActivityTypes());
        userProfile.setEquipment(dto.getEquipment());

        // Objectif personnel
        userProfile.setQuest(dto.getQuest());
        userProfile.setPace(dto.getPace());
        userProfile.setPreferredRewards(dto.getPreferredRewards());

        return userProfile;
    }
}
