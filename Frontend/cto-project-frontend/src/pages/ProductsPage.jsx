import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../state/AppContext.jsx";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";

export default function ProductsPage() {
  const { userProfile, selectedMovement } = useAppContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userProfile || !selectedMovement) {
      navigate("/posture/movements");
      return;
    }
    const fetchProducts = async () => {
      try {
        const params = new URLSearchParams({
          movement: selectedMovement,
          level: userProfile.level,
          goal: userProfile.goal
        });
        const res = await fetch(`${API_BASE}/api/products?${params.toString()}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [userProfile, selectedMovement, navigate]);

  if (loading) return <p>Chargement du matériel...</p>;

  return (
    <section>
      <h1>3. Matériel recommandé</h1>
      <p className="info">
        Mouvement : {selectedMovement} – Niveau : {userProfile?.level}
      </p>
      <div className="product-grid">
        {products.length === 0 && <p>Pas de suggestions pour le moment.</p>}
        {products.map(p => (
          <article key={p.id} className="card product-card">
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            {p.tag && <span className="tag">{p.tag}</span>}
            <a href={p.url} target="_blank" rel="noreferrer">
              Voir sur Decathlon
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
