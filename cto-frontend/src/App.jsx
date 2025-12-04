import { Routes, Route, Navigate } from "react-router-dom";
import PostureLayout from "./layout/PostureLayout";
import Overview from "./pages/Overview";
import ProfilePage from "./pages/ProfilePage";
import MovementsPage from "./pages/MovementsPage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posture" replace />} />

      <Route path="/posture" element={<PostureLayout />}>
        <Route index element={<Overview />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="movements" element={<MovementsPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/posture" replace />} />
    </Routes>
  );
}
