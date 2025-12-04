export default function IllustrationPanel({ movement }) {
  let title = "Illustration de la posture";
  let description = "Une représentation simple de la posture idéale sera affichée ici.";
  let emoji = "🧍";

  if (movement === "squat") {
    title = "Squat : alignement idéal";
    emoji = "🏋️";
    description =
      "Dos neutre, genoux alignés avec les pointes de pieds, pieds largeur épaules. Descends jusqu'à cuisses parallèles au sol.";
  } else if (movement === "pushup") {
    title = "Pompes : ligne tête–talons";
    emoji = "🤸";
    description =
      "Garde une ligne droite des chevilles aux épaules, mains sous les épaules, coude à ~45° du buste.";
  } else if (movement === "yoga-dog") {
    title = "Chien tête en bas";
    emoji = "🧘";
    description =
      "Pousse le sol avec les mains, hanches vers le ciel, dos long, talons vers le sol sans forcer.";
  }

  return (
    <div className="card illustration-card">
      <h2>{title}</h2>
      <div className="illustration-figure">
        <span className="illustration-emoji">{emoji}</span>
      </div>
      <p className="illustration-text">{description}</p>
      <p className="illustration-note">
        Cette zone peut être remplacée par un schéma SVG, une animation ou une
        capture vidéo.
      </p>
    </div>
  );
}
