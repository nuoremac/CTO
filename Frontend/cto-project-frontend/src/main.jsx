import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PostureLayout from "./pages/PostureLayout.jsx";
import Overview from "./pages/Overview.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import MovementsPage from "./pages/MovementsPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import { AppProvider } from "./state/AppContext.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/posture" replace />} />
          <Route path="/posture" element={<PostureLayout />}>
            <Route index element={<Overview />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="movements" element={<MovementsPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  </React.StrictMode>
);
