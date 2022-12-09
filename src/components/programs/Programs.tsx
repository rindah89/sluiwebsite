import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

// styles
import "./program.css";

const Programs = () => {
  return (
    <div className="programs">
      <div>
        <div className="program">
          <h2>HND</h2>
          <h3>18 Study Programs</h3>
        </div>
        <div className="icon">
          <AiOutlineArrowRight size={30} />
        </div>
        <div className="icon__window">
          <BsArrowUpRight size={20} />
        </div>
      </div>

      <div>
        <div className="program">
          <h2>Bachelor</h2>
          <h3>9 Study Programs</h3>
        </div>
        <div className="icon__window">
          <BsArrowUpRight size={20} />
        </div>
        <div className="icon">
          <AiOutlineArrowRight size={30} />
        </div>
      </div>

      <div>
        <div className="program">
          <h2>Master</h2>
          <h3>9 Study Programs</h3>
        </div>
        <div className="icon__window">
          <BsArrowUpRight size={20} />
        </div>
        <div className="icon">
          <AiOutlineArrowRight size={30} />
        </div>
      </div>

      <div>
        <div className="program">
          <h2>Foundation</h2>
          <h3>1 Foundation Course</h3>
        </div>
        <div className="icon__window">
          <BsArrowUpRight size={20} />
        </div>
        <div className="icon">
          <AiOutlineArrowRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Programs;
