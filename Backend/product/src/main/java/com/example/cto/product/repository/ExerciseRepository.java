package com.example.cto.product.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.cto.product.models.Exercise;


@Service
public class ExerciseRepository {
    private final List<Exercise> allExercises = List.of(
        new Exercise("Squat", "Strength", false, "genoux"),
        new Exercise("Push-up", "Strength", false, "poignets"),
        new Exercise("Plank", "Strength", false, "dos"),
        new Exercise("Jumping Jack", "Cardio", false, "genoux"),
        new Exercise("Yoga Stretch", "Flexibility", false, null),
        new Exercise("Resistance Band Row", "Strength", true, "épaules"),
        new Exercise("Bicycle Crunch", "Strength", false, "abdos"),
        new Exercise("Treadmill Run", "Cardio", true, "genoux"),
        new Exercise("Dumbbell Curl", "Strength", true, "bras"),
        new Exercise("Football", "Cardio", false, "genoux")
        // Add more exercises here
    );

    public List<Exercise> getAllExercises() {
        return new ArrayList<>(allExercises); // return copy to avoid modification of original
    }
}
