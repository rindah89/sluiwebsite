import React, { FC, useEffect } from "react";

// styles
import styles from "./campus.module.css";
import ProgramCard from "../../components/programs/ProgramCard";
import { useTranslation } from "react-i18next";

const campusesEN = [
  {
    name: "BONABERI CAMPUS",
    tag: "In Bonaberi, you'll find our striking, modern, brand-new campus in the city's University and Innovation Quarter. Located opposite Nestle at the entrance",
    body: "Located in Douala with its major international seaport, Douala International Airport (DLA), it is the commercial and economic capital of Cameroon and the entire CEMAC region composing of Gabon, Congo, Chad, Equitorial Guinea, Central African Republic and Cameroon. Cameroon is home to nearly 250 languages and dialects. The local indigenous language is Duala, which shares its name with the city. French and English are the official languages, but Douala is primarily francophone. Douala sees plentiful rainfall during the course of the year, experiencing on average roughly 3,600 millimeters of percipitation per yer. its driest month is December, when on average 28 millimeters of percipitation falls, while its wettest month is August, when on average nearly 700 millimeters of rain falls",
    programs: [
      {
        tag: "hnd",
        type: "HND",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: [
              "Physiotherapy",
              "Midwifery",
              "Pharmacy Technology",
              "Dental Therapy",
              "Medical Lab Sciences",
              "Medical Imaging Technology",
              "Nursing",
              "Nutrition and Dietics",
            ],
          },
          {
            title: "Agriculture",
            list: [
              "Crop Production",
              "Agro-Pastoral Advisor",
              "Food Processing Technology",
            ],
          },
          {
            title: "Engineering and Technology",
            list: [
              "Network and Security",
              "Telecommunication",
              "Electrical Power Systems",
              "Software Engineering",
              "Computer Hardware Maintenance",
            ],
          },
        ],
      },
      {
        tag: "bsc",
        type: "Professional Bachelors Program",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: [
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
        ],
      },
      {
        tag: "msc",
        type: "Professional Masters Program",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: [
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
        tag: "bsc",
        type: "Bachelors Degree Programmes",
        subs: [
          {
            title: "Agriculture",
            list: ["Bsc in Animal Production", "Bsc in Agronomy"],
          },
        ],
      },
    ],
  },
  {
    name: "BONAMOUSSADI CAMPUS",
    tag: "Our Bonamoussadi campus is located at the entrance of the vibrant Bonamoussadi quater which is a blend of residential and business.",
    body: "SLUI is situated in Douala with its major international seaport, Douala International Airport (DLA), it is the commercial and economic capital of Cameroon and the entire CEMAC region composing of Gabon, Congo, Chad, Equitorial Guinea, Central African Republic and Cameroon. Cameroon is home to nearly 250 languages and dialects. The local indigenous language is Duala, which shares its name with the city. French and English are the official languages, but Douala is primarily francophone. Douala sees plentiful rainfall during the course of the year, experiencing on average roughly 3,600 millimeters of percipitation per yer. its driest month is December, when on average 28 millimeters of percipitation falls, while its wettest month is August, when on average nearly 700 millimeters of rain falls",
    programs: [
      {
        tag: "hnd",
        type: "HND",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: [
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
            title: "Engineering and Technology",
            list: [
              "Network and Security",
              "Telecommunication",
              "Electrical Power Systems",
              "Software Engineering",
              "Computer Hardware Maintenance",
            ],
          },
        ],
      },
      {
        tag: "bsc",
        type: "Professional Bachelors Program",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: [
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
        ],
      },
      {
        tag: "msc",
        type: "Professional Masters Program",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: [
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
        tag: "bts",
        type: "Brevet Des Techniciens Superieurs (BTS)",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: ["Soins Infirmieres", "Sage Femmes"],
          },
        ],
      },
    ],
  },
  {
    name: "YAOUNDE CAMPUS",
    tag: "SLUI Yoaunde campus also known as Gandhi is located at Despot de bois - Simbock quarter.",
    body: "Located next to interesting places in Yaoundé, spread over 7 hills, is the capital city of Cameroon. It is in the southern part of the country. The 20th-century Notre Dame des Victoires cathedral has a striking triangular roof. Nearby, in the Lake Quarter, the former presidential palace is home to the National Museum, with cultural exhibits such as masks and sculptures. Farther west, Mvog-Betsi Zoo is home to primates rescued from the bushmeat trade. Many of the city's inhabitants are French & English speaking, and Cameroonian Pidgin English & Fran-Anglais is the main languages spoken in the shops and on the streets of Yaounde.",
    programs: [
      {
        tag: "hnd",
        type: "HND",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: [
              "Physiotherapy",
              "Midwifery",
              "Pharmacy Technology",
              "Dental Therapy",
              "Medical Lab Sciences",
              "Medical Imaging Technology",
              "Nursing",
            ],
          },
        ],
      },
      {
        tag: "bsc",
        type: "Professional Bachelors Program",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: [
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
        ],
      },
    ],
  },
  {
    name: "NDU CAMPUS",
    tag: "Our Ndu campus is an extension of our Bamenda main campus. Our campus in Ndu is located Opposite the Ndu national gendarmerie, Kaka in the North West",
    body: "Ndu is a town and commune in Donga-Mantung, a division in the Northwest Region of Cameroon. It lies at the northeast edge of the Bamenda Grassfields, on the eastern arc of the Ring Road. It is the highest elevation town in Cameroon. /n Ndu town is the administrative headquarters of the commune. The town includes a large market, hotels, schools, two hospitals (Government and Baptist Hospitals), a gendarmerie, and the Cameroon Baptist Theological Seminary.",
    programs: [
      {
        tag: "hnd",
        type: "HND",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: [
              "Physiotherapy",
              "Midwifery",
              "Pharmacy Technology",
              "Dental Therapy",
              "Medical Lab Sciences",
              "Medical Imaging Technology",
              "Nursing",
            ],
          },
        ],
      },
      {
        tag: "bsc",
        type: "Professional Bachelors Program",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: [
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
        ],
      },
    ],
  },
  {
    name: "BAMENDA CAMPUS",
    tag: "St.Louis University Institute Bamenda campus is situated at Mile 3 Nkwen. It is the birth place of SLUI.",
    body: "This area of the beautiful city of Bamenda has cultural sites such; as the Mankon Fon's Palace with its newly constructed museum, and the Bali Fon's palace with its ancient architectural structures. The mountainous terrain around the city affords scenic views such as that from the mountain Sabga over the Ndop plain. Bamenda has a tropical savanna climate, very close to being classified as a tropical monsoon climate, with a long summer wet season and considerably less rainfall in the winter. Interestingly, very good city for students.",
    programs: [
      {
        tag: "hnd",
        type: "HND",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: [
              "Physiotherapy",
              "Midwifery",
              "Pharmacy Technology",
              "Dental Therapy",
              "Medical Lab Sciences",
              "Medical Imaging Technology",
              "Nursing",
            ],
          },
        ],
      },
      {
        tag: "bsc",
        type: "Professional Bachelors Program",
        subs: [
          {
            title: "Health and Biomedical Sciences",
            list: [
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
        ],
      },
    ],
  },
];

