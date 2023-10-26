import React, { FC, useEffect } from "react";

// styles
import styles from "./campus.module.css";
import ProgramCard from "../../components/programs/ProgramCard";

const campuses = [
  {
    name: "BONABERI CAMPUS",
    tag: "In Bonaberi, you'll find our striking, modern, brand-new campus in the city's University and Innovation Quarter. Located opposite Nestle at the entrance",
    body: "Located in Douala with its major international seaport, Douala International Airport (DLA), it is the commercial and economic capital of Cameroon and the entire CEMAC region composing of Gabon, Congo, Chad, Equitorial Guinea, Central African Republic and Cameroon. Cameroon is home to nearly 250 languages and dialects. The local indigenous language is Duala, which shares its name with the city. French and English are the official languages, but Douala is primarily francophone. Douala sees plentiful rainfall during the course of the year, experiencing on average roughly 3,600 millimeters of percipitation per yer. its driest month is December, when on average 28 millimeters of percipitation falls, while its wettest month is August, when on average nearly 700 millimeters of rain falls",
    programs: [
      {
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

const programs = [
  {
    title: "Health and Biomedical Sciences",
    list: [
      "Clinical Optimetry and Ophtamology",
      "Nutrition and Dietetics",
      "Radiology and ultrasonography",
      "Physiotherapy",
      "Midwifery",
      "Pharmaceutical Sciences",
      "Nursing",
    ],
  },
  {
    title: "Engineering and Technology",
    list: [
      "Networking and Security",
      "Telecommunication",
      "Electrical Power Systems",
      "Software Engineering",
      "Computer Hardware Maintenance",
    ],
  },
  {
    title: "Agriculture and Natural Sciences",
    list: [
      "Agricultural Production Technology",
      "Animal Production",
      "Crop production",
      "Agro-Pastoral Advisor",
      "Food Processing Technology",
    ],
  },
];

const CampusDetails: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const selected =
    parseInt(JSON.parse(localStorage.getItem("@campusSelected") as string)) ||
    0;

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
        <h4 className={styles.details_heading}>
          Below are the list of programmes offered in this campus
        </h4>
        {campus.programs.map((program, index) => {
          return (
            <>
              <h4 className={styles.details_sub_heading}>{program.type}</h4>
              <div className={styles.list}>
                {program.subs.map((program) => (
                  <ProgramCard program={program} />
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
