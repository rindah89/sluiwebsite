import React from "react";

// stylesheet
import styles from "./buddy.module.css";

// components
import Content from "../../components/content/Content";

const FindBuddy = () => {
  return (
    <div className={styles.wrapper}>
      <div className="content__section">
        <Content
          direction="RIGHT"
          caption="Find Your SLUI Buddy"
          title="Chat with our staff & students"
          subText=""
          description="Do you want first-hand information? Our staff & students are happy to share their experiences with you, tell you about their courses, their projects and student life in Douala, Yaounde, Bamenda & Ndu."
          refLink="/core-principle"
          btnText="See All Buddies"
          img="/images/landing2.webp"
        />
      </div>

      <div className={styles.filter}>
        <div className={styles.filter__options}>
          <button>Students</button>
          <button>Admission Advicers</button>
          <button>Administrator</button>
          <button>Alumni</button>
        </div>
      </div>
    </div>
  );
};

export default FindBuddy;
