// src/context/ProfileContext.jsx
import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [selectedMovement, setSelectedMovement] = useState(null);
  const [xp, setXp] = useState(0);

  const addXp = (amount) => {
    setXp((prev) => prev + amount);
  };

  const value = {
    profile,          // {
                       //  name, gender, heightCm, weightKg, bmi, bmiCategory,
                       //  level, sports, goal, constraints
                       // }
    setProfile,
    selectedMovement,
    setSelectedMovement,
    xp,
    addXp,
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfile must be used inside ProfileProvider');
  return ctx;
}
