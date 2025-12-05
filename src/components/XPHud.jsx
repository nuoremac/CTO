// src/components/XPHud.jsx
import React from 'react';
import { useProfile } from '../context/ProfileContext.jsx';

export default function XPHud() {
  const { xp, profile } = useProfile();

  const level =
    xp > 200 ? 'Posture Master' : xp > 100 ? 'Form Guardian' : 'Rookie CTO';

  const progress = Math.min((xp % 100) / 100, 1);

  return (
    <div className="xp-hud glass-card">
      <div>
        <p className="xp-title">Gamified Progress</p>
        <p className="xp-subtitle">
          Rank: <strong>{level}</strong>{' '}
          {profile && `· ${profile.level.toUpperCase()} · Goal: ${profile.goal}`}
        </p>
        <div className="xp-bar">
          <div
            className="xp-bar-fill"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
      <div className="xp-score">🏆 {xp} XP</div>
    </div>
  );
}
