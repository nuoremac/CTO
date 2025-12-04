import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePosture } from "../context/PostureContext";

export default function MovementsPage() {
  const { userProfile, selectedMovement, setSelectedMovement } = usePosture();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userProfile) {
      navigate("/posture/profile");
    }
  }, [userProfile, navigate]);

  return (
    <section>
      <h1>Mouvements</h1>
      {!userProfile && <p>Redirection vers le profil...</p>}

      {userProfile && (
        <>
          <p>Profil actif : {userProfile.level} / {userProfile.goal}</p>
          <button onClick={() => setSelectedMovement("squat")}>
            Choisir Squat
          </button>
          {selectedMovement && (
            <p>Mouvement choisi : {selectedMovement}</p>
          )}
        </>
      )}
    </section>
  );
}
