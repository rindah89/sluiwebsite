import React, { FC, useEffect } from "react";

// styles
import styles from "./campus.module.css";

type Campus = {
  name: string;
  tag: string;
  body: string;
};

const campuses = [
  {
    name: "BONABERI CAMPUS",
    tag: "In Bonaberi, you'll find our striking, modern, brand-new campus in the city's University and Innovation Quarter. Located opposite Nestle at the entrance",
    body: "Located in Douala with its major international seaport, Douala International Airport (DLA), it is the commercial and economic capital of Cameroon and the entire CEMAC region composing of Gabon, Congo, Chad, Equitorial Guinea, Central African Republic and Cameroon. Cameroon is home to nearly 250 languages and dialects. The local indigenous language is Duala, which shares its name with the city. French and English are the official languages, but Douala is primarily francophone. Douala sees plentiful rainfall during the course of the year, experiencing on average roughly 3,600 millimeters of percipitation per yer. its driest month is December, when on average 28 millimeters of percipitation falls, while its wettest month is August, when on average nearly 700 millimeters of rain falls",
  },
  {
    name: "BONAMOUSSADI CAMPUS",
    tag: "Our Bonamoussadi campus is located at the entrance of the vibrant Bonamoussadi quater which is a blend of residential and business.",
    body: "SLUI is situated in Douala with its major international seaport, Douala International Airport (DLA), it is the commercial and economic capital of Cameroon and the entire CEMAC region composing of Gabon, Congo, Chad, Equitorial Guinea, Central African Republic and Cameroon. Cameroon is home to nearly 250 languages and dialects. The local indigenous language is Duala, which shares its name with the city. French and English are the official languages, but Douala is primarily francophone. Douala sees plentiful rainfall during the course of the year, experiencing on average roughly 3,600 millimeters of percipitation per yer. its driest month is December, when on average 28 millimeters of percipitation falls, while its wettest month is August, when on average nearly 700 millimeters of rain falls",
  },
  {
    name: "YAOUNDE CAMPUS",
    tag: "SLUI Yoaunde campus also known as Gandhi is located at Despot de bois - Simbock quarter.",
    body: "Located next to interesting places in Yaoundé, spread over 7 hills, is the capital city of Cameroon. It is in the southern part of the country. The 20th-century Notre Dame des Victoires cathedral has a striking triangular roof. Nearby, in the Lake Quarter, the former presidential palace is home to the National Museum, with cultural exhibits such as masks and sculptures. Farther west, Mvog-Betsi Zoo is home to primates rescued from the bushmeat trade. Many of the city's inhabitants are French & English speaking, and Cameroonian Pidgin English & Fran-Anglais is the main languages spoken in the shops and on the streets of Yaounde.",
  },
  {
    name: "NDU CAMPUS",
    tag: "Our Ndu campus is an extension of our Bamenda main campus. Our campus in Ndu is located Opposite the Ndu national gendarmerie, Kaka in the North West",
    body: "Ndu is a town and commune in Donga-Mantung, a division in the Northwest Region of Cameroon. It lies at the northeast edge of the Bamenda Grassfields, on the eastern arc of the Ring Road. It is the highest elevation town in Cameroon. /n Ndu town is the administrative headquarters of the commune. The town includes a large market, hotels, schools, two hospitals (Government and Baptist Hospitals), a gendarmerie, and the Cameroon Baptist Theological Seminary.",
  },
  {
    name: "BAMENDA CAMPUS",
    tag: "St.Louis University Institute Bamenda campus is situated at Mile 3 Nkwen. It is the birth place of SLUI.",
    body: "This area of the beautiful city of Bamenda has cultural sites such; as the Mankon Fon's Palace with its newly constructed museum, and the Bali Fon's palace with its ancient architectural structures. The mountainous terrain around the city affords scenic views such as that from the mountain Sabga over the Ndop plain. Bamenda has a tropical savanna climate, very close to being classified as a tropical monsoon climate, with a long summer wet season and considerably less rainfall in the winter. Interestingly, very good city for students.",
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
    </div>
  );
};

export default CampusDetails;
