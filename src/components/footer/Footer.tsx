import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

// styles
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="components">
        <div className="component">
          <h2>All About Your Studies</h2>
          <div className="links">
            <Link to="/">Masters</Link>
            <Link to="/">Bachelors</Link>
            <Link to="/">HND</Link>
            <Link to="/">Short Courses</Link>
            <Link to="/">Admission Processes</Link>
            <Link to="/">Student Advisory Board</Link>
          </div>
        </div>

        <div className="component">
          <h2>Our Institution</h2>
          <div className="links">
            <Link to="/">About St. Louis</Link>
            <Link to="/">Why St. Louis</Link>
            <Link to="/">Our Universities</Link>
            <Link to="/">Our Admin Team</Link>
            <Link to="/">Services & Facilities</Link>
          </div>
        </div>

        <div className="component">
          <h2>FAQs</h2>
          <div className="links">
            <Link to="/">What are some students benefits?</Link>
            <Link to="/">How are sport activities organized?</Link>
            <Link to="/">What are the graduation requirements</Link>
            <Link to="/">Some rules & regulation</Link>
          </div>
        </div>

        <div className="component">
          <div className="contact__info">
            <h2>Contact Info</h2>
            <div className="mail">
              <AiOutlineMail size={20} />
              <h4>info@slui.org</h4>
            </div>

            <div className="mail">
              <AiOutlinePhone size={20} />
              <h4>(+237) 678-425-922 / 671-710-928</h4>
            </div>
          </div>

          <div className="contact__info">
            <h2 style={{ marginTop: "3rem" }}>SLUI Campus Location</h2>
            <div className="mail">
              <FaMapMarkerAlt size={20} />
              <h4>
                <span style={{ fontWeight: "700" }}>Douala I</span> - Rond Point
                Maetur, Bonamousadi
              </h4>
            </div>

            <div className="mail">
              <FaMapMarkerAlt size={20} />
              <h4>
                <span style={{ fontWeight: "700" }}>Douala II</span> - Opposite
                Nestle, Bonaberi
              </h4>
            </div>

            <div className="mail">
              <FaMapMarkerAlt size={20} />
              <h4>
                <span style={{ fontWeight: "700" }}>Bamenda</span> - Mile 3
                Nkwen & Ndu
              </h4>
            </div>

            <div className="mail">
              <FaMapMarkerAlt size={20} />
              <h4>
                <span style={{ fontWeight: "700" }}>Yaounde</span> - Despot De
                Bois, Simbock
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mark">
        <div className="logo__section">
          <div>
            <img src="/images/logo_dark.webp" alt="logo" />
          </div>
          <div className="social">
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <AiOutlineTwitter />
            </a>
            <a href="#">
              <AiOutlineYoutube />
            </a>
            <a href="#">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
        <div className="refs">
          <h4>&copy; {new Date().getFullYear()}</h4>
          <Link to="/">Privacy</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Cookie Policies</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
