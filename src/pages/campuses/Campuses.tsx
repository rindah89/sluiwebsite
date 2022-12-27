import React from "react";
import { Fade } from "react-reveal";

// styles
import styles from "./campus.module.css";

// components
import CampusCard from "../../components/campus-card/CampusCard";
import GridLayout from "../../components/grid/Grid";
import ProgramGrid from "../../components/program-grid/ProgramGrid";

const Campuses = () => {
  return (
    <div className="landing">
      <div className={styles.hero}>
        <h3>ST. LOUIS UNIVERSITY INSTITUTE</h3>
        <h1>Our Campuses.</h1>

        <p>
          ST. LOUIS UNIVERSITY INSTITUTE has five campuses. Our campuses are at
          the heart of four exciting cities; Douala, Yaounde and Bamenda.
          Combine a city lifestyle with tranquil surroundings for a unique study
          experience. With thousands of student and city life right on your
          doorstep, there's never a dull moment.
        </p>
      </div>

      <div className={styles.campuses}>
        <GridLayout columns={2} gap={3}>
          <CampusCard
            image="/images/bonaberi_campus.jpg"
            name="Bonaberi"
            title="In Bonaberi, you'll find our striking, modern, brand new campus in the city's University and Innovation Quarter. Located opposite Nestle at the entrance to the city of Douala, the economic hub of Cameroon."
            refLink="/"
          />

          <CampusCard
            image="/images/bonamousaddi.webp"
            name="Bonamoussadi"
            title="Our Bonamoussadi campus is located at the entrance of the vibrant Bonamoussadi quarter which is a blend of residential and business. SLUI is situated an the giant building on the right as you make your way into Bonamoussadi known as rond point maeture."
            refLink="/"
          />

          <CampusCard
            image="/images/landing4.webp"
            name="Yaounde"
            title="SLUI Yaounde campus also know as Gandhi i located at Despot de bois - Simbock quarter. A peaceful and residential area providing you with the perfect environment for studies."
            refLink="/"
          />

          <CampusCard
            image="/images/bamenda.jpeg"
            name="Bamenda"
            title="St.Louis University Institute Bamenda campus is situated at Mile 3 Nkwen. It is the birth place of SLUI. This area of the beautiful city of Bamenda is know for it serenity and accessibility harboring majority of the student population in Bamenda."
            refLink="/"
          />

          <CampusCard
            image="/images/landing3.webp"
            name="Ndu"
            title="Our Ndu campus is an extension of our Bamenda main campus. Our campus in Ndu is located Opposite the Ndu national gendarmerie, Kaka in the North West Region of Cameroon.It lies at the northeast edge of the Bamenda Grassfields, on the eastern arc of the Ring Road. It is the highest elevation town in Cameroon."
            refLink="/"
          />
        </GridLayout>
      </div>

      <div className="programs_">
        <div className="headline">
          <h3>JUST THE RIGHT FIT FOR YOU.</h3>
          <h2>Exciting Programs</h2>
        </div>
        <ProgramGrid
          programs={[
            {
              image: "/images/test4.JPG",
              desc: "More and more exciting programs to be explored at our campuses.",
              label: "Bachelor",
            },
            {
              image: "/images/test5.JPG",
              desc: "Explore our best masters programs. Find a fit for yourself.",
              label: "Masters",
            },
            {
              image: "/images/test7.JPG",
              desc: "We offer a variety of short courses. Explore today!",
              label: "Short Course",
            },
            {
              image: "/images/test6.JPG",
              desc: "HND programs are just so exciting start a career in one of these programmes.",
              label: "HND",
            },
          ]}
        />
      </div>

      <div className="programs_">
        <div className="headline">
          <h2>Memberships and Partnerships</h2>
        </div>
        <div className="logos">
          <Fade up delay={100}>
            <img src="/logos/logo.webp" alt="logo" />
          </Fade>
          <Fade up delay={300}>
            <img src="/logos/logo2.webp" alt="logo" />
          </Fade>
          <Fade up delay={500}>
            <img src="/logos/logo3.webp" alt="logo" />
          </Fade>
          <Fade up delay={700}>
            <img src="/logos/logo4.webp" alt="logo" />
          </Fade>
          <Fade up delay={900}>
            <img src="/logos/logo5.webp" alt="logo" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Campuses;
