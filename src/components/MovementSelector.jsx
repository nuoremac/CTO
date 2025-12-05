// src/components/MovementSelector.jsx
import React, { useMemo } from 'react';
import { MOVEMENTS, LEVEL_ORDER, INTENSITY_ORDER } from '../data/movement.js';
import { useProfile } from '../context/ProfileContext.jsx';

function levelIndex(level) {
  const idx = LEVEL_ORDER.indexOf(level);
  return idx === -1 ? 0 : idx;
}

function intensityIndex(intensity) {
  const idx = INTENSITY_ORDER.indexOf(intensity);
  return idx === -1 ? 1 : idx;
}

// Simple scoring based on profile and movement metadata
function scoreMovement(mvt, profile) {
  if (!profile) return 1; // neutral score if no profile yet

  let score = 0;

  // Level closeness
  if (mvt.levelRange) {
    const userL = levelIndex(profile.level);
    const minL = levelIndex(mvt.levelRange.min);
    const maxL = levelIndex(mvt.levelRange.max);
    if (userL >= minL && userL <= maxL) {
      score += 20;
    } else {
      // too hard or too easy => slightly lower
      score -= 5;
    }
  }

  // Goal match
  if (mvt.goals?.includes(profile.goal)) {
    score += 25;
  }

  // Constraints penalty: if user has "knees" and movement stresses knees
  if (Array.isArray(profile.constraints) && profile.constraints.length > 0) {
    const lowerJoints = (mvt.joints || []).map((j) => j.toLowerCase());
    profile.constraints.forEach((c) => {
      if (lowerJoints.includes(c)) {
        score -= 20; // risk
      }
    });
  }

  // BMI: if obese and intensity high, penalize; if low intensity, reward
  if (profile.bmiCategory === 'obese' || profile.bmiCategory === 'overweight') {
    const idx = intensityIndex(mvt.intensity || 'moderate');
    if (idx === 2) score -= 15; // high
    if (idx === 0) score += 10; // low
  }

  // Light bonus for pain_free goal match
  if (profile.goal === 'pain_free' && mvt.goals?.includes('pain_free')) {
    score += 10;
  }

  return score;
}

function getCautionTags(mvt, profile) {
  const tags = [];
  if (!profile) return tags;

  const lowerJoints = (mvt.joints || []).map((j) => j.toLowerCase());

  profile.constraints?.forEach((c) => {
    if (lowerJoints.includes(c)) {
      tags.push(`⚠ Caution for your ${c}`);
    }
  });

  if (
    (profile.bmiCategory === 'obese' || profile.bmiCategory === 'overweight') &&
    mvt.intensity === 'high'
  ) {
    tags.push('⚠ High impact · start very gradually');
  }

  return tags;
}

export default function MovementSelector({ onCompleted }) {
  const { selectedMovement, setSelectedMovement, profile, addXp } = useProfile();

  const sortedMovements = useMemo(() => {
    return [...MOVEMENTS]
      .map((m) => ({
        ...m,
        _score: scoreMovement(m, profile),
      }))
      .sort((a, b) => b._score - a._score)
      .slice(0, 15); // keep top 15
  }, [profile]);

  const handleSelect = (mvt) => {
    setSelectedMovement(mvt);
    addXp(20);
    onCompleted?.();
  };

  return (
    <div className="panel">
      <h2 className="panel-title">🏃  Recommended movements</h2>
      <p className="panel-intro">
        {profile ? (
          <>
            Personalized for{' '}
            <strong>{profile.name.toUpperCase() || 'YOU'}</strong> · Level:{' '}
            <strong>{profile.level}</strong> · Goal:{' '}
            <strong>{profile.goal}</strong>
            {profile.bmi && (
              <>
                {' '}
                · BMI: <strong>{profile.bmi}</strong> ({profile.bmiCategory})
              </>
            )}
          </>
        ) : (
          'Fill out the profile to get smarter recommendations.'
        )}
      </p>

      <div className="movement-grid">
        {sortedMovements.map((mvt) => {
          const cautionTags = getCautionTags(mvt, profile);
          return (
            <button
              key={mvt.id}
              className={`movement-card tilt-3d ${
  selectedMovement?.id === mvt.id ? 'active' : ''
}`}
              type="button"
              onClick={() => handleSelect(mvt)}
            >
              <div className="movement-icon">{mvt.iconEmoji}</div>
              <h3>{mvt.name}</h3>
              <p className="movement-meta">
                {mvt.category} · {mvt.primaryArea}
              </p>
              <p className="movement-difficulty">
                Level: {mvt.difficulty} · Intensity: {mvt.intensity}
              </p>

              {mvt.injuryRisks?.length > 0 && (
                <p className="movement-meta" style={{ marginTop: '0.35rem' }}>
                  Potential risks:{' '}
                  <span style={{ opacity: 0.9 }}>
                    {mvt.injuryRisks[0]}
                    {mvt.injuryRisks.length > 1 ? '…' : ''}
                  </span>
                </p>
              )}

              {cautionTags.length > 0 && (
                <ul className="tips-list" style={{ marginTop: '0.3rem' }}>
                  {cautionTags.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
