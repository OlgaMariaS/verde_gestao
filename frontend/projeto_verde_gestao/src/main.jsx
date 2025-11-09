import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import TelaInicial from "./pages/Home/TelaInicial.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TelaInicial />
  </StrictMode>
);
