// src/data/movements.js

// Helper: level and intensity order for scoring
export const LEVEL_ORDER = ['beginner', 'intermediate', 'advanced'];
export const INTENSITY_ORDER = ['low', 'moderate', 'high'];

/*
  Fields:
  - levelRange: { min: 'beginner', max: 'advanced' }
  - goals: ['strength','mobility','endurance','pain_free']
  - joints: ['knees','shoulders','lower_back','hips','wrists','ankles']
  - intensity: 'low' | 'moderate' | 'high'
  - injuryRisks: list of potential injuries / stresses
*/

export const MOVEMENTS = [
  {
    id: 'squat',
    name: 'Bodyweight Squat',
    category: 'Strength',
    primaryArea: 'Legs / Glutes',
    iconEmoji: '🏋️‍♂️',
    difficulty: 'beginner',
    levelRange: { min: 'beginner', max: 'advanced' },
    goals: ['strength', 'endurance', 'pain_free'],
    joints: ['knees', 'hips', 'lower_back'],
    intensity: 'moderate',
    instructions: {
      beginner: [
        'Place your feet shoulder-width apart, toes slightly outward.',
        'Keep your chest up and your back neutral.',
        'Push your hips back as if you sit on a chair.',
        'Keep knees aligned with toes, do not let them collapse inward.',
        'Descend until thighs are parallel to the floor, then push through your heels to stand up.',
      ],
      intermediate: [
        'Add a slow 3-second descent to increase control.',
        'Pause for 1 second at the bottom before going up.',
        'Keep your core braced during the full motion.',
      ],
      advanced: [
        'Try tempo squats: 3s down, 2s pause, 1s up.',
        'Use a resistance band around your knees to enforce alignment.',
      ],
    },
    safetyTips: [
      'Stop if you feel sharp pain in your knees or lower back.',
      'Do not let your heels lift off the floor.',
    ],
    injuryRisks: [
      'Knee strain if knees collapse inward.',
      'Lumbar discomfort if back is rounded under load.',
    ],
    products: [
      { id: 'mat1', name: 'Training Mat 500', type: 'Tapis de sol', decathlonUrl: 'https://www.decathlon.fr/' },
      { id: 'band1', name: 'Resistance Band Medium', type: 'Bande élastique', decathlonUrl: 'https://www.decathlon.fr/' },
    ],
  },
  {
    id: 'pushup',
    name: 'Push-Up',
    category: 'Strength',
    primaryArea: 'Chest / Core',
    iconEmoji: '🤸‍♂️',
    difficulty: 'beginner',
    levelRange: { min: 'beginner', max: 'advanced' },
    goals: ['strength', 'endurance'],
    joints: ['wrists', 'shoulders', 'elbows', 'lower_back'],
    intensity: 'moderate',
    instructions: {
      beginner: [
        'Start in a high plank with hands under shoulders.',
        'Keep a straight line from head to heels.',
        'Bend your elbows to lower your chest toward the floor.',
        'Push the floor away to return to the start position.',
      ],
      intermediate: [
        'Slow down the descent to increase time under tension.',
        'Keep elbows at ~45° from your torso, not flared out.',
      ],
      advanced: ['Try diamond push-ups or decline push-ups for more difficulty.'],
    },
    safetyTips: [
      'If wrists hurt, elevate hands on a bench or use handles.',
      'Engage your core to protect your lower back.',
    ],
    injuryRisks: [
      'Shoulder impingement if elbows are too flared.',
      'Wrist overload if angle is too extreme on hard floor.',
    ],
    products: [
      { id: 'mat2', name: 'Yoga Mat Comfort', type: 'Tapis de yoga', decathlonUrl: 'https://www.decathlon.fr/' },
    ],
  },
  {
    id: 'yoga_warrior2',
    name: 'Yoga – Warrior II',
    category: 'Mobility',
    primaryArea: 'Hips / Shoulders',
    iconEmoji: '🧘‍♀️',
    difficulty: 'beginner',
    levelRange: { min: 'beginner', max: 'advanced' },
    goals: ['mobility', 'pain_free'],
    joints: ['hips', 'knees', 'ankles'],
    intensity: 'low',
    instructions: {
      beginner: [
        'Stand with feet wide apart, turn front foot 90° outward.',
        'Bend the front knee over the ankle, back leg straight.',
        'Raise arms parallel to the floor, gaze over front hand.',
        'Keep shoulders relaxed, chest open.',
      ],
      intermediate: [
        'Focus on slow, controlled breathing in the posture.',
        'Hold for 30–45 seconds per side.',
      ],
      advanced: ['Deepen the hip opening while keeping the spine long.'],
    },
    safetyTips: [
      'Avoid collapsing into the front knee.',
      'If you feel pain in the hips or knees, reduce the stance.',
    ],
    injuryRisks: ['Knee stress if knee passes too far beyond the toes.'],
    products: [
      { id: 'yogamat1', name: 'Yoga Mat Grip', type: 'Tapis de yoga antidérapant', decathlonUrl: 'https://www.decathlon.fr/' },
      { id: 'block1', name: 'Yoga Block', type: 'Brique de yoga', decathlonUrl: 'https://www.decathlon.fr/' },
    ],
  },
  {
    id: 'glute_bridge',
    name: 'Glute Bridge',
    category: 'Strength',
    primaryArea: 'Glutes / Hamstrings',
    iconEmoji: '🍑',
    difficulty: 'beginner',
    levelRange: { min: 'beginner', max: 'advanced' },
    goals: ['strength', 'pain_free'],
    joints: ['hips', 'lower_back'],
    intensity: 'low',
    instructions: {
      beginner: [
        'Lie on your back, feet flat, knees bent.',
        'Press through your heels and lift hips until body forms a line from knees to shoulders.',
        'Squeeze glutes at the top, then lower with control.',
      ],
      intermediate: ['Hold 2 seconds at the top and focus on glute activation.'],
      advanced: ['Try single-leg variations while keeping hips level.'],
    },
    safetyTips: ['Avoid overarching your lower back at the top.'],
    injuryRisks: ['Discomfort in lower back if movement is done only with spine extension.'],
    products: [
      { id: 'mat3', name: 'Fitness Mat Soft', type: 'Tapis de sol', decathlonUrl: 'https://www.decathlon.fr/' },
    ],
  },
  {
    id: 'bird_dog',
    name: 'Bird Dog',
    category: 'Stability',
    primaryArea: 'Core / Lower Back',
    iconEmoji: '🦴',
    difficulty: 'beginner',
    levelRange: { min: 'beginner', max: 'advanced' },
    goals: ['pain_free', 'mobility'],
    joints: ['shoulders', 'hips', 'lower_back'],
    intensity: 'low',
    instructions: {
      beginner: [
        'Start on all fours with hands under shoulders and knees under hips.',
        'Extend opposite arm and leg while keeping the trunk stable.',
        'Hold briefly, then switch sides.',
      ],
      intermediate: ['Add a 3-second hold and emphasize slow breathing.'],
      advanced: ['Close your eyes to challenge balance, if safe.'],
    },
    safetyTips: ['Keep your spine neutral, avoid sagging or arching.'],
    injuryRisks: ['Mild wrist strain if hands are not supported on a mat.'],
    products: [
      { id: 'mat4', name: 'Knee-Friendly Pad', type: 'Genouillère / coussin', decathlonUrl: 'https://www.decathlon.fr/' },
    ],
  },
  {
    id: 'plank',
    name: 'Front Plank',
    category: 'Stability',
    primaryArea: 'Core',
    iconEmoji: '📏',
    difficulty: 'intermediate',
    levelRange: { min: 'beginner', max: 'advanced' },
    goals: ['strength', 'pain_free'],
    joints: ['shoulders', 'elbows', 'lower_back'],
    intensity: 'moderate',
    instructions: {
      beginner: [
        'Start on knees and forearms, keep a straight line from shoulders to knees.',
      ],
      intermediate: [
        'Support your weight on toes and forearms, keep body straight.',
        'Avoid letting hips sag or pike up too high.',
      ],
      advanced: ['Try shoulder taps or leg lifts while maintaining a stable trunk.'],
    },
    safetyTips: ['Stop if you feel pain in the shoulders or lower back.'],
    injuryRisks: ['Lower-back strain if hips sink too low.'],
    products: [
      { id: 'mat5', name: 'Core Training Mat', type: 'Tapis de gainage', decathlonUrl: 'https://www.decathlon.fr/' },
    ],
  },
  {
    id: 'wall_sit',
    name: 'Wall Sit',
    category: 'Strength',
    primaryArea: 'Quadriceps',
    iconEmoji: '🧱',
    difficulty: 'beginner',
    levelRange: { min: 'beginner', max: 'intermediate' },
    goals: ['endurance', 'strength'],
    joints: ['knees'],
    intensity: 'moderate',
    instructions: {
      beginner: [
        'Lean your back against a wall and slide down until knees are at ~90°.',
        'Hold the position while breathing steadily.',
      ],
      intermediate: ['Increase hold time gradually (30–60 seconds).'],
      advanced: ['Add weight (holding a plate) if safe for your knees.'],
    },
    safetyTips: ['Avoid if you have acute knee pain.'],
    injuryRisks: ['Knee irritation if held excessively long without rest.'],
    products: [],
  },
  {
    id: 'calf_raise',
    name: 'Standing Calf Raise',
    category: 'Strength',
    primaryArea: 'Calves / Ankles',
    iconEmoji: '🦶',
    difficulty: 'beginner',
    levelRange: { min: 'beginner', max: 'advanced' },
    goals: ['strength', 'endurance'],
    joints: ['ankles'],
    intensity: 'low',
    instructions: {
      beginner: [
        'Stand tall and slowly rise up onto your toes.',
        'Lower your heels with control back to the floor.',
      ],
      intermediate: ['Perform on a step to increase range of motion.'],
      advanced: ['Add load (dumbbells) for more intensity.'],
    },
    safetyTips: ['Use support (wall/chair) if balance is limited.'],
    injuryRisks: ['Calf strain if overloaded too quickly.'],
    products: [],
  },
  {
    id: 'hip_hinge',
    name: 'Hip Hinge (Good Morning)',
    category: 'Technique',
    primaryArea: 'Posterior Chain',
    iconEmoji: '📐',
    difficulty: 'intermediate',
    levelRange: { min: 'beginner', max: 'advanced' },
    goals: ['strength', 'pain_free'],
    joints: ['hips', 'lower_back'],
    intensity: 'low',
    instructions: {
      beginner: [
        'Stand tall, soften your knees slightly.',
        'Push hips back while maintaining a neutral spine.',
        'Return by driving hips forward, not by rounding your back.',
      ],
      intermediate: ['Place hands on hips to feel the hinge pattern.'],
      advanced: ['Add a light bar on your back, keeping spine neutral.'],
    },
    safetyTips: ['Avoid rounding your back, especially when adding weight.'],
    injuryRisks: ['Lumbar strain if hinge is replaced by spinal flexion.'],
    products: [],
  },
  {
    id: 'step_up',
    name: 'Step-Up',
    category: 'Strength',
    primaryArea: 'Legs / Balance',
    iconEmoji: '🪜',
    difficulty: 'beginner',
    levelRange: { min: 'beginner', max: 'advanced' },
    goals: ['strength', 'endurance'],
    joints: ['knees', 'ankles', 'hips'],
    intensity: 'moderate',
    instructions: {
      beginner: [
        'Step up onto a stable box or step with one foot.',
        'Drive through the entire foot to stand tall, then step down with control.',
      ],
      intermediate: ['Use higher step only if knees are comfortable.'],
      advanced: ['Add weights or slow tempo for more challenge.'],
    },
    safetyTips: ['Use a stable surface; avoid quick, uncontrolled descents.'],
    injuryRisks: ['Knee pain if step is too high or alignment is poor.'],
    products: [],
  },
  // add more if needed, pattern is the same
];
