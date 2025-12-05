// src/components/Quiz.jsx
import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext.jsx';

const initialAnswers = {
  name: '',
  gender: '',
  heightCm: '',
  weightKg: '',
  level: '',
  sports: '',
  goal: '',
  constraints: '',
};

function computeBmi(heightCm, weightKg) {
  const h = Number(heightCm);
  const w = Number(weightKg);
  if (!h || !w || h <= 0) return { bmi: null, bmiCategory: null };
  const heightM = h / 100;
  const bmi = w / (heightM * heightM);
  let cat = null;
  if (bmi < 18.5) cat = 'underweight';
  else if (bmi < 25) cat = 'normal';
  else if (bmi < 30) cat = 'overweight';
  else cat = 'obese';
  return { bmi: Number(bmi.toFixed(1)), bmiCategory: cat };
}

export default function Quiz({ onCompleted }) {
  const [answers, setAnswers] = useState(initialAnswers);
  const [touched, setTouched] = useState(false);
  const { setProfile, addXp } = useProfile();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    // Required fields
    if (
      !answers.name ||
      !answers.gender ||
      !answers.heightCm ||
      !answers.weightKg ||
      !answers.level ||
      !answers.sports ||
      !answers.goal
    ) {
      return;
    }

    const { bmi, bmiCategory } = computeBmi(answers.heightCm, answers.weightKg);

    setProfile({
      name: answers.name.trim(),
      gender: answers.gender,
      heightCm: Number(answers.heightCm),
      weightKg: Number(answers.weightKg),
      bmi,
      bmiCategory,
      level: answers.level,
      sports: answers.sports.split(',').map((s) => s.trim()),
      goal: answers.goal,
      constraints: answers.constraints
        ? answers.constraints.split(',').map((c) => c.trim().toLowerCase())
        : [],
    });

    addXp(80); // more XP now, profile is richer
    onCompleted?.();
  };

  const showError =
    touched &&
    (!answers.name ||
      !answers.gender ||
      !answers.heightCm ||
      !answers.weightKg ||
      !answers.level ||
      !answers.sports ||
      !answers.goal);

  return (
    <div className="panel">
      <h2 className="panel-title">🎯  Build your sport profile</h2>
      <p className="panel-intro">
        We use these details only to adapt movements and highlight injury risks.
      </p>

      <form className="quiz-form" onSubmit={handleSubmit}>
        {/* Identity */}
        <div className="field-group">
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Alex"
            value={answers.name}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label>Gender</label>
          <div className="pill-row">
            {['female', 'male', 'other'].map((g) => (
              <button
                key={g}
                type="button"
                className={`pill ${answers.gender === g ? 'selected' : ''}`}
                onClick={() =>
                  handleChange({ target: { name: 'gender', value: g } })
                }
              >
                {g === 'female' ? 'Female' : g === 'male' ? 'Male' : 'Other'}
              </button>
            ))}
          </div>
        </div>

        {/* Body metrics */}
        <div className="field-group">
          <label>Height (cm)</label>
          <input
            type="number"
            name="heightCm"
            min="120"
            max="230"
            placeholder="e.g. 175"
            value={answers.heightCm}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            name="weightKg"
            min="35"
            max="200"
            placeholder="e.g. 70"
            value={answers.weightKg}
            onChange={handleChange}
          />
        </div>

        {/* Level */}
        <div className="field-group">
          <label>What is your current training level?</label>
          <div className="pill-row">
            {['beginner', 'intermediate', 'advanced'].map((lvl) => (
              <button
                type="button"
                key={lvl}
                className={`pill ${answers.level === lvl ? 'selected' : ''}`}
                onClick={() =>
                  handleChange({ target: { name: 'level', value: lvl } })
                }
              >
                {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Sports / goals / constraints */}
        <div className="field-group">
          <label>Which sports do you practice? (comma-separated)</label>
          <input
            type="text"
            name="sports"
            placeholder="e.g. fitness, football, yoga"
            value={answers.sports}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label>Main objective</label>
          <select name="goal" value={answers.goal} onChange={handleChange}>
            <option value="">Choose an option</option>
            <option value="strength">Build strength</option>
            <option value="mobility">Improve mobility</option>
            <option value="endurance">Increase endurance</option>
            <option value="pain_free">Move pain-free</option>
          </select>
        </div>

        <div className="field-group">
          <label>Do you have any pain or vulnerable areas?</label>
          <input
            type="text"
            name="constraints"
            placeholder="e.g. knees, lower back, shoulders"
            value={answers.constraints}
            onChange={handleChange}
          />
          <small>
            We will mark movements with extra warnings (e.g. &quot;use with
            caution for knees&quot;).
          </small>
        </div>

        {showError && (
          <p className="form-error">
            Please fill in name, gender, height, weight, level, sports and goal
            to continue.
          </p>
        )}

        <button type="submit" className="cta-btn 3d-bounce">
          Validate my profile ✔
        </button>
      </form>
    </div>
  );
}
