import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// styles
import "./program.css";

const Programs = () => {
  return (
    <div className="programs">
      <Link to="/hnd">
        <div>
          <div className="program">
            <h2>HND</h2>
            <h3>18 Study Programmes</h3>
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
            <h2>Bachelor</h2>
            <h3>9 Study Programmes</h3>
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
            <h2>Master</h2>
            <h3>9 Study Programmes</h3>
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
            <h2>Short Course</h2>
            <h3>1 Short Course</h3>
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
