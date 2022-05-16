import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.js";
import Distancia from "./pages/Distancia/Distancia.js";
import Moedas from "./pages/Moedas/Moedas.js";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/calculadora-distancia" element={<Distancia />} />
        <Route path="/calculadora-moedas" element={<Moedas />} />
      </Routes>
    </BrowserRouter>
  );
}
