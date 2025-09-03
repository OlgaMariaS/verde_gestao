import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TelaInicial from "./TelaInicial.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TelaInicial />
  </StrictMode>
);
