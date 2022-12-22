import React, { useState } from "react";
import { Fade } from "react-reveal";

// styles
import styles from "./faculties.module.css";

// components
import Content from "../../components/content/Content";
import ProgramGrid from "../../components/program-grid/ProgramGrid";
import FacultyPopup, {
  Attrib,
} from "../../components/faculty-popup/FacultyPopup";

export const facultiesData: Attrib[] = [
  {
    title: "Faculty of Health and Biomedical Sciences.",
    desc: "The Faculty of Health and Biomedical Sciences continues to benefit from millions of FCFA investment scheme of laboratory modernisation and the development of cutting-edge teaching and research facilities, allied to the provision of clinical-based courses. Academic staff, students and external partners, including MINESUP and MINSANTE, have worked collaboratively during all phases to ensure the learning, teaching and research environment puts students first.",
    subDesc:
      "Our courses, including an extensive portfolio of CPD and internships, are co-produced with employers and have an underpinning philosophy built upon Interprofessional Learning (IPL) and research where, for example, doctors, nurses, pharmacists and paramedics work in teams for the greater good of patients. The Faculty of Health and Biomedical Sciences has the following departments and programmes:",
    hnds: [
      "Clinical Optimetry and Ophtamology",
      "Nutrition and Dietetics",
      "Radiology and Ultrasonography",
      "Physiotherapy",
      "Midwifery",
      "Pharmacy Technology",
      "Dental Therapy",
      "Medical Lab Sciences",
      "Pharmaceutical Sciences",
      "Nursing",
    ],
    bdps: [
      "Clinical Optimetry and Ophtamology",
      "Nutrition and Dietetics",
      "Radiology and Ultrasonography",
      "Physiotherapy",
      "Midwifery",
      "Pharmacy Technology",
      "Dental Therapy",
      "Medical Lab Sciences",
      "Pharmaceutical Sciences",
      "Nursing",
    ],
    mdps: [
      "Midwifery",
      "Pediatric Nursing",
      "Medical Surgical Nursing",
      "Oncology Nursing",
      "Nurse Anesthesiat",
      "Geriatric Nursing",
      "Public Health",
      "Physiotherapy",
      "Medical Imaging Technology",
    ],
    fps: ["Medical Foundation Year Programme"],
  },
  {
    title: "Faculty of Engineering and Technology.",
    desc: "The Faculty of Engineering and Technology brings together a spectrum of courses and programmes aligned to the technological needs and requirements of today. Our key areas of teaching cover a wide variety of subjects aligned to computer science and engineering.",
    subDesc:
      "We provide a range of opportunities for our students to work with employers, encouraging them to apply for an industrial placement between the second and third year of their undergraduate degree as well as to complete industry certifications to give them and edge over their peers in the very competitive job market. We offer the following programmes in our faculty of Engineering and Technology:",
    hnds: [
      "Networking and Security",
      "Telecommunication",
      "Electrical Power Systems",
      "Software Engineering",
      "Computer Hardware Maintenance",
    ],
  },
  {
    title: "Faculty of Agriculture and Natural Sciences.",
    desc: "Agriculture in today's world is an interesting and challenging industry where you can have a real impact. Our unique programmes combine the core disciplines of agricultural sciences with business management and innovative technology. Our classes include lively discussions around current issues as well as hands-on learning in the classroom, the lab and the field, giving you practical experience and a competitive advantage heading into careers on a local, national and global scale. Learn ‘hands-on’ alongside active research scientists. Not only are our lecturers leaders in their fields, they are passionate about sharing their knowledge and seeing you reach your potential.",
    subDesc:
      "Our small class sizes and friendly atmosphere provide the perfect environment for high-quality learning, networking and friendships that last beyond graduation. We offer the following programmes in our faculty",
    hnds: [
      "Animal Production",
      "Agricultural Production Technology",
      "Crop Production",
      "Agro-Pastoral Advisor",
      "Food Processing Technology",
    ],
    bdps: ["Animal Production", "Agronomy"],
  },
];

