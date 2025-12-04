import { NavLink, Outlet } from "react-router-dom";

export default function PostureLayout() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-area">
          <span className="brand">Decathlon Digital – CTO Posture</span>
        </div>
        <nav className="nav">
          <NavLink to="/posture" end>Accueil</NavLink>
          <NavLink to="/posture/profile">Profil</NavLink>
          <NavLink to="/posture/movements">Mouvements</NavLink>
          <NavLink to="/posture/products">Matériel</NavLink>
          <NavLink to="/posture/about">NIRD</NavLink>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        © 2025 Nuit de l’Info – Devenez le CTO de votre posture
      </footer>
    </div>
  );
}
