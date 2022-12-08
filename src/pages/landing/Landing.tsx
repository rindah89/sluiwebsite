import React from "react";

// components
import Programs from "../../components/programs/Programs";
import Content from "../../components/content/Content";

// styles
import "./landing.css";
import ContentWithBg from "../../components/content-with-bg/ContentWithBg";

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
    </div>
  );
};

export default Landing;
