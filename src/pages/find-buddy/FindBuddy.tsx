import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { SiTripadvisor } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";
import styles from "./buddy.module.css";
import Content from "../../components/content/Content";
import BuddyCard from "../../components/buddy-card/BuddyCard";
import { useTranslation } from "react-i18next";
import { getBuddies } from "../../redux/reducers/app";

function convertPhoneNumber(phoneNumber: string) {
  let cleanedNumber = phoneNumber.split(" ").join("");

  if (cleanedNumber.startsWith("+237")) {
    cleanedNumber = cleanedNumber.substring(5);
  } else if (cleanedNumber.startsWith("+592")) {
    return cleanedNumber.substring(1);
  }

  return "237" + cleanedNumber.substring(1);
}

const FindBuddy = () => {
  const { t, i18n } = useTranslation();
  const [buddies, setBuddies] = useState([]);
  const [alumni, setalumniEN] = useState([]);
  const [students, setstudentsEN] = useState([]);
  const [advisers, setadvisersEN] = useState([]);
  const [administrators, setadministratorsEN] = useState([]);

  const [activeSelector, setActiveSelector] = useState(0);
  const [typeSelector, setTypeSelector] = useState(students);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handlerGetBuddies();
  }, []);

  const handlerGetBuddies = async () => {
    try {
      await getBuddies()
        .then((res: any) => {
          if (res.status === 200) {
            setBuddies(res.data);
            return;
          }
        })
        .catch((err: any) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const filterBuddies = () => {
    const students = buddies.filter((item: any) => item.role === "STUDENT");
    setstudentsEN(students);

    const advicers = buddies.filter(
      (item: any) => item.role === "ADMISSION_ADVICERS"
    );
    setadvisersEN(advicers);

    const admins = buddies.filter(
      (item: any) => item.role === "ADMINISTRATORS"
    );
    setadministratorsEN(admins);

    const alumnis = buddies.filter((item: any) => item.role === "ALUMNI");
    setalumniEN(alumnis);
  };

  useEffect(() => {
    filterBuddies();
  }, [buddies]);

  useEffect(() => {
    setTypeSelector(students);
  }, [students]);

  return (
    <div className={styles.wrapper}>
      <div className="content__section">
        <Content
          direction="RIGHT"
          caption={t("find_buddy.find_buddy")}
          title={t("find_buddy.chat")}
          subText=""
          description={t("find_buddy.desc")}
          refLink="/alumni"
          btnText={t("find_buddy.see_all")}
          img="/pics/optimized/ivs-7466.webp"
        />
      </div>

      <div className={styles.filter}>
        <div className={styles.filter__options}>
          <button
            onClick={() => {
              setActiveSelector(0);
              setTypeSelector(students);
            }}
            className={activeSelector === 0 ? styles.active : ""}
          >
            <FiUsers size={30} style={{ marginRight: "0.3rem" }} />
            <h4>{t("find_buddy.students")}</h4>
          </button>
          <button
            onClick={() => {
              setActiveSelector(1);
              setTypeSelector(advisers);
            }}
            className={activeSelector === 1 ? styles.active : ""}
          >
            {" "}
            <SiTripadvisor size={30} style={{ marginRight: "0.3rem" }} />
            <h4>{t("find_buddy.advicers")}</h4>
          </button>
          <button
            onClick={() => {
              setActiveSelector(2);
              setTypeSelector(administrators);
            }}
            className={activeSelector === 2 ? styles.active : ""}
          >
            <AiOutlineUser size={30} style={{ marginRight: "0.3rem" }} />
            <h4>{t("find_buddy.administrator")}</h4>
          </button>
          <button
            onClick={() => {
              setActiveSelector(3);
              setTypeSelector(alumni);
            }}
            className={activeSelector === 3 ? styles.active : ""}
          >
            <RiAdminFill size={30} style={{ marginRight: "0.3rem" }} />
            <h4>{t("find_buddy.alumni")}</h4>
          </button>
        </div>

        <div className={styles.buddies__grid}>
          {typeSelector.map((type: any, index) => {
            const number = convertPhoneNumber(type.phone);
            return (
              <BuddyCard
                key={index}
                image={type.image}
                position={type.position}
                name={type.name}
                campus={type.campus}
                whatsapp={`https://wa.me/${number}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FindBuddy;
