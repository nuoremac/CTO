import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../state/AppContext.jsx";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";

export default function MovementsPage() {
  const { userProfile, selectedMovement, setSelectedMovement } = useAppContext();
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userProfile) {
      navigate("/posture/profile");
    }
  }, [userProfile, navigate]);

  const chooseMovement = async (movement) => {
    if (!userProfile) return;
    setSelectedMovement(movement);
    setLoading(true);
    setAdvice(null);
    try {
      const res = await fetch(`${API_BASE}/api/movements/advice`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          profileId: userProfile.id,
          movement
        })
      });
      const data = await res.json();
      setAdvice(data);
    } catch (err) {
      setAdvice({ steps: ["Impossible de récupérer les conseils."] });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1>2. Choisis ton mouvement</h1>
      {userProfile && (
        <p className="info">
          Profil : {userProfile.summary}
        </p>
      )}

      <div className="movement-choices">
        {["squat", "pushup", "yoga"].map(m => (
          <button
            key={m}
            className={selectedMovement === m ? "selected" : ""}
            onClick={() => chooseMovement(m)}
          >
            {m === "squat" && "Squat"}
            {m === "pushup" && "Pompes"}
            {m === "yoga" && "Posture de yoga"}
          </button>
        ))}
      </div>

      {loading && <p>Chargement des conseils...</p>}

      {advice && (
        <div className="coach-layout">
          <div className="card">
            <h2>Instructions personnalisées – {advice.movement}</h2>
            <h3>Étapes</h3>
            <ol>
              {advice.steps?.map((s, i) => <li key={i}>{s}</li>)}
            </ol>
            {advice.warnings && advice.warnings.length > 0 && (
              <>
                <h3>À éviter</h3>
                <ul className="warning">
                  {advice.warnings.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </>
            )}
            {advice.tips && advice.tips.length > 0 && (
              <>
                <h3>Astuce sécurité</h3>
                <ul className="tip">
                  {advice.tips.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </>
            )}
            <button
              disabled={!selectedMovement}
              onClick={() => navigate("/posture/products")}
            >
              Voir le matériel recommandé
            </button>
          </div>

          <div className="card">
            <h2>Illustration</h2>
            <p>(Ici vous pouvez ajouter une image ou un schéma de la posture idéale.)</p>
          </div>
        </div>
      )}
    </section>
  );
}
