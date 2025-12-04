package com.example.cto.product.controller;

import com.example.cto.product.models.Exercise;
import com.example.cto.product.models.UserProfile;
import com.example.cto.product.repository.UserProfileRepository;
import com.example.cto.product.services.InstructionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exercises")
public class ExerciseController {

    private final InstructionService instructionService;
    private final UserProfileRepository userProfileRepository;

    public ExerciseController(InstructionService instructionService,
                              UserProfileRepository userProfileRepository) {
        this.instructionService = instructionService;
        this.userProfileRepository = userProfileRepository;
    }

    @GetMapping("/allowed/{userId}")
    public ResponseEntity<List<Exercise>> getAllowedExercises(@PathVariable Long userId) {
        UserProfile profile = userProfileRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Exercise> allowedExercises = instructionService.getAllowedExercises(profile);
        return ResponseEntity.ok(allowedExercises);
    }
}
