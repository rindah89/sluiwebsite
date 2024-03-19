import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

// styles
import styles from "./faculties.module.css";

// components
import Content from "../../components/content/Content";
import ProgramGrid from "../../components/program-grid/ProgramGrid";
import FacultyPopup, {
  Attrib,
} from "../../components/faculty-popup/FacultyPopup";
import { programmesEN, programmesFR } from "../landing/Landing";
import Membership from "../../components/membership/Membership";
import { useTranslation } from "react-i18next";
import { getProgrammes } from "../../redux/reducers/app";

const FR = "fr";

export const facultiesDataFR: Attrib[] = [
  {
    title: "Faculté de la Santé et des Sciences Biomédicales.",
    desc: "La Faculté des sciences de la santé et des sciences biomédicales continue de bénéficier d'un programme d'investissement de plusieurs millions de FCFA pour la modernisation des laboratoires et le développement d'installations d'enseignement et de recherche de pointe, ainsi que pour la mise en place de cours cliniques. Le personnel académique, les étudiants et les partenaires externes, y compris le MINESUP et le MINSANTE, ont travaillé en collaboration durant toutes les phases pour s'assurer que l'environnement d'apprentissage, d'enseignement et de recherche place les étudiants au premier plan.",
    subDesc:
      "Nos cours, y compris un vaste portefeuille de formation continue et de stages, sont coproduits avec les employeurs et reposent sur une philosophie fondée sur l'apprentissage interprofessionnel (IPL) et la recherche, selon laquelle, par exemple, les médecins, les infirmières, les pharmaciens et les auxiliaires médicaux travaillent en équipe pour le plus grand bien des patients. La faculté des sciences de la santé et des sciences biomédicales comprend les départements et programmes suivants:",
    programs: [
      {
        title: "Programmes de Diplôme National Supérieur (HND), 3 Ans",
        allCampuses: false,
        campuses: [
          {
            title: "Campus de Bamenda & Ndu",
            programs: [
              "Physiothérapie",
              "Sages-femmes",
              "Technologie de la Pharmacie",
              "Thérapie dentaire",
              "Sciences de Laboratoire Médical",
              "Technologie de l'Imagerie Médicale",
              "Soins Infirmiers",
            ],
          },
          {
            title: "Campus de Douala & Yaounde",
            programs: [
              "Physiothérapie",
              "Sages-femmes",
              "Technologie de la Pharmacie",
              "Sciences de Laboratoire Médical",
              "Technologie de l'Imagerie Médicale",
              "Soins Infirmiers",
              "Nutrition et Diététique (Campus de Bonaberi)",
            ],
          },
        ],
      },
      {
        title: "Brevet Des Techniciens Superiers (BTS) 3 Ans",
        allCampuses: false,
        campuses: [
          {
            title: "Douala, Campus Bounamoussadi UNIQUEMENT",
            programs: ["Soins Infirmieres", "Sage Femmes"],
          },
        ],
      },
      {
        title: "Programme de Licence Professionnelle 1 An",
        allCampuses: true,
        campuses: [
          {
            title: "Hybride : Cours Magistraux sur Place et En Ligne",
            programs: [
              "Physiothérapie",
              "Sages-femmes",
              "Technologie de la Pharmacie",
              "Thérapie Dentaire",
              "Sciences de Laboratoire Médical",
              "Imagerie Médicale Diagnostique et Radiothérapie",
              "Soins Infirmiers",
              "Sciences Pharmaceutiques",
            ],
          },
          {
            title: "Campus de Bamenda",
            programs: [
              "Soins Infirmiers",
              "Sages-femmes et Sciences de Laboratoire Médical",
            ],
          },
        ],
      },
      {
        title: "Programme de Master Professionnel (2 ans)",
        allCampuses: true,
        campuses: [
          {
            title:
              "Hybride : cours sur place et en ligne sur le campus de Douala SEULEMENT",
            programs: [
              "Sages-femmes",
              "Santé Publique",
              "Physiothérapie",
              "Technologie de l'Imagerie Médicale",
              "Soins Infirmiers Pédiatriques",
              "Soins Infirmiers en Oncologie",
              "Soins Infirmiers Médico-chirurgicaux",
              "Infirmière Anesthésiste",
              "Soins Infirmiers Gériatriques",
            ],
          },
        ],
      },
      {
        title: "Programmes Internationaux",
        allCampuses: false,
        campuses: [
          {
            title:
              "Université Mahsa en Malaisie, Université américaine de Goerge Town, GUYANA",
            programs: ["Médecine", "Dentisterie et Pharmacie"],
          },
        ],
      },
    ],
  },
  {
    title: "Faculté d'Tngénierie et De Technologie",
    desc: "La Faculté d'Ingénierie et De Technologie propose un éventail de cours et de programmes adaptés aux besoins et aux exigences technologiques d'aujourd'hui. Nos principaux domaines d'enseignement couvrent une grande variété de sujets liés à l'informatique et à l'ingénierie.",
    subDesc:
      "Nous offrons à nos étudiants toute une série de possibilités de travailler avec des employeurs, en les encourageant à demander un stage industriel entre la deuxième et la troisième année de leur diplôme de premier cycle, ainsi qu'à obtenir des certifications industrielles qui leur donneront une longueur d'avance sur leurs pairs sur le marché très concurrentiel de l'emploi. Notre faculté d'ingénierie et de technologie propose les programmes suivants :",
    programs: [
      {
        title: "Diplôme National Supérieur (HND) 2 Ans",
        allCampuses: false,
        campuses: [
          {
            title: "Douala (campus de Bonaberi et Bonamoussadi)",
            programs: [
              "Réseau et Sécurité",
              "Télécommunications",
              "Systèmes d'Alimentation Électrique",
              "Génie Logiciel",
              "Maintenance du Matériel Informatique",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Faculté d'Agriculture et de Sciences Naturelles",
    desc: "Dans le monde d'aujourd'hui, l'agriculture est un secteur intéressant et stimulant où vous pouvez avoir un impact réel. Nos programmes uniques combinent les disciplines fondamentales des sciences agricoles avec la gestion d'entreprise et les technologies innovantes. Nos cours comprennent des discussions animées sur des questions d'actualité ainsi qu'un apprentissage pratique en classe, en laboratoire et sur le terrain, ce qui vous donne une expérience pratique et un avantage concurrentiel pour une carrière à l'échelle locale, nationale et mondiale. Apprenez 'sur le tas' aux côtés de chercheurs scientifiques actifs. Nos conférenciers sont non seulement des leaders dans leur domaine, mais ils sont également passionnés par le partage de leurs connaissances et par le fait de vous voir atteindre votre potentiel.",
    subDesc:
      "Nos classes de petite taille et notre atmosphère conviviale constituent l'environnement idéal pour un apprentissage de qualité, la création de réseaux et des amitiés qui durent au-delà de l'obtention du diplôme. Notre faculté propose les programmes suivants",
    programs: [
      {
        title: "Diplôme National Supérieur (HND) 2 Ans",
        allCampuses: false,
        campuses: [
          {
            title: "Douala, Campus Bonaberi UNIQUEMENT",
            programs: [
              "Production Végétale",
              "Conseiller Agro-Pastoral",
              "Technologie de Transformation des Aliments",
            ],
          },
        ],
      },
      {
        title:
          "Programmes de licence (4 ans pour les titulaires d'un 'A-level', 3 ans pour les titulaires d'un HND)",
        allCampuses: false,
        campuses: [
          {
            title: "Douala, Campus Bonaberi UNIQUEMENT",
            programs: ["Bsc en Production Animale", "Bsc en Agronomie"],
          },
        ],
      },
    ],
  },
];

export const facultiesDataEN: Attrib[] = [
  {
    title: "Faculty of Health and Biomedical Sciences.",
    desc: "The Faculty of Health and Biomedical Sciences continues to benefit from millions of FCFA investment scheme of laboratory modernisation and the development of cutting-edge teaching and research facilities, allied to the provision of clinical-based courses. Academic staff, students and external partners, including MINESUP and MINSANTE, have worked collaboratively during all phases to ensure the learning, teaching and research environment puts students first.",
    subDesc:
      "Our courses, including an extensive portfolio of CPD and internships, are co-produced with employers and have an underpinning philosophy built upon Interprofessional Learning (IPL) and research where, for example, doctors, nurses, pharmacists and paramedics work in teams for the greater good of patients. The Faculty of Health and Biomedical Sciences has the following departments and programmes:",
    programs: [
      {
        title: "Higher National Diploma (HND) programes, 3 Years",
        allCampuses: false,
        campuses: [
          {
            title: "Bamenda & Ndu Campuses",
            programs: [
              "Physiotherapy",
              "Midwifery",
              "Pharmacy Technology",
              "Dental Therapy",
              "Medical Lab Sciences",
              "Medical Imaging Technology",
              "Nursing",
            ],
          },
          {
            title: "Douala & Yaounde Campuses",
            programs: [
              "Physiotherapy",
              "Midwifery",
              "Pharmacy Technology",
              "Dental Therapy",
              "Medical Lab Sciences",
              "Medical Imaging Technology",
              "Nursing",
              "Nutrition and Dietetics (Bondaberi Campus)",
            ],
          },
        ],
      },
      {
        title: "Brevet Des Techniciens Superiers (BTS) 3 Ans",
        allCampuses: false,
        campuses: [
          {
            title: "Douala, Bounamoussadi Campus ONLY",
            programs: ["Soins Infirmieres", "Sage Femmes"],
          },
        ],
      },
      {
        title: "Professional Bachelors Program 1 Year",
        allCampuses: true,
        campuses: [
          {
            title: "Hybrid: Onsite & Online Lectures",
            programs: [
              "Physiotherapy",
              "Midwifery",
              "Pharmacy Technology",
              "Dental Therapy",
              "Medical Lab Sciences",
              "Medical Diagnostic Imaging and Radiation Therapy",
              "Nursing",
              "Pharmaceutical Sciences",
            ],
          },
          {
            title: "Bamenda Campus",
            programs: ["Nursing", "Midwifery & Medical Laboratory Scieces"],
          },
        ],
      },
      {
        title: "Professional Masters Program (2 Year)",
        allCampuses: true,
        campuses: [
          {
            title: "Hybrid: onsite & Online Lectures in Douala Campus ONLY",
            programs: [
              "Midwifery",
              "Public Health",
              "Physiotherapy",
              "Medical Imaging Technology",
              "Pediatric Nursing",
              "Oncology Nursing",
              "Medical Surgical Nursing",
              "Nurse Anesthesia",
              "Geriatric Nursing",
            ],
          },
        ],
      },
      {
        title: "International Programmes",
        allCampuses: false,
        campuses: [
          {
            title:
              "Mahsa University in Malysia, Goerge Town American Univeristy, GUYANA",
            programs: ["Medicine", "Dentistry & Pharmacy"],
          },
        ],
      },
    ],
  },
  {
    title: "Faculty of Engineering & Technology",
    desc: "The Faculty of Engineering and Technology brings together a spectrum of courses and programmes aligned to the technological needs and requirements of today. Our key areas of teaching cover a wide variety of subjects aligned to computer science and engineering.",
    subDesc:
      "We provide a range of opportunities for our students to work with employers, encouraging them to apply for an industrial placement between the second and third year of their undergraduate degree as well as to complete industry certifications to give them and edge over their peers in the very competitive job market. We offer the following programmes in our faculty of Engineering and Technology:",
    programs: [
      {
        title: "Higher National Diploma (HND) 2 Years",
        allCampuses: false,
        campuses: [
          {
            title: "Douala (Bonaberi & Bonamoussadi campuses)",
            programs: [
              "Network & Security",
              "Telecommunication",
              "Electrical Power Systems",
              "Software Engieering",
              "Computer Hardware Maintenance",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Faculty of Agriculture and Natural Sciences",
    desc: "Agriculture in today's world is an interesting and challenging industry where you can have a real impact. Our unique programmes combine the core disciplines of agricultural sciences with business management and innovative technology. Our classes include lively discussions around current issues as well as hands-on learning in the classroom, the lab and the field, giving you practical experience and a competitive advantage heading into careers on a local, national and global scale. Learn ‘hands-on’ alongside active research scientists. Not only are our lecturers leaders in their fields, they are passionate about sharing their knowledge and seeing you reach your potential.",
    subDesc:
      "Our small class sizes and friendly atmosphere provide the perfect environment for high-quality learning, networking and friendships that last beyond graduation. We offer the following programmes in our faculty",
    programs: [
      {
        title: "Higher National Diploma (HND) 2 Years",
        allCampuses: false,
        campuses: [
          {
            title: "Douala, Bonaberi Campus ONLY",
            programs: [
              "Crop production",
              "Argro-Pastoral Adivsor",
              "Food Processing Technology",
            ],
          },
        ],
      },
      {
        title:
          'Bachelor Degree Programmes (4 Years for "A-level" holders, 3 Years for HND holders)',
        allCampuses: false,
        campuses: [
          {
            title: "Douala, Bonaberi Campus ONLY",
            programs: ["Animal Production", "Agronomy"],
          },
        ],
      },
    ],
  },
];

const Faculties = () => {
  const [activePanelIndex, setActivePanelIndex] = useState<number>(0);
  const [activePanel, setActivePanel] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { t, i18n } = useTranslation();

  const facultiesData =
    i18n.language === FR ? facultiesDataFR : facultiesDataEN;

  // const programmes = i18n.language === FR ? programmesFR : programmesEN;
  const [programmes, setProgrammes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlerGetProgrammes = async () => {
    try {
      setLoading(true);
      await getProgrammes()
        .then((res: any) => {
          if (res.status === 200) {
            setProgrammes(res.data);
            setLoading(false);
            return;
          }
          setLoading(false);
        })
        .catch((err: any) => {
          console.error(err);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handlerGetProgrammes();
  }, []);

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
            programs={facultiesData[activePanelIndex].programs}
          />
        </div>
      )}
      <div className={styles.hero}>
        <h3>{t("faculties.name")}</h3>
        <Fade up>
          <h1>{t("faculties.our")}</h1>
        </Fade>

        <Fade up>
          <p>{t("faculties.des")}</p>
        </Fade>
      </div>
      <div className={styles.faculties__arena}>
        <h2>{t("faculties.tag")}</h2>
      </div>
      <div className="content__section">
        <div>
          <Content
            direction="LEFT"
            caption=""
            title={t("faculties.fhbs")}
            subText=""
            description={t("faculties.fhbs_desc")}
            refLink="/"
            btnText={t("faculties.view_more")}
            img="/pics/optimized/ivs-6804.webp"
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
            title={t("faculties.fet")}
            subText=""
            description={t("faculties.fet_desc")}
            refLink="/"
            btnText={t("faculties.view_more")}
            img="/pics/optimized/ivs-7501.webp"
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
            title={t("faculties.fans")}
            subText=""
            description={t("faculties.fans_desc")}
            refLink="/"
            btnText={t("faculties.view_more")}
            img="/pics/optimized/ivs-6903.webp"
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
          <h3>J{t("faculties.just_fit")}</h3>
          <h2>{t("faculties.exciting_programs")}</h2>
        </div>
        <ProgramGrid programs={programmes} />
      </div>
      <div className="programs_">
        <div className="headline">
          <h2>{t("faculties.membership_partnership")}</h2>
        </div>
        <Membership />
      </div>
    </div>
  );
};

export default Faculties;
