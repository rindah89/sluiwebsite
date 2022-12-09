import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

// components
import ContactIcon from "./components/contact-icon/ContactIcon";

// pages
import Landing from "./pages/landing/Landing";
// import About from "./pages/about/About";
import NotFound from "./pages/error/404";
import Campuses from "./pages/campuses/Campuses";
import Faculties from "./pages/faculties/Faculties";

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
          {/* <Route path="/about-st-louis" element={<About />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
