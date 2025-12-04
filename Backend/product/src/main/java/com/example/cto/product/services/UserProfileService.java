package com.example.cto.product.services;

import org.springframework.stereotype.Service;

import com.example.cto.product.dto.UserProfileRequestDTO;
import com.example.cto.product.dto.UserProfileRequestDTOMapper;
import com.example.cto.product.models.UserProfile;
import com.example.cto.product.repository.UserProfileRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserProfileService {
    private final UserProfileRepository userProfileRepository;
    private final UserProfileRequestDTOMapper userProfileRequestDTOMapper;


    public UserProfile createProfile(UserProfileRequestDTO userProfileRequest) {
        UserProfile userProfile = userProfileRequestDTOMapper.mapToEntity(userProfileRequest);
        return userProfileRepository.save(userProfile);
    }
}
