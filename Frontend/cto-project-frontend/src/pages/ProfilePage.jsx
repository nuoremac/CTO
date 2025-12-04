import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../state/AppContext.jsx";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";

export default function ProfilePage() {
  const { setUserProfile } = useAppContext();
  const [form, setForm] = useState({
    level: "",
    goal: "",
    sports: [],
    painZones: []
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const toggleArrayField = (field, value) => {
    setForm(prev => {
      const arr = prev[field];
      return arr.includes(value)
        ? { ...prev, [field]: arr.filter(v => v !== value) }
        : { ...prev, [field]: [...arr, value] };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_BASE}/api/profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Erreur serveur");
      const data = await res.json();
      setUserProfile({ ...form, id: data.id, summary: data.summary });
      setMessage("Profil enregistré ✅");
      navigate("/posture/movements");
    } catch (err) {
      setMessage("Impossible d'enregistrer le profil.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1>1. Ton profil sportif</h1>
      <p>Réponds à quelques questions pour personnaliser les conseils.</p>
      <form onSubmit={handleSubmit} className="card form">
        <label>
          Niveau
          <select
            value={form.level}
            onChange={e => setForm(f => ({ ...f, level: e.target.value }))}
            required
          >
            <option value="">Sélectionne</option>
            <option value="beginner">Débutant</option>
            <option value="intermediate">Intermédiaire</option>
            <option value="advanced">Avancé</option>
          </select>
        </label>

        <label>
          Objectif principal
          <select
            value={form.goal}
            onChange={e => setForm(f => ({ ...f, goal: e.target.value }))}
            required
          >
            <option value="">Sélectionne</option>
            <option value="health">Santé / posture</option>
            <option value="performance">Performance</option>
            <option value="rehab">Rééducation</option>
          </select>
        </label>

        <fieldset>
          <legend>Sports pratiqués</legend>
          {["fitness", "running", "yoga", "musculation"].map(s => (
            <label key={s}>
              <input
                type="checkbox"
                checked={form.sports.includes(s)}
                onChange={() => toggleArrayField("sports", s)}
              />
              {s}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Zones sensibles (optionnel)</legend>
          {["knee", "back", "shoulder"].map(z => (
            <label key={z}>
              <input
                type="checkbox"
                checked={form.painZones.includes(z)}
                onChange={() => toggleArrayField("painZones", z)}
              />
              {z}
            </label>
          ))}
        </fieldset>

        <button type="submit" disabled={loading}>
          {loading ? "Enregistrement..." : "Valider mon profil"}
        </button>
        {message && <p className="info">{message}</p>}
      </form>
    </section>
  );
}
