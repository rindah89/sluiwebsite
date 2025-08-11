import { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

// components
import ContactIcon from "./components/contact-icon/ContactIcon";
import Apply from "./components/apply-icon/Apply";

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
import CorePrinciple from "./pages/core-principle/CorePrinciple";
import Contact from "./pages/contact/Contact";
import FindBuddy from "./pages/find-buddy/FindBuddy";
import WhyUs from "./pages/why-slui/WhyUs";
import Handbook from "./pages/handbook/Handbook";
import NewsnEvents from "./pages/news&events/News&events";
import Fees from "./pages/fees/Fees";
import Application from "./pages/application/Application";
import Scholarships from "./pages/scholarships/Scholarships";
import Facilities from "./pages/facilities/Facilities";
import Team from "./pages/leadership-team/Team";
import Programme from "./pages/programme/Programme";
import EventDetails from "./pages/event_details/EventDetails";
import Alumni from "./pages/alumni/Alumni";
import CampusDetails from "./pages/campuses/CampusDetails";
import TeamDetailsPage from "./pages/team-details/TeamDetails.page";
import Program from "./pages/program-details/program";
import SearchProgram from "./pages/program-details/search";
import Research from "./pages/research/Research";
import ResearchDetails from "./pages/research-details/ResearchDetails";
import International from "./pages/international/International";

const App = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="app">
      <Router>
        <Apply />
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
          <Route path="/program-details/:id" element={<Program />} />
          <Route
            path="/program-search/:programId/:campusId/:facultyId"
            element={<SearchProgram />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/our-values" element={<OurValues />} />
          <Route path="/core-principles" element={<CorePrinciple />} />
          <Route path="/meet-your-slui-buddy" element={<FindBuddy />} />
          <Route path="/fill-form" element={<Contact />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/handbook" element={<Handbook />} />
          <Route path="/news-and-events" element={<NewsnEvents />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/application-and-admission" element={<Application />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/leadership-team" element={<Team />} />
          <Route path="/leadership-team/:id" element={<TeamDetailsPage />} />
          <Route path="/programme/:id/:title" element={<Programme />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/campus-details/:id" element={<CampusDetails />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research-details/:id" element={<ResearchDetails />} />
          <Route path="/international" element={<International />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default function WrappedApp() {
  return (
    <Suspense>
      <App />
    </Suspense>
  );
}
