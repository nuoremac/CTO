package com.example.cto.product.dto;


import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileRequestDTO {

    // -------------------- Profil --------------------
    private Integer age;
    private String gender;          // "garçon", "fille", "non précisé"
    private Double height;          // cm
    private Double weight;          // kg

    // -------------------- Santé & sécurité --------------------
    private List<String> healthConditions; // "asthme", "problèmes cardiaques"
    private List<String> painAreas;        // "genoux", "dos", "respiration"
    private Boolean pastInjury;

    // -------------------- Niveau d'activité --------------------
    private String energyLevel;            // "Koala", "Panda", "Chat", "Tigre"
    private Integer weeklyActivity;        // séances par semaine
    private List<String> activityTypes;    // "sport collectif", "sport individuel"
    private String equipment;              // "aucun matériel", "matériel basique", etc.

    // -------------------- Objectif personnel --------------------
    private String quest;                  // "Bouger plus", "Être en meilleure forme", etc.
    private String pace;                   // "Lentement", "Normal", "Rapidement"
    private List<String> preferredRewards; // "Badges", "Points", etc.

    
}
