import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// styles
import "./program.css";
import { useTranslation } from "react-i18next";

const Programs = () => {
  const { t } = useTranslation();
  return (
    <div className="programs">
      <Link to="/hnd">
        <div>
          <div className="program">
            <h2>{t("programs.hnd")}</h2>
            <h3>18 {t("programs.study_programmes")}</h3>
          </div>
          <div className="icon">
            <AiOutlineArrowRight color="#000" size={30} />
          </div>
          <div className="icon__window">
            <BsArrowUpRight color="#000" size={20} />
          </div>
        </div>
      </Link>

      <Link to="/bachelors">
        <div>
          <div className="program">
            <h2>{t("programs.bachelors")}</h2>
            <h3>9 {t("programs.study_programmes")}</h3>
          </div>
          <div className="icon__window">
            <BsArrowUpRight color="#000" size={20} />
          </div>
          <div className="icon">
            <AiOutlineArrowRight color="#000" size={30} />
          </div>
        </div>
      </Link>

      <Link to="/masters">
        <div>
          <div className="program">
            <h2>{t("programs.masters")}</h2>
            <h3>9 {t("programs.study_programmes")}</h3>
          </div>
          <div className="icon__window">
            <BsArrowUpRight color="#000" size={20} />
          </div>
          <div className="icon">
            <AiOutlineArrowRight color="#000" size={30} />
          </div>
        </div>
      </Link>

      <Link to="/foundation">
        <div>
          <div className="program">
            <h2>{t("programs.short_course")}</h2>
            <h3>1 {t("programs.short_course")}</h3>
          </div>
          <div className="icon__window">
            <BsArrowUpRight color="#000" size={20} />
          </div>
          <div className="icon">
            <AiOutlineArrowRight color="#000" size={30} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Programs;
