import React, { FC, useEffect, useState } from "react";
import styles from "./team.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { Fade } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import LeaderCard from "../../components/leader-card/LeaderCard";
import { useTranslation } from "react-i18next";
import { getTeam } from "../../redux/reducers/app";

const Team: FC = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const { t, i18n } = useTranslation();

  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const startBounceAnimation = () => {
    console.log("bouncing animation has started");
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 2000); // Stop the bouncing after 1 second (adjust the duration as needed)
  };

  const navigate = useNavigate();
  const [team, setTeam] = useState([]);
  const [isFrenchTeam, setIsFrenchTeam] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlerGetTeam = async () => {
    try {
      setLoading(true);
      await getTeam()
        .then((res: any) => {
          if (res.status === 200) {
            setTeam(res.data);
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
    handlerGetTeam();
  }, []);

  useEffect(() => {
    filterData();
  }, [i18n.language]);

  useEffect(() => {
    filterData();
  }, [team]);

  const filterData = () => {
    if (i18n.language === "fr") {
      const teamFilter = team.filter((item: any) => item.isFrench);
      setIsFrenchTeam(teamFilter);
    } else {
      const teamFilter = team.filter((item: any) => !item.isFrench);
      setIsFrenchTeam(teamFilter);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <Fade left>
          <div
            className={styles.back}
            onMouseEnter={() => {
              setIsHover(true);
              startBounceAnimation();
            }}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => navigate(-1)}
          >
            <div className={isBouncing ? styles.bounce : ""}>
              <BsArrowLeft
                size={isHover ? 14 : 16}
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: isHover ? "#ffffff80" : "#ffffff",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "1.6rem",
                fontWeight: "bold",
                color: isHover ? "#ffffff80" : "#ffffff",
              }}
            >
              {t("team.back")}
            </p>
          </div>
        </Fade>
        <Fade right>
          <p
            style={{
              fontSize: width <= 450 ? "4rem" : "6rem",
              fontWeight: "bold",
              color: "#ffffff",
              width: "80%",
            }}
          >
            {t("team.team")}
          </p>
        </Fade>
      </div>
      <div className={styles.intro}>
        <p className={styles.heading}>{t("team.introduce")}</p>
        <p className={styles.paragraph}>{t("team.intro_para")}</p>
      </div>
      <div className={styles.event_section}>
        {isFrenchTeam.map(
          (
            item: {
              name: string;
              profession: string;
              _id: string;
              image: string;
            },
            index
          ) => {
            return (
              <Link to={`/leadership-team/${item._id}`}>
                <LeaderCard
                  key={index}
                  name={item.name}
                  title={item.profession}
                  image={`${process.env.REACT_APP_BASE_URL}/uploads/gallery/${item?.image}`}
                />
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Team;
