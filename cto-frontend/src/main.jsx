import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { PostureProvider } from "./context/PostureContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PostureProvider>
        <App />
      </PostureProvider>
    </BrowserRouter>
  </React.StrictMode>
);
