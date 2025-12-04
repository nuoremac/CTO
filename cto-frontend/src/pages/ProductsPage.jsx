import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePosture } from "../context/PostureContext";

export default function ProductsPage() {
  const { userProfile, selectedMovement } = usePosture();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userProfile) {
      navigate("/posture/profile");
    } else if (!selectedMovement) {
      navigate("/posture/movements");
    }
  }, [userProfile, selectedMovement, navigate]);

  return (
    <section>
      <h1>Matériel recommandé</h1>
      {(!userProfile || !selectedMovement) && (
        <p>Redirection en cours…</p>
      )}
      {userProfile && selectedMovement && (
        <p>
          Ici s&apos;afficheront les produits pour le mouvement :{" "}
          <strong>{selectedMovement}</strong>.
        </p>
      )}
    </section>
  );
}
