package com.example.cto.product.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.cto.product.dto.UserProfileRequestDTO;
import com.example.cto.product.models.UserProfile;
import com.example.cto.product.services.UserProfileService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user-profiles")
public class UserProfileController {

    private final UserProfileService userProfileService;

    @PostMapping("/create-profile")
    public ResponseEntity<UserProfile> createUserProfile(@RequestBody UserProfileRequestDTO userProfileRequest){
        UserProfile createdProfile = userProfileService.createProfile(userProfileRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProfile);
    }
}
