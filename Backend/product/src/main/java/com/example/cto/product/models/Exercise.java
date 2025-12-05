package com.example.cto.product.models;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
public class Exercise {
    private String name;               // e.g., "Squat"
    private String category;           // "Strength", "Cardio", "Flexibility"
    private boolean requiresEquipment; // true if exercise needs a mat, weights, etc.
    private String targetArea;         // "genoux", "dos", "respiration"...
}
