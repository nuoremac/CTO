// src/components/Visualizer3D.jsx
import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useProfile } from '../context/ProfileContext.jsx';

/**
 * Sporty avatar made from simple 3D primitives.
 * - Proportions look like a stylized athlete
 * - Colors: sport shirt, shorts, shoes
 * - Joints that are under stress can be tinted red
 */

function SportAvatar({ movementId, stressedJoints = [] }) {
  const root = useRef();
  const pelvis = useRef();
  const torso = useRef();
  const head = useRef();
  const leftLeg = useRef();
  const rightLeg = useRef();
  const leftArm = useRef();
  const rightArm = useRef();

  const pose = useMemo(() => {
    if (!movementId) return 'idle';
    if (movementId.includes('squat')) return 'squat';
    if (movementId.includes('pushup')) return 'pushup';
    if (movementId.includes('plank')) return 'plank';
    if (movementId.includes('yoga')) return 'warrior';
    if (movementId.includes('bridge')) return 'bridge';
    if (movementId.includes('run') || movementId.includes('step')) return 'step';
    return 'athletic';
  }, [movementId]);

  // quick lookup for stressed joint → color
  const isStressed = (jointName) =>
    stressedJoints.some((j) => j.toLowerCase().includes(jointName));

  const colorTorso = isStressed('lower_back') ? '#ff4b6e' : '#00e0ff';
  const colorHips = isStressed('hips') ? '#ff4b6e' : '#0080ff';
  const colorLegs = isStressed('knee') || isStressed('ankle') ? '#ff4b6e' : '#1cff9c';
  const colorArms = isStressed('shoulder') || isStressed('wrist') ? '#ff4b6e' : '#4bf2ff';

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!root.current) return;

    // small breathing / bounce
    root.current.position.y = 0.05 * Math.sin(t * 2);

    // Reset base orientation each frame
    root.current.rotation.set(0, 0, 0);
    root.current.position.x = 0;

    if (pelvis.current) pelvis.current.rotation.set(0, 0, 0);
    if (torso.current) torso.current.rotation.set(0, 0, 0);
    if (leftLeg.current) leftLeg.current.rotation.set(0, 0, 0);
    if (rightLeg.current) rightLeg.current.rotation.set(0, 0, 0);
    if (leftArm.current) leftArm.current.rotation.set(0, 0, 0);
    if (rightArm.current) rightArm.current.rotation.set(0, 0, 0);

    switch (pose) {
      case 'squat': {
        const phase = (Math.sin(t * 2) + 1) / 2; // 0..1
        const depth = 0.8 * phase; // 0..0.8

        root.current.position.y -= depth * 0.3;

        if (leftLeg.current && rightLeg.current) {
          leftLeg.current.rotation.x = depth * 0.9;
          rightLeg.current.rotation.x = depth * 0.9;
        }
        if (torso.current) {
          torso.current.rotation.x = -depth * 0.2;
        }
        break;
      }

      case 'pushup': {
        const push = (Math.sin(t * 2.3) + 1) / 2;
        const angle = 0.5 + push * 0.4; // 0.5..0.9 rad

        root.current.rotation.x = angle;
        root.current.position.y = 0.12;

        if (leftArm.current && rightArm.current) {
          leftArm.current.rotation.x = 0.2 + push * 0.4;
          rightArm.current.rotation.x = 0.2 + push * 0.4;
        }
        break;
      }

      case 'plank': {
        root.current.rotation.x = 0.6;
        root.current.position.y = 0.12;
        break;
      }

      case 'warrior': {
        const wobble = Math.sin(t * 0.6) * 0.15;

        if (pelvis.current) {
          pelvis.current.rotation.y = 0.4;
        }
        if (leftLeg.current && rightLeg.current) {
          leftLeg.current.rotation.z = 0.25;
          rightLeg.current.rotation.z = -0.25;
        }
        if (torso.current) {
          torso.current.rotation.z = -0.15;
          torso.current.rotation.y = wobble;
        }
        if (leftArm.current && rightArm.current) {
          leftArm.current.rotation.z = 1.4;
          rightArm.current.rotation.z = -1.4;
        }
        break;
      }

      case 'bridge': {
        if (pelvis.current) {
          pelvis.current.rotation.x = -0.4;
          pelvis.current.position.y = 0.1;
        }
        if (torso.current) {
          torso.current.rotation.x = -0.5;
        }
        root.current.position.y = 0.25;
        break;
      }

      case 'step': {
        const runPhase = Math.sin(t * 3);
        if (leftLeg.current && rightLeg.current) {
          leftLeg.current.rotation.x = 0.5 * Math.max(0, runPhase);
          rightLeg.current.rotation.x = -0.5 * Math.min(0, runPhase);
        }
        if (leftArm.current && rightArm.current) {
          leftArm.current.rotation.x = -0.6 * runPhase;
          rightArm.current.rotation.x = 0.6 * runPhase;
        }
        break;
      }

      case 'athletic':
      default: {
        // light ready stance
        if (leftLeg.current && rightLeg.current) {
          leftLeg.current.rotation.x = 0.25;
          rightLeg.current.rotation.x = 0.25;
        }
        if (torso.current) {
          torso.current.rotation.x = -0.1;
        }
        if (leftArm.current && rightArm.current) {
          leftArm.current.rotation.x = 0.1;
          rightArm.current.rotation.x = 0.1;
        }
        break;
      }
    }
  });

  return (
    <group ref={root}>
      {/* Pelvis / hips block */}
      <group ref={pelvis} position={[0, 0.7, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.45, 0.22, 0.26]} />
          <meshStandardMaterial color={colorHips} metalness={0.2} roughness={0.3} />
        </mesh>
      </group>

      {/* Torso & sport shirt */}
      <group ref={torso} position={[0, 1.05, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.4, 0.55, 0.26]} />
          <meshStandardMaterial color={colorTorso} metalness={0.3} roughness={0.3} />
        </mesh>
      </group>

      {/* Head with headband */}
      <group ref={head} position={[0, 1.55, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.17, 24, 24]} />
          <meshStandardMaterial color="#f5f0ea" />
        </mesh>
        {/* headband */}
        <mesh position={[0, 0.05, 0]}>
          <torusGeometry args={[0.17, 0.03, 12, 40]} />
          <meshStandardMaterial color="#ff6ad5" />
        </mesh>
      </group>

      {/* Legs & shoes */}
      <group position={[0, 0.25, 0]}>
        {/* Left leg */}
        <group ref={leftLeg} position={[-0.13, 0, 0]}>
          <mesh castShadow position={[0, -0.38, 0]}>
            <boxGeometry args={[0.12, 0.75, 0.18]} />
            <meshStandardMaterial color={colorLegs} />
          </mesh>
          {/* Shoe */}
          <mesh castShadow position={[0, -0.8, 0.05]}>
            <boxGeometry args={[0.16, 0.08, 0.3]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* Right leg */}
        <group ref={rightLeg} position={[0.13, 0, 0]}>
          <mesh castShadow position={[0, -0.38, 0]}>
            <boxGeometry args={[0.12, 0.75, 0.18]} />
            <meshStandardMaterial color={colorLegs} />
          </mesh>
          {/* Shoe */}
          <mesh castShadow position={[0, -0.8, 0.05]}>
            <boxGeometry args={[0.16, 0.08, 0.3]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </group>
      </group>

      {/* Arms */}
      <group position={[0, 1.1, 0]}>
        {/* Left arm */}
        <group ref={leftArm} position={[-0.32, 0, 0]}>
          <mesh castShadow position={[0, -0.25, 0]}>
            <boxGeometry args={[0.11, 0.55, 0.16]} />
            <meshStandardMaterial color={colorArms} />
          </mesh>
        </group>
        {/* Right arm */}
        <group ref={rightArm} position={[0.32, 0, 0]}>
          <mesh castShadow position={[0, -0.25, 0]}>
            <boxGeometry args={[0.11, 0.55, 0.16]} />
            <meshStandardMaterial color={colorArms} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function Ground() {
  return (
    <mesh
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.01, 0]}
    >
      <circleGeometry args={[3, 48]} />
      <meshStandardMaterial
        color=""
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}

function SceneContent({ movementId, label, stressedJoints }) {
  return (
    <>
      {/* lights */}
      <hemisphereLight
        intensity={0.5}
        groundColor="#ebf5f5ff"
        color="#e0f7ff"
      />
      <spotLight
        position={[2, 5, 3]}
        angle={0.5}
        penumbra={0.5}
        intensity={1.4}
        castShadow
      />
      <pointLight position={[-2.5, 3, -2]} intensity={0.5} />

      <Ground />
      <SportAvatar movementId={movementId} stressedJoints={stressedJoints} />

      {/* label above avatar */}
      <Html
        position={[0, 1.95, 0]}
        center
        style={{
          pointerEvents: 'none',
          fontSize: '0.8rem',
          color: '#f5f7ff',
          textShadow: '0 0 10px rgba(0,0,0,0.7)',
        }}
      >
        {label}
      </Html>

      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={6}
        maxPolarAngle={Math.PI / 1.9}
      />
    </>
  );
}

export default function Visualizer3D() {
  const { selectedMovement, profile } = useProfile();

  const label = selectedMovement
    ? selectedMovement.name
    : 'Select a movement to see the 3D sport avatar';

  const movementId = selectedMovement?.id || null;
  const stressedJoints = selectedMovement?.joints || [];

  return (
    <div className="visualizer-3d-wrapper">
      <Canvas
        shadows
        camera={{ position: [0, 2, 4.5], fov: 45 }}
      >
        <color attach="background" args={['#020513']} />
        <Suspense
          fallback={
            <Html center style={{ color: 'white', fontSize: '0.8rem' }}>
              Loading 3D coach…
            </Html>
          }
        >
          <SceneContent
            movementId={movementId}
            label={label}
            stressedJoints={stressedJoints}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
