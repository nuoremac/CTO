import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosture } from "../context/PostureContext";

export default function ProfileForm() {
  const { setUserProfile } = usePosture();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    level: "",
    sports: [],
    goal: "",
    painZones: [],
  });
  const [loading, setLoading] = useState(false);

  const toggleArrayField = (field, value) => {
    setForm(prev => {
      const current = prev[field];
      const exists = current.includes(value);
      return {
        ...prev,
        [field]: exists ? current.filter(v => v !== value) : [...current, value],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setUserProfile({ ...form, profileId: data.profileId, summary: data.summary });
      navigate("/posture/movements");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'enregistrement du profil.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Niveau</label>
        <div className="pill-group">
          {["beginner", "intermediate", "advanced"].map(lvl => (
            <button
              key={lvl}
              type="button"
              className={
                "pill" + (form.level === lvl ? " pill-active" : "")
              }
              onClick={() => setForm(prev => ({ ...prev, level: lvl }))}
            >
              {lvl === "beginner" && "Débutant"}
              {lvl === "intermediate" && "Intermédiaire"}
              {lvl === "advanced" && "Avancé"}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Sports pratiqués</label>
        <div className="pill-group">
          {["musculation", "running", "yoga", "cross-training"].map(sport => (
            <button
              key={sport}
              type="button"
              className={
                "pill" + (form.sports.includes(sport) ? " pill-active" : "")
              }
              onClick={() => toggleArrayField("sports", sport)}
            >
              {sport}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Objectif principal</label>
        <select
          value={form.goal}
          onChange={e => setForm(prev => ({ ...prev, goal: e.target.value }))}
        >
          <option value="">Choisis un objectif...</option>
          <option value="health">Santé / posture</option>
          <option value="performance">Performance</option>
          <option value="rehab">Rééducation</option>
        </select>
      </div>

      <div className="form-group">
        <label>Zones sensibles</label>
        <div className="pill-group">
          {["dos", "genou", "épaule"].map(zone => (
            <button
              key={zone}
              type="button"
              className={
                "pill" + (form.painZones.includes(zone) ? " pill-active" : "")
              }
              onClick={() => toggleArrayField("painZones", zone)}
            >
              {zone}
            </button>
          ))}
        </div>
      </div>

      <button className="btn-primary" type="submit" disabled={loading}>
        {loading ? "Enregistrement..." : "Valider et continuer"}
      </button>
    </form>
  );
}
