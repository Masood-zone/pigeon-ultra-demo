import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import WhyUltra from "../../pages/about/whyUltra";
import Apps from "../../pages/apps";
import Contact from "../../pages/contact";
import Newsletter from "../../pages/newsletter";
import Navbar from "../navbar";
import Shops from "../../pages/shops";
import Services from "../../pages/services";

function Layout() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/services" id="services" element={<Services />} />
          <Route path="/why-ultra" id="whyultra" element={<WhyUltra />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Route>
        <Route path="/shops" element={<Shops />} />
      </Routes>
    </Router>
  );
}

export default Layout;
