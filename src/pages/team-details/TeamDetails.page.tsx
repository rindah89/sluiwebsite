import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./teamdetails.module.css";
import { useParams } from "react-router-dom";
import { getTeamSingle } from "../../redux/reducers/app";

interface TeamMember {
  image: string;
  name: string;
  profession: string;
  details: string;
}
const TeamDetailsPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const TeamEN = [
    {
      id: 1,
      image: "/images/nick.jpeg",
      name: "Dr. Nick Nganyam",
      position: "President",
    },
    {
      id: 2,
      image: "/images/krishna2.jpg",
      name: "Prof. Krishna N. Sharma",
      position: "Vice-Chancellor",
      description:
        "Prof. Krishna N. Sharma - world's youngest Vice-Chancellor (2017) is 9 times world record holder educator, researcher and prolific author with 40+ best-sellers out of his more than 250 published books. He is Vice-Chancellor at St. Louis University, Cameroon. He has also served as Vice-Chancellor at Victoria University, Uganda. He is 2 times TEDx speaker and teaches health, wellness and spirituality for life transformation. He has over 250,000 enrolments in his courses and the students in his courses are from 191 countries (98% of countries in the world).",
    },
    {
      id: 3,
      image: "/images/florence.jpg",
      name: "Dr. Manjong Florence",
      position: "DVC. Academic Affairs",
    },
    {
      id: 4,
      image: "/images/olivier.jpg",
      name: "Mr. Tolly Olivier",
      position: "DVC. Admin and Finance",
    },
    {
      id: 5,
      image: "/new/perez.jpg",
      name: "MR. CHEGHE PEREZ K",
      tel: "679 933 329",
      position: "Dean of Studies, Health",
    },
    {
      id: 6,
      image: "/new/simon.jpeg",
      name: "MR SIMON MUFOR",
      tel: "652 615 379",
      position: "Dean of Studies, ICT",
    },
    {
      id: 7,
      image: "/new/mandi.jpg",
      name: "MR. MANDI DERICK",
      tel: "672 137 794",
      position: "Registrar/Lecturer Nursing",
    },
    {
      id: 8,
      image: "",
      name: "MME. ASHUBENG EMILE B.",
      tel: "678 933 452",
      position: "Administrative Secretary",
    },
    {
      id: 9,
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDkiHhIGnzHzWofwBaSfusOd9NSn7FBSykwKyci36okkO89EF4b29Hf3WnaJepW2IhDbNE5hvMSbEbcPruzgOycteL7yQ=s1600",
      name: "MR. KUM CYPRIAN N.",
      tel: "681 200 836",
      position: "Administravie Assistant I",
    },
    {
      id: 10,
      image: "/new/kingsley.jpeg",
      name: "NDIPENDOH KINGSLY MUKOM",
      tel: "679 201 766",
      position: "Administrative Representative",
    },
  ];

  const TeamFR = [
    {
      id: 1,
      image: "/images/nick.jpeg",
      name: "Dr. Nick Nganyam",
      position: "Président",
    },
    {
      id: 2,
      image: "/images/krishna2.jpg",
      name: "Prof. Krishna N. Sharma",
      position: "Vice-Chancellor",
      description:
        "Prof. Krishna N. Sharma - world's youngest Vice-Chancellor (2017) is 9 times world record holder educator, researcher and prolific author with 40+ best-sellers out of his more than 250 published books. He is Vice-Chancellor at St. Louis University, Cameroon. He has also served as Vice-Chancellor at Victoria University, Uganda. He is 2 times TEDx speaker and teaches health, wellness and spirituality for life transformation. He has over 250,000 enrolments in his courses and the students in his courses are from 191 countries (98% of countries in the world).",
    },
    {
      id: 3,
      image: "/images/florence.jpg",
      name: "Dr. Manjong Florence",
      position: "DVC. Affaires Académiques",
    },
    {
      id: 4,
      image: "/images/olivier.jpg",
      name: "Mr. Tolly Olivier",
      position: "DVC. Administration et Finances",
    },
    {
      id: 5,
      image: "/new/perez.jpg",
      name: "MR. CHEGHE PEREZ K",
      tel: "679 933 329",
      position: "Doyen des Études, Santé",
    },
    {
      id: 6,
      image: "/new/simon.jpeg",
      name: "MR SIMON MUFOR",
      tel: "652 615 379",
      position: "Doyen des Études, TIC",
    },
    {
      id: 7,
      image: "/new/mandi.jpg",
      name: "MR. MANDI DERICK",
      tel: "672 137 794",
      position: "Registraire/Conférencier en Soins Infirmiers",
    },
    {
      id: 8,
      image: "",
      name: "MME. ASHUBENG EMILE B.",
      tel: "678 933 452",
      position: "Secrétaire Administrative",
    },
    {
      id: 9,
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDkiHhIGnzHzWofwBaSfusOd9NSn7FBSykwKyci36okkO89EF4b29Hf3WnaJepW2IhDbNE5hvMSbEbcPruzgOycteL7yQ=s1600",
      name: "MR. KUM CYPRIAN N.",
      tel: "681 200 836",
      position: "Assistant Administratif I",
    },
    {
      id: 10,
      image: "/new/kingsley.jpeg",
      name: "NDIPENDOH KINGSLY MUKOM",
      tel: "679 201 766",
      position: "Représentant Administratif",
    },
  ];

  const team = i18n.language === "en" ? TeamEN : TeamFR;

  const { id } = useParams();
  const [teamMember, setTeamMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(false);

  const handlerGetTeamMember = async () => {
    try {
      setLoading(true);
      await getTeamSingle(id)
        .then((res: any) => {
          if (res.status === 200) {
            setTeamMember(res.data);
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
    handlerGetTeamMember();
  }, [id]);

  return (
    <div className={styles.hero}>
      {teamMember ? (
        <div className={styles.details}>
          <div>
            <div className={styles.image}>
              <img
                src={`${process.env.REACT_APP_BASE_URL}/uploads/gallery/${teamMember?.image}`}
                alt=""
              />
            </div>
          </div>
          <div>
            <h2>{teamMember?.name}</h2>
            <h3>{teamMember?.profession}</h3>
            <p>{teamMember?.details}</p>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ fontSize: 20 }}>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default TeamDetailsPage;
