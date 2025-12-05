// src/App.jsx
import React, { useState } from 'react';
import { ProfileProvider } from './context/ProfileContext.jsx';
import Quiz from './components/Quiz.jsx';
import MovementSelector from './components/MovementSelector.jsx';
import InstructionsPanel from './components/InstructionsPanel.jsx';
import Visualizer3D from './components/Visualizer3D.jsx';
import ShopCarousel from './components/ShopCarousel.jsx';
import XPHud from './components/XPHud.jsx';

function AppInner() {
  const [step, setStep] = useState(1);

  const goNext = () => setStep((s) => Math.min(3, s + 1));
  const goPrev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <div className="app-root">
      <div className="app-bg-orbit" />
      <header className="app-header">
        <h1 className="logo-title">
          <span className="logo-orb" /> CTO of Your Posture
        </h1>
        <p className="subtitle">
          Gamified coach to protect your posture and prevent injuries.
        </p>
      </header>

      <XPHud />

      <main className="app-main">
        <div className="stepper">
          <button
            className={`step-badge ${step === 1 ? 'active' : ''}`}
            onClick={() => setStep(1)}
          >
            1 · Profile
          </button>
          <button
            className={`step-badge ${step === 2 ? 'active' : ''}`}
            onClick={() => setStep(2)}
          >
            2 · Movement
          </button>
          <button
            className={`step-badge ${step === 3 ? 'active' : ''}`}
            onClick={() => setStep(3)}
          >
            3 · Coach
          </button>
        </div>

        <div className="content-grid">
          <section className="content-main-card glass-card">
            {step === 1 && <Quiz onCompleted={goNext} />}
            {step === 2 && <MovementSelector onCompleted={goNext} />}
            {step === 3 && <InstructionsPanel />}
          </section>

          <aside className="content-side">
            <div className="glass-card visual-card">
              <Visualizer3D />
            </div>
            <div className="glass-card shop-card">
              <ShopCarousel />
            </div>
          </aside>
        </div>

        <div className="nav-buttons">
          <button
            className="nav-btn ghost"
            onClick={goPrev}
            disabled={step === 1}
          >
            ⬅ Previous
          </button>
          <button
            className="nav-btn primary"
            onClick={goNext}
            disabled={step === 3}
          >
            Next ➡
          </button>
        </div>
      </main>
      <footer className="app-footer">
        Built for Nuit de l&apos;Info · Decathlon Digital
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ProfileProvider>
      <AppInner />
    </ProfileProvider>
  );
}
