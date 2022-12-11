import React from "react";

// styles
import styles from "./generalpull.module.css";

// imports
import ProgramGrid from "../program-grid/ProgramGrid";

const GeneralPull = () => {
  return (
    <div className={styles.general__pull}>
      <div className="programs_">
        <div className="headline">
          <h2>Still Undecided?</h2>
        </div>
        <ProgramGrid
          programs={[
            {
              image: "/images/landing.webp",
              desc: "More and more stuffs to know about SLUI.",
              label: "Why SLUI",
            },
            {
              image: "/images/landing2.webp",
              desc: "Get more insights on our core principles, what drives us to produce the results we produce.",
              label: "Our Core Principles",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default GeneralPull;
