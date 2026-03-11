import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 1. Create root
// 2. Render markup
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <h1>PDWaDWA</h1>
    <App />
  </StrictMode>,
);
