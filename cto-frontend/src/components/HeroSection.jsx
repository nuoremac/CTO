export default function HeroSection({ onStart }) {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Deviens le CTO de ta posture</h1>
        <p className="hero-subtitle">
          Analyse ton profil sportif, apprends les bons gestes et évite les blessures
          grâce à un coach postural intelligent.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onStart}>
            Commencer mon profil
          </button>
          <span className="hero-secondary-text">
            3 étapes • 5 minutes • 100% orienté santé
          </span>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-card">
          <div className="hero-avatar">🧘</div>
          <h2>Posture parfaite</h2>
          <p>
            Visualise les alignements idéaux pour les squats, pompes et postures de yoga,
            adaptés à ton niveau.
          </p>
          <div className="hero-highlights">
            <span>Personnalisé</span>
            <span>Responsable</span>
            <span>Durable</span>
          </div>
        </div>
      </div>
    </section>
  );
}
