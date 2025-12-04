import { useNavigate } from "react-router-dom";

export default function Overview() {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Deviens le CTO de ta posture</h1>
      <p>
        Bienvenue sur notre coach postural. Clique sur le bouton ci-dessous pour commencer.
      </p>
      <button onClick={() => navigate("/posture/profile")}>
        Commencer
      </button>
    </section>
  );
}
