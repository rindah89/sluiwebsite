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
        <h3>St. LOUIS UNIVERSITY INSTITUDE</h3>
        <h1>Character and Excellence.</h1>

        <Programs />
      </div>
      <div className="about">
        <div className="desc">
          <h2>We Shape The Future.</h2>
          <h4>
            Three Faculties and five campuses in four cities: Douala, Yaounde,
            Bamenda and Ndu. Lecturers and students from all over Cameroon and
            abroad in accredited English-language study programmes. Diverse
            opportunities in Biomedical and health sciences, Engineering and
            technology, Agriculture and natural sciences.
          </h4>
        </div>
      </div>

      <div className="content__section">
        <Content
          direction="RIGHT"
          caption="THE SLUI APPROACH - OUR STUDY CONCEPT!"
          title="You are the centre of your studies"
          subText="Study according to the CORE Principle! Hands-on learning in small teams, step-by-step skill aquisition in field work and semester internships as well as individual support from lecturers."
          description="There is no more lecture-centred teaching at SLUI. Instead, our instructors become personal learning coaches for you. Not only will you develop specialist knowledge together, but also work on improving your soft and hard skills. To do this, we rely on direct communication. Individual advice, digital exchange and continuous feedback are important to us as well as club activities such as the SLUI Toastmasters club."
          refLink="/"
          btnText="Our Core Principles"
          img="/images/landing2.webp"
        />
      </div>

      <div className="content__section">
        <Content
          direction="LEFT"
          caption="THE SLUI APPROACH - OUR STUDY CONCEPT!"
          title="An engaging learning experience."
          subText="Study according to the CORE Principle! Hands-on learning in small teams, step-by-step skill aquisition in field work and semester internships as well as individual support from lecturers."
          description="There is no more lecture-centred teaching at SLUI. Instead, our instructors become personal learning coaches for you. Not only will you develop specialist knowledge together, but also work on improving your soft and hard skills. To do this, we rely on direct communication. Individual advice, digital exchange and continuous feedback are important to us as well as club activities such as the SLUI Toastmasters club."
          refLink="/"
          btnText="Our Core Principles"
          img="/images/landing3.webp"
        />
      </div>

      <div className="content__section">
        <ContentWithBg
          direction="RIGHT"
          caption="FIND YOUR SLUI BUDDY"
          title="Chat with our Staff and Students"
          subText=""
          description="Did you want first-hand information? Our staff & students are happy to share their experiences with you, tell you about their courses, their projects and student life in Douala, Yaounde, Bamenda & Ndu."
          refLink="/"
          btnText="Find Your Buddy"
          img="/images/landing4.webp"
        />
      </div>

      <div className="programs_">
        <div className="headline">
          <h3>JUST THE RIGHT FIT FOR YOU.</h3>
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
          <img src="/logos/logo.webp" alt="logo" />
          <img src="/logos/logo2.webp" alt="logo" />
          <img src="/logos/logo3.webp" alt="logo" />
          <img src="/logos/logo4.webp" alt="logo" />
          <img src="/logos/logo5.webp" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
