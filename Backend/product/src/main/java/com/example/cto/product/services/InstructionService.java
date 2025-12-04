package com.example.cto.product.services;

import com.example.cto.product.models.Exercise;
import com.example.cto.product.models.UserProfile;
import com.example.cto.product.repository.ExerciseRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class InstructionService {

    private final ExerciseRepository exerciseRepository;

    public List<Exercise> getAllowedExercises(UserProfile profile) {
        String equipment = profile.getEquipment() != null ? profile.getEquipment().toLowerCase() : "aucun matériel";

        return exerciseRepository.getAllExercises().stream()

                // 1️⃣ Avoid exercises that stress pain areas
                .filter(e -> profile.getPainAreas() == null
                        || e.getTargetArea() == null
                        || !profile.getPainAreas().contains(e.getTargetArea()))

                // 2️⃣ Equipment logic: allow if exercise does not require equipment OR user has equipment
                .filter(e -> !e.isRequiresEquipment()
                        || !equipment.equals("aucun matériel"))

                // 3️⃣ Medical safety filtering
                .filter(e -> isSafeForCondition(e, profile))

                // 4️⃣ Experience level rules
                .filter(e -> isSafeForLevel(e, profile.getEnergyLevel()))

                .collect(Collectors.toList());
    }

    // Health conditions filtering
    private boolean isSafeForCondition(Exercise exercise, UserProfile profile) {
        if (profile.getHealthConditions() == null) return true;

        var conditions = profile.getHealthConditions();

        if (conditions.contains("genoux fragiles")
                && "genoux".equals(exercise.getTargetArea())) return false;

        if (conditions.contains("douleurs lombaires")
                && "dos".equals(exercise.getTargetArea())) return false;

        if (conditions.contains("problèmes cardiaques")
                && "Cardio".equals(exercise.getCategory())) return false;

        if (conditions.contains("asthme")
                && exercise.getCategory().equals("Cardio")
                && !exercise.getName().equalsIgnoreCase("Yoga Stretch")) return false;

        return true;
    }

    // Level filtering
    private boolean isSafeForLevel(Exercise exercise, String level) {
        if (level == null) return true;

        switch (level.toLowerCase()) {
            case "débutant":
                return !exercise.isRequiresEquipment(); // beginners avoid equipment
            case "intermédiaire":
            case "avancé":
            default:
                return true;
        }
    }
}
