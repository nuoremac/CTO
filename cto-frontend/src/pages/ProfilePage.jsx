import { usePosture } from "../context/PostureContext";

export default function ProfilePage() {
  const { userProfile, setUserProfile } = usePosture();

  const handleClick = () => {
    setUserProfile({
      level: "beginner",
      sports: ["yoga"],
      goal: "health",
      painZones: []
    });
  };

  return (
    <section>
      <h1>Profil sportif</h1>
      <p>Page de test pour ton profil.</p>
      <button onClick={handleClick}>Définir un profil de test</button>

      {userProfile && (
        <pre style={{ marginTop: "1rem" }}>
          {JSON.stringify(userProfile, null, 2)}
        </pre>
      )}
    </section>
  );
}
