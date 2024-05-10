import './globals.css'

import { createRoot } from "react-dom/client";
import { Development } from "./development";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Development />
  </StrictMode>
);
