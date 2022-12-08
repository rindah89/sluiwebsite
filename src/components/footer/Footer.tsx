import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaMapMarkedAlt } from "react-icons/fa";

// styles
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="components">
        <div className="component">
          <h2>Rund um dein Studium</h2>
          <div className="links">
            <Link to="/">About</Link>
            <Link to="/">Masters Programs</Link>
            <Link to="/">BSC Engineering</Link>
            <Link to="/">MBA</Link>
            <Link to="/">Short Courses</Link>
            <Link to="/">Newslatters</Link>
            <Link to="/">MBA</Link>
            <Link to="/">Short Courses</Link>
            <Link to="/">Newslatters</Link>
          </div>
        </div>

        <div className="component">
          <h2>An unserer Hochschule</h2>
          <div className="links">
            <Link to="/">About</Link>
            <Link to="/">Masters Programs</Link>
            <Link to="/">BSC Engineering</Link>
            <Link to="/">MBA</Link>
            <Link to="/">Short Courses</Link>
            <Link to="/">Newslatters</Link>
          </div>
        </div>

        <div className="component">
          <h2>Unserer Hochschule</h2>
          <div className="links">
            <Link to="/">BSC Engineering</Link>
            <Link to="/">MBA</Link>
            <Link to="/">Short Courses</Link>
            <Link to="/">Newslatters</Link>
          </div>
        </div>

        <div className="component">
          <div className="contact__info">
            <h2>Contact Info</h2>
            <div className="mail">
              <AiOutlineMail size={20} />
              <h4>info@stlouiscmr.com</h4>
            </div>

            <div className="mail">
              <AiOutlinePhone size={20} />
              <h4>info@stlouiscmr.com</h4>
            </div>
          </div>

          <div className="contact__info">
            <h2 style={{ marginTop: "3rem" }}>Second Option Goes Here</h2>
            <div className="mail">
              <AiOutlineMail size={20} />
              <h4>info@stlouiscmr.com</h4>
            </div>

            <div className="mail">
              <AiOutlinePhone size={20} />
              <h4>info@stlouiscmr.com</h4>
            </div>

            <div className="mail">
              <FaMapMarkedAlt size={20} />
              <h4>info@stlouiscmr.com</h4>
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
          <Link to="/">Registration Reference</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