const campusesFR = [
  {
    name: "CAMPUS DE BONABERI",
    tag: "À Bonaberi, vous trouverez notre campus moderne et flambant neuf dans le quartier de l'université et de l'innovation de la ville. Situé en face de Nestlé, à l'entrée",
    body: "Située à Douala et dotée d'un grand port maritime international, l'aéroport international de Douala (DLA), elle est la capitale commerciale et économique du Cameroun et de l'ensemble de la région CEMAC composée du Gabon, du Congo, du Tchad, de la Guinée équatoriale, de la République centrafricaine et du Cameroun. Le Cameroun compte près de 250 langues et dialectes. La langue indigène locale est le Duala, qui porte le même nom que la ville. Le français et l'anglais sont les langues officielles, mais Douala est essentiellement francophone. Douala connaît des précipitations abondantes au cours de l'année, avec une moyenne d'environ 3 600 millimètres de précipitations par an. Le mois le plus sec est décembre, avec une moyenne de 28 millimètres de précipitations, tandis que le mois le plus humide est août, avec une moyenne de près de 700 millimètres de précipitations.",
    programs: [
      {
        tag: "hnd",
        type: "HND",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: [
              "Physiothérapie",
              "Sages-femmes",
              "Technologie de la Pharmacie",
              "Sciences de Laboratoire Médical",
              "Technologie de l'Imagerie Médicale",
              "Soins Infirmiers",
              "Nutrition et Diététique",
            ],
          },
          {
            title: "Agriculture",
            list: [
              "Production Végétale",
              "Conseiller Agro-Pastoral",
              "Technologie de Transformation des Aliments",
            ],
          },
          {
            title: "Ingénierie et Technologie",
            list: [
              "Réseau et Sécurité",
              "Télécommunications",
              "Systèmes d'Alimentation Électrique",
              "Génie Logiciel",
              "Maintenance du Matériel Informatique",
            ],
          },
        ],
      },
      {
        tag: "bsc",
        type: "Programme de Licence Professionnelle",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: [
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
        ],
      },
      {
        tag: "msc",
        type: "Programme de Maîtrise Professionnelle",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: [
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
        tag: "bsc",
        type: "Programmes de Licence",
        subs: [
          {
            title: "Agriculture",
            list: ["Bsc en Production Animale", "Bsc en Agronomie"],
          },
        ],
      },
    ],
  },
  {
    name: "CAMPUS DE BONAMOUSSADI",
    tag: "Notre campus de Bonamoussadi est situé à l'entrée du quartier animé de Bonamoussadi qui est un mélange de résidences et d'entreprises.",
    body: "SLUI est situé à Douala, avec son principal port maritime international, l'aéroport international de Douala (DLA). C'est la capitale commerciale et économique du Cameroun et de toute la région CEMAC, composée du Gabon, du Congo, du Tchad, de la Guinée équatoriale, de la République centrafricaine et du Cameroun. Le Cameroun compte près de 250 langues et dialectes. La langue indigène locale est le Duala, qui porte le même nom que la ville. Le français et l'anglais sont les langues officielles, mais Douala est essentiellement francophone. Douala connaît des précipitations abondantes au cours de l'année, avec une moyenne d'environ 3 600 millimètres de précipitations par an. Le mois le plus sec est décembre, avec une moyenne de 28 millimètres de précipitations, tandis que le mois le plus humide est août, avec une moyenne de près de 700 millimètres de précipitations",
    programs: [
      {
        tag: "hnd",
        type: "HND",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: [
              "Physiothérapie",
              "Sages-femmes",
              "Technologie de la Pharmacie",
              "Sciences de Laboratoire Médical",
              "Technologie de l'Imagerie Médicale",
              "Soins Infirmiers",
            ],
          },
          {
            title: "Ingénierie et Technologie",
            list: [
              "Réseau et Sécurité",
              "Télécommunications",
              "Systèmes d'Alimentation Électrique",
              "Génie Logiciel",
              "Maintenance du Matériel Informatique",
            ],
          },
        ],
      },
      {
        tag: "bsc",
        type: "Programme de Licence Professionnelle",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: [
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
        ],
      },
      {
        tag: "msc",
        type: "Programme de Maîtrise Professionnelle",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: [
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
        tag: "bts",
        type: "Brevet Des Techniciens Superieurs (BTS)",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: ["Soins Infirmieres", "Sage Femmes"],
          },
        ],
      },
    ],
  },
  {
    name: "CAMPUS DE YAOUNDE",
    tag: "Le campus SLUI Yoaunde, également connu sous le nom de Gandhi, est situé dans le quartier Despot de bois - Simbock.",
    body: "Située à côté d'endroits intéressants, Yaoundé, répartie sur 7 collines, est la capitale du Cameroun. Elle se trouve dans la partie méridionale du pays. La cathédrale Notre-Dame des Victoires, datant du XXe siècle, possède un toit triangulaire remarquable. À proximité, dans le quartier du lac, l'ancien palais présidentiel abrite le musée national, qui présente des expositions culturelles telles que des masques et des sculptures. Plus à l'ouest, le zoo de Mvog-Betsi abrite des primates sauvés du commerce de la viande de brousse. La plupart des habitants de la ville sont francophones et anglophones, et le pidgin anglais camerounais et le français-anglais sont les principales langues parlées dans les magasins et dans les rues de Yaoundé.",
    programs: [
      {
        tag: "hnd",
        type: "HND",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: [
              "Physiothérapie",
              "Sages-femmes",
              "Technologie de la Pharmacie",
              "Sciences de Laboratoire Médical",
              "Technologie de l'Imagerie Médicale",
              "Soins Infirmiers",
            ],
          },
        ],
      },
      {
        tag: "bsc",
        type: "Programme de Licence Professionnelle",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: [
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
        ],
      },
    ],
  },
  {
    name: "CAMPUS DE NDU",
    tag: "Notre campus de Ndu est une extension de notre campus principal de Bamenda. Notre campus de Ndu est situé en face de la gendarmerie nationale de Ndu, à Kaka dans le Nord-Ouest.",
    body: "Ndu est une ville et une commune de la Donga-Mantung, une division de la région du Nord-Ouest du Cameroun. Elle est située à l'extrémité nord-est des Grassfields de Bamenda, sur l'arc est de la Ring Road. C'est la ville la plus élevée du Cameroun. La ville de /n Ndu est le siège administratif de la commune. La ville comprend un grand marché, des hôtels, des écoles, deux hôpitaux (l'hôpital gouvernemental et l'hôpital baptiste), une gendarmerie et le Cameroon Baptist Theological Seminary.",
    programs: [
      {
        tag: "hnd",
        type: "HND",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: [
              "Physiothérapie",
              "Sages-femmes",
              "Technologie de la Pharmacie",
              "Thérapie dentaire",
              "Sciences de Laboratoire Médical",
              "Technologie de l'Imagerie Médicale",
              "Soins Infirmiers",
            ],
          },
        ],
      },
      {
        tag: "bsc",
        type: "Programme de Licence Professionnelle",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: [
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
        ],
      },
    ],
  },
  {
    name: "CAMPUS DE BAMENDA",
    tag: "Le campus de l'Institut universitaire St-Louis de Bamenda est situé à Mile 3 Nkwen. C'est le lieu de naissance de SLUI.",
    body: "Cette zone de la belle ville de Bamenda abrite des sites culturels tels que le palais du Fon de Mankon, avec son musée récemment construit, et le palais du Fon de Bali, avec ses anciennes structures architecturales. Le terrain montagneux autour de la ville offre des vues pittoresques comme celle de la montagne Sabga sur la plaine de Ndop. Bamenda a un climat tropical de savane, très proche d'un climat tropical de mousson, avec une longue saison des pluies en été et beaucoup moins de précipitations en hiver. Il est intéressant de noter que Bamenda est une très bonne ville pour les étudiants.",
    programs: [
      {
        tag: "hnd",
        type: "HND",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: [
              "Physiothérapie",
              "Sages-femmes",
              "Technologie de la Pharmacie",
              "Thérapie dentaire",
              "Sciences de Laboratoire Médical",
              "Technologie de l'Imagerie Médicale",
              "Soins Infirmiers",
            ],
          },
        ],
      },
      {
        tag: "bsc",
        type: "Programme de Licence Professionnelle",
        subs: [
          {
            title: "Santé et Sciences Biomédicales",
            list: [
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
        ],
      },
    ],
  },
];

const CampusDetails: FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const selected =
    parseInt(JSON.parse(localStorage.getItem("@campusSelected") as string)) ||
    0;

  const campuses = i18n.language === "en" ? campusesEN : campusesFR;
  const campus = campuses[selected];

  return (
    <div className="landing">
      <div className={styles.hero}>
        <div className={styles.campusNameContainer}>
          <h1 className={styles.heading}>{campus.name}</h1>
        </div>
      </div>

      <div className={styles.campuses}>
        <p className={styles.detailsTag}>{campus.tag}</p>
        <p className={styles.detailsBody}>{campus.body}</p>
      </div>

      <div>
        <h4 className={styles.details_heading}>{t("campus_details.list")}</h4>
        {campus.programs.map((program, index) => {
          return (
            <>
              <h4 className={styles.details_sub_heading}>{program.type}</h4>
              <div className={styles.list}>
                {program.subs.map((sub, index) => (
                  <ProgramCard program={sub} key={index} tag={program.tag} />
                ))}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CampusDetails;
