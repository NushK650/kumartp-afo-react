import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import ML from "./components/ML.jsx"
import A2N from "./components/A2N.jsx"
import AQ from "./components/AQ.jsx"
import GL from "./components/GL.jsx"
import HW from "./components/HW.jsx"
import OE from "./components/OE.jsx"
import RIAN from "./components/RIAN.jsx"
import RINO from "./components/RINO.jsx"
import RP from "./components/RP.jsx"
import M8B from "./components/M8B.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ML" element={<ML />} />
        <Route path="/HW" element={<HW />} />
        <Route path="/AQ" element={<AQ />} />
        <Route path="/RIAN" element={<RIAN />} />
        <Route path="/OE" element={<OE />} />
        <Route path="/RP" element={<RP />} />
        <Route path="/RINO" element={<RINO />} />
        <Route path="/A2N" element={<A2N />} />
        <Route path="/GL" element={<GL />} />
        <Route path="/M8B" element={<M8B />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
