package com.example.cto.product.models;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // -------------------- Profil --------------------
    private Integer age;

    @Column(length = 50)
    private String gender; // "garçon", "fille", "non précisé"

    private Double height; // en cm
    private Double weight; // en kg

    // -------------------- Santé & sécurité --------------------
    @ElementCollection
    @CollectionTable(name = "user_conditions", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "condition_name")
    private List<String> healthConditions; // "asthme", "problèmes cardiaques", etc.

    @ElementCollection
    @CollectionTable(name = "user_pains", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "pain_area")
    private List<String> painAreas; // "genoux", "dos", "respiration"

    private Boolean pastInjury; // true = yes, false = no

    // -------------------- Niveau d'activité --------------------
    @Column(length = 50)
    private String energyLevel; // "Koala", "Panda", "Chat", "Tigre"

    private Integer weeklyActivity; // nombre de séances par semaine

    @ElementCollection
    @CollectionTable(name = "user_activity_types", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "activity_type")
    private List<String> activityTypes; // "sport collectif", "sport individuel", etc.

    @Column(length = 100)
    private String equipment; // "aucun matériel", "matériel basique", etc.

    // -------------------- Objectif personnel --------------------
    @Column(length = 100)
    private String quest; // "Bouger plus", "Être en meilleure forme", etc.

    @Column(length = 50)
    private String pace; // "Lentement", "Normal", "Rapidement"

    @ElementCollection
    @CollectionTable(name = "user_rewards", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "reward_type")
    private List<String> preferredRewards; // "Badges", "Points", etc.
}