const Faculties = () => {
  const [activePanelIndex, setActivePanelIndex] = useState<number>(0);
  const [activePanel, setActivePanel] = useState(false);

  return (
    <div>
      {" "}
      {activePanel && (
        <div
          onClick={() => {
            setActivePanel(false);
          }}
        >
          <FacultyPopup
            title={facultiesData[activePanelIndex].title}
            desc={facultiesData[activePanelIndex].desc}
            subDesc={facultiesData[activePanelIndex].subDesc}
            hnds={facultiesData[activePanelIndex].hnds}
            fps={facultiesData[activePanelIndex].fps}
            bdps={facultiesData[activePanelIndex].bdps}
            mdps={facultiesData[activePanelIndex].mdps}
          />
        </div>
      )}
      <div className={styles.hero}>
        <h3>St. LOUIS UNIVERSITY INSTITUTE</h3>
        <Fade up>
          <h1>Our Faculties.</h1>
        </Fade>

        <Fade up>
          <p>
            We help students achieve academic excellence in a diverse range of
            disciplines and fields - through our Three unique Faculties. Each
            Faculty is made up of distinct departments and areas of research.
            The faculty structure enables high-quality teaching by gathering
            together academic and industry expertise, and also encourages
            interdisciplinary research across faculties.
          </p>
        </Fade>
      </div>
      <div className={styles.faculties__arena}>
        <h2>
          SLUI current operates the following faculties across her various
          campuses in the different cities
        </h2>
      </div>
      <div className="content__section">
        <div>
          <Content
            direction="LEFT"
            caption=""
            title="Faculty of Health and Biomedical Sciences."
            subText=""
            description="The Faculty of Health and Biomedical Sciences continues to benefit from millions of FCFA investment scheme of laboratory modernisation and the development of cutting-edge teaching and research facilities, allied to the provision of clinical-based courses. Academic staff, students and external partners, including MINESUP and MINSANTE, have worked collaboratively during all phases to ensure the learning, teaching and research environment puts students first."
            refLink="/"
            btnText="View More Information"
            img="/images/bio.jpg"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              setActivePanel(true);
              setActivePanelIndex(0);
            }}
          />
        </div>
      </div>
      <div className="content__section">
        <div>
          <Content
            direction="RIGHT"
            caption=""
            title="Faculty of Engineering and Technology."
            subText=""
            description="The Faculty of Engineering and Technology brings together a spectrum of courses and programmes aligned to the technological needs and requirements of today. Our key areas of teaching cover a wide variety of subjects aligned to computer science and engineering."
            refLink="/"
            btnText="View More Information"
            img="/images/eng.webp"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              setActivePanel(true);
              setActivePanelIndex(1);
            }}
          />
        </div>
      </div>
      <div className="content__section">
        <div>
          <Content
            direction="LEFT"
            caption=""
            title="Faculty of Agriculture and Natural Sciences."
            subText=""
            description="Agriculture in today's world is an interesting and challenging industry where you can have a real impact. Our unique programmes combine the core disciplines of agricultural sciences with business management and innovative technology. Our classes include lively discussions around current issues as well as hands-on learning in the classroom, the lab and the field, giving you practical experience and a competitive advantage heading into careers on a local, national and global scale."
            refLink="/"
            btnText="View More Information"
            img="/images/agri.jpg"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              setActivePanel(true);
              setActivePanelIndex(2);
            }}
          />
        </div>
      </div>
      <div className="programs_">
        <div className="headline">
          <h3>JUST THE RIGHT FIT FOR YOU.</h3>
          <h2>Exciting Programs</h2>
        </div>
        <ProgramGrid
          programs={[
            {
              image: "/images/test4.jpg",
              desc: "More and more exciting programs to be explored at our campuses.",
              label: "Bachelor",
            },
            {
              image: "/images/test5.jpg",
              desc: "Explore our best masters programs. Find a fit for yourself.",
              label: "Masters",
            },
            {
              image: "/images/test7.jpg",
              desc: "We offer a variety of short courses. Explore today!",
              label: "Short Course",
            },
            {
              image: "/images/test6.jpg",
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

export default Faculties;
