export default function InstructionsPanel({ advice }) {
  if (!advice) {
    return (
      <div className="card card-muted">
        <h2>Consignes personnalisées</h2>
        <p>Choisis un mouvement pour voir les consignes adaptées à ton profil.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>{advice.title || "Consignes pour ton mouvement"}</h2>

      {advice.steps && (
        <>
          <h3>Étapes</h3>
          <ol className="steps-list">
            {advice.steps.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ol>
        </>
      )}

      {advice.warnings && advice.warnings.length > 0 && (
        <div className="alert alert-warning">
          <h3>À éviter</h3>
          <ul>
            {advice.warnings.map((w, idx) => (
              <li key={idx}>{w}</li>
            ))}
          </ul>
        </div>
      )}

      {advice.tips && advice.tips.length > 0 && (
        <div className="alert alert-success">
          <h3>Astuce sécurité</h3>
          <ul>
            {advice.tips.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
