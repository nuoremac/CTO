import { useNavigate } from "react-router-dom";

export default function Overview() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <h1>Deviens le CTO de ta posture</h1>
      <p>
        Analyse ton profil sportif, découvre comment exécuter tes mouvements en sécurité
        et trouve le matériel adapté grâce à Decathlon.
      </p>
      <button onClick={() => navigate("/posture/profile")}>
        Commencer mon profil
      </button>
    </section>
  );
}
