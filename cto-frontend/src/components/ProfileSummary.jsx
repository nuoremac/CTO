export default function ProfileSummary({ profile }) {
  if (!profile) {
    return (
      <div className="card card-muted">
        <h2>Résumé du profil</h2>
        <p>Complète le formulaire pour voir ton profil résumé ici.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Résumé du profil</h2>
      <ul className="profile-summary-list">
        <li><strong>Niveau :</strong> {profile.level}</li>
        <li><strong>Sports :</strong> {profile.sports.join(", ") || "—"}</li>
        <li><strong>Objectif :</strong> {profile.goal}</li>
        <li><strong>Zones sensibles :</strong> {profile.painZones.join(", ") || "Aucune"}</li>
      </ul>
      {profile.summary && (
        <p className="profile-summary-tagline">{profile.summary}</p>
      )}
    </div>
  );
}
