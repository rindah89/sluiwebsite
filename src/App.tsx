import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

// components
import ContactIcon from "./components/contact-icon/ContactIcon";

// pages
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import NotFound from "./pages/error/404";
import Campuses from "./pages/campuses/Campuses";
import Faculties from "./pages/faculties/Faculties";
import Masters from "./pages/masters/Masters";
import HND from "./pages/hnd/HND";
import Bachelors from "./pages/bachelors/Bachelors";
import Foundation from "./pages/foundation/Foundation";
import OurValues from "./pages/our-values/OurValues";

const App = () => {
  return (
    <div className="app">
      <Router>
        <ContactIcon />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/our-campuses" element={<Campuses />} />
          <Route path="/our-faculties" element={<Faculties />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/hnd" element={<HND />} />
          <Route path="/bachelors" element={<Bachelors />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-values" element={<OurValues />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
