// src/components/InstructionsPanel.jsx
import React, { useMemo, useState } from 'react';
import { useProfile } from '../context/ProfileContext.jsx';

export default function InstructionsPanel() {
  const { selectedMovement, profile, addXp } = useProfile();
  const [completedSteps, setCompletedSteps] = useState([]);

  const levelKey = useMemo(() => {
    if (!profile) return 'beginner';
    if (profile.level === 'advanced') return 'advanced';
    if (profile.level === 'intermediate') return 'intermediate';
    return 'beginner';
  }, [profile]);

  if (!selectedMovement) {
    return (
      <div className="panel">
        <h2 className="panel-title">🧠 Coach view</h2>
        <p className="panel-intro">
          Choose a movement first to see personalized instructions.
        </p>
      </div>
    );
  }

  const baseSteps = selectedMovement.instructions?.[levelKey] || [];
  const toggleStep = (index) => {
    setCompletedSteps((prev) => {
      const exists = prev.includes(index);
      const next = exists ? prev.filter((i) => i !== index) : [...prev, index];
      if (!exists) addXp(5); // micro-reward
      return next;
    });
  };

  const completionRatio =
    baseSteps.length === 0 ? 0 : completedSteps.length / baseSteps.length;

  return (
    <div className="panel">
      <h2 className="panel-title">
        🧑‍🏫 Coach · {selectedMovement.name}
      </h2>
      <p className="panel-intro">
        Level: <strong>{levelKey}</strong>. Tick each step as you master it to
        earn XP.
      </p>

      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${completionRatio * 100}%` }}
        />
      </div>
      <p className="progress-label">
        {Math.round(completionRatio * 100)}% posture mastery
      </p>

      <ul className="steps-list">
        {baseSteps.map((step, idx) => (
          <li
            key={idx}
            className={`step-item ${
              completedSteps.includes(idx) ? 'done' : ''
            }`}
          >
            <label>
              <input
                type="checkbox"
                checked={completedSteps.includes(idx)}
                onChange={() => toggleStep(idx)}
              />
              <span>{step}</span>
            </label>
          </li>
        ))}
      </ul>

      {selectedMovement.safetyTips?.length > 0 && (
        <>
          <h3 className="subheading">⚠ Safety tips</h3>
          <ul className="tips-list">
            {selectedMovement.safetyTips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </>
      )}

      {selectedMovement.injuryRisks?.length > 0 && (
  <>
    <h3 className="subheading">🚑 Possible injury risks</h3>
    <ul className="tips-list">
      {selectedMovement.injuryRisks.map((risk, idx) => (
        <li key={idx}>{risk}</li>
      ))}
    </ul>
  </>
)}
    </div>
  );
}
