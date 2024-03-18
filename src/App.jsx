import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
// import Dashboard from "./pages/Host/Dashboard"
// import Income from "./pages/Host/Income"
// import Reviews from "./pages/Host/Reviews"
// import HostVans from "./pages/Host/HostVans"
// import HostVanDetail from "./pages/Host/HostVanDetail"
// import Layout from "./components/Layout"
// import HostLayout from "./components/HostLayout"

import "../server.js";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
