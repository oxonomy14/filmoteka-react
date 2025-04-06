import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./css/container.css";
{
  /* import "./fonts/stylesheet.css"; */
}
import App from "./components/App.jsx";
import "modern-normalize/modern-normalize.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
