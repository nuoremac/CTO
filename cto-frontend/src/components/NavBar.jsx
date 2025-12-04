import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      style={{
        padding: "0.75rem 1.5rem",
        borderBottom: "1px solid #333",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div>Posture CTO</div>
      <nav style={{ display: "flex", gap: "0.75rem" }}>
        <NavLink to="/posture" end>Accueil</NavLink>
        <NavLink to="/posture/profile">Profil</NavLink>
        <NavLink to="/posture/movements">Mouvements</NavLink>
        <NavLink to="/posture/products">Matériel</NavLink>
        <NavLink to="/posture/about">NIRD</NavLink>
      </nav>
    </header>
  );
}
