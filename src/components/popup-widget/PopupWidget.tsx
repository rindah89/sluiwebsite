import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";

// styles
import "./popup.css";
import { useTranslation } from "react-i18next";

type Props = {
  show: boolean;
  toggleState: () => void;
};

const PopupWidget: React.FC<Props> = ({ show, toggleState }) => {
  // const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className={`popup ${show ? "show" : null}`}>
      <div className="popup__content">
        <div className="title">
          {/* <h2>{t("header_popup.studies")}</h2> */}
          <div></div>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              toggleState();
            }}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="popup__text">
          <div className="links">
            <div className="pic">
              <img src="/images/logo_dark.webp" alt="slui logo" />
            </div>
            <a
              href="https://drive.google.com/file/d/10mGyssnKFADEbhsUjY_UG7caT4UDRzu7/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              {t("header_popup.prospectus")}
            </a>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/application-and-admission"
            >
              {t("header_popup.hta")}
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/fees"
            >
              {t("header_popup.fees")}
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/scholarships"
            >
              {t("header_popup.scholarship")}
            </Link>
            <a
              onClick={() => {
                toggleState();
              }}
              href="https://drive.google.com/file/d/1YeHgdwW60XqlO07ixf__0IEhSPKj-rGH/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              {t("header_popup.student_guide")}
            </a>
          </div>

          <div className="ref">
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/why-us"
            >
              {t("header_popup.yslui")}
              <span>
                <AiOutlineArrowRight size={30} />
              </span>
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/our-values"
            >
              {t("header_popup.our_values")}
              <span>
                <AiOutlineArrowRight size={30} />
              </span>
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/facilities"
            >
              {t("header_popup.faculties")}
              <span>
                <AiOutlineArrowRight size={30} />
              </span>
            </Link>

            <div className="other">
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/handbook"
              >
                {t("header_popup.handbook")}
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/core-principles"
              >
                {t("header_popup.core_principles")}
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/leadership-team"
              >
                {t("header_popup.leadership")}
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/alumni"
              >
                {t("header_popup.alumni")}
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/news-and-events"
              >
                {t("header_popup.news_events")}
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/fill-form"
              >
                {t("header_popup.contact")}
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                className="hide"
                to="/"
              >
                {t("header.about")}
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                className="hide"
                to="/"
              >
                {t("header.programmes")}
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                className="hide"
                to="/our-faculties"
              >
                {t("header.faculties")}
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                className="hide"
                to="/our-campuses"
              >
                {t("header.campuses")}
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                className="hide"
                to="/"
              >
                {t("header_popup.short_courses")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupWidget;
