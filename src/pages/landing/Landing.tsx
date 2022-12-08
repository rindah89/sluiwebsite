import React from "react";

// styles
import "./landing.css";

// components
import Programs from "../../components/programs/Programs";
import Content from "../../components/content/Content";
import ContentWithBg from "../../components/content-with-bg/ContentWithBg";
import ProgramGrid from "../../components/program-grid/ProgramGrid";

const Landing = () => {
  return (
    <div className="landing">
      <div className="hero">
        <h3>SRH BERLIN UNIVERSITY OF APPLIED SCIENCES</h3>
        <h1>Dein Ziel. Dein Studium.</h1>

        <Programs />
      </div>
      <div className="about">
        <div className="desc">
          <h2>Wir gestalten Zukunft</h2>
          <h4>
            Sechs Schools in drei Städten: Berlin, Dresden und Hamburg. Lehrende
            und Studierende aus über 100 Nationen in 70 akkreditierten deutsch-
            und englischsprachigen Studienprogrammen. Vielfältige Möglichkeiten
            in Management und Entrepreneurship, Medien- und Kreativwirtschaft,
            Technologie und IT, Musik, Design, Film und Text.
          </h4>
        </div>
      </div>

      <div className="content__section">
        <Content
          direction="RIGHT"
          caption="STUDIEREN NACH DEM CORE-PRINZIP"
          title="Ein Studium, bei dem sich alles um dich dreht"
          subText="Studiere nach dem CORE-Prinzip! Praxisorientiertes Lernen in kleinen Teams, schrittweiser Kompetenzerwerb in 5 Wochen-Sprints und persönliche Betreuung durch Dozenten."
          description="Reinen Frontalunterricht gibt es an der SRH nicht. Stattdessen werden unsere Dozenten für dich zu individuellen Lerncoaches. Gemeinsam erarbeitet ihr nicht nur Fachwissen, sondern feilt auch an euren Soft und Hard Skills. Dafür setzen wir auf eine direkte Kommunikation. Persönliche Beratung, digitaler Austausch und fortlaufendes Feedback sind uns wichtig."
          refLink="/"
          btnText="Find Buddy"
          img="/images/landing2.webp"
        />
      </div>

      <div className="content__section">
        <Content
          direction="LEFT"
          caption="STUDIEREN NACH DEM CORE-PRINZIP"
          title="Ein Studium, bei dem sich alles um dich dreht"
          subText="Studiere nach dem CORE-Prinzip! Praxisorientiertes Lernen in kleinen Teams, schrittweiser Kompetenzerwerb in 5 Wochen-Sprints und persönliche Betreuung durch Dozenten."
          description="Reinen Frontalunterricht gibt es an der SRH nicht. Stattdessen werden unsere Dozenten für dich zu individuellen Lerncoaches. Gemeinsam erarbeitet ihr nicht nur Fachwissen, sondern feilt auch an euren Soft und Hard Skills. Dafür setzen wir auf eine direkte Kommunikation. Persönliche Beratung, digitaler Austausch und fortlaufendes Feedback sind uns wichtig."
          refLink="/"
          btnText="Find Buddy"
          img="/images/landing3.webp"
        />
      </div>

      <div className="content__section">
        <ContentWithBg
          direction="RIGHT"
          caption="STUDIEREN NACH DEM CORE-PRINZIP"
          title="Ein Studium, bei dem sich alles um dich dreht"
          subText="Studiere nach dem CORE-Prinzip! Praxisorientiertes Lernen in kleinen Teams, schrittweiser Kompetenzerwerb in 5 Wochen-Sprints und persönliche Betreuung durch Dozenten."
          description="Reinen Frontalunterricht gibt es an der SRH nicht. Stattdessen werden unsere Dozenten für dich zu individuellen Lerncoaches. Gemeinsam erarbeitet ihr nicht nur Fachwissen, sondern feilt auch an euren Soft und Hard Skills. Dafür setzen wir auf eine direkte Kommunikation. Persönliche Beratung, digitaler Austausch und fortlaufendes Feedback sind uns wichtig."
          refLink="/"
          btnText="Find Buddy"
          img="/images/landing4.webp"
        />
      </div>

      <div className="programs_">
        <div className="headline">
          <h3>JETZT DURCHSTARTEN</h3>
          <h2>Exciting Programs 🚀</h2>
        </div>
        <ProgramGrid
          programs={[
            {
              image: "/images/landing.webp",
              desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              label: "Bachelor",
            },
            {
              image: "/images/landing2.webp",
              desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              label: "Masters",
            },
            {
              image: "/images/landing3.webp",
              desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              label: "Short Course",
            },
            {
              image: "/images/landing4.webp",
              desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              label: "MBA",
            },
          ]}
        />
      </div>

      <div className="programs_">
        <div className="headline">
          <h2>Our Partners & Investors</h2>
        </div>
        <div className="logos">
          <img src="/logos/logo.png" alt="logo" />
          <img src="/logos/logo3.png" alt="logo" />
          <img src="/logos/logo.png" alt="logo" />
          <img src="/logos/logo3.png" alt="logo" />
          <img src="/logos/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
