/* eslint-disable */

import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaTiktok,
  FaFacebook,
  FaMapMarkerAlt,
} from "react-icons/fa";

// styles
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="components">
        <div className="component">
          <h2>{t("footer.about_studies")}</h2>
          <div className="links">
            <Link to="/masters">{t("footer.masters")}</Link>
            <Link to="/bachelors">{t("footer.bachelors")}</Link>
            <Link to="/hnd">{t("footer.hnd")}</Link>
            <Link to="/foundation">{t("footer.short_courses")}</Link>
            <Link to="/application-and-admission">
              {t("footer.admission_processes")}
            </Link>
            <Link to="/">{t("footer.advisory_board")}</Link>
          </div>
        </div>

        <div className="component">
          <h2>{t("footer.institution")}</h2>
          <div className="links">
            <Link to="/about">{t("footer.about")}</Link>
            <Link to="/why-us">{t("footer.why")}</Link>
            <Link to="/">{t("footer.universities")}</Link>
            <Link to="/leadership-team">{t("footer.admin_team")}</Link>
            <Link to="/facilities">{t("footer.services")}</Link>
          </div>
        </div>

        <div className="component">
          <h2>{t("footer.faq")}</h2>
          <div className="links">
            <Link to="/">{t("footer.student_benefits")}</Link>
            <Link to="/">{t("footer.sport_activities")}</Link>
            <Link to="/">{t("footer.graduation_requirements")}</Link>
            <Link to="/">{t("footer.rules")}</Link>
          </div>
        </div>

        <div className="component">
          <div className="contact__info">
            <h2>{t("footer.contact")}</h2>
            <Link to="mailto:info@slui.org" className="custom-link">
              <div className="mail">
                <AiOutlineMail size={20} />
                <h4>info@slui.org</h4>
              </div>
            </Link>

            <div className="mail">
              <AiOutlinePhone size={20} />
              <h4>(+237) 678-425-922 / 671-710-928</h4>
            </div>
          </div>

          <div className="contact__info">
            <h2 style={{ marginTop: "3rem" }}>{t("footer.location")}</h2>
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
            <a
              href="https://www.linkedin.com/in/st-louis-university-institute-cameroon-450b98248"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/institute_louis?t=DPelWOEniRgQwXjpIjG-Zg&s=09"
              target="_blank"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.facebook.com/stlouishigheruniveristy"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a href="http://tiktok.com/@st.louisuniversity" target="_blank">
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="refs">
          <h4>&copy; {new Date().getFullYear()}</h4>
          <Link to="/">{t("footer.privacy")}</Link>
          <Link to="/">{t("footer.terms")}</Link>
          <Link to="/">{t("footer.cookie")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
