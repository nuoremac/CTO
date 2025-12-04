import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar.jsx";

export default function PostureLayout() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "1rem 1.5rem" }}>
        <Outlet />
      </main>
      <footer style={{ padding: "0.5rem 1.5rem", fontSize: "0.8rem" }}>
        © 2025 Nuit de l&apos;Info — CTO de ta posture
      </footer>
    </div>
  );
}
