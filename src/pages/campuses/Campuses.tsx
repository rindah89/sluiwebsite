import { useEffect, useState } from "react";
// styles
import styles from "./campus.module.css";

// components
import CampusCard from "../../components/campus-card/CampusCard";
import GridLayout from "../../components/grid/Grid";
import ProgramGrid from "../../components/program-grid/ProgramGrid";
import { programmesEN, programmesFR } from "../landing/Landing";
import Membership from "../../components/membership/Membership";
import { useTranslation } from "react-i18next";
import { getProgrammes, getCampuses } from "../../redux/reducers/app";

const Campuses = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { t, i18n } = useTranslation();

  // const programmes = i18n.language === "en" ? programmesEN : programmesFR;
  const [programmes, setProgrammes] = useState([]);
  const [campuses, setCampuses] = useState([]);
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
  const handlerGetCampuses = async () => {
    try {
      setLoading(true);
      await getCampuses()
        .then((res: any) => {
          if (res.status === 200) {
            setCampuses(res.data);
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
    handlerGetCampuses();
    handlerGetProgrammes();
  }, []);

  return (
    <div className="landing">
      <div className={styles.hero}>
        <h3>{t("campuses.name")}</h3>
        <h1>{t("campuses.campuses")}</h1>

        <p>{t("campuses.campuses_tag")}</p>
      </div>

      <div className={styles.campuses}>
        <GridLayout columns={2} gap={3}>
          {campuses?.map(
            (item: { image: string; title: string; _id: string }, index) => {
              return (
                <CampusCard
                  image={`${process.env.REACT_APP_BASE_URL}/uploads/gallery/${item?.image}`}
                  name={item?.title}
                  title={t("campuses.bonaberi_tag")}
                  refLink={`/campus-details/${item?._id}`}
                  index={index}
                />
              );
            }
          )}
        </GridLayout>
      </div>

      <div className="programs_">
        <div className="headline">
          <h3>{t("campuses.right_fit")}</h3>
          <h2>{t("campuses.exciting_programs")}</h2>
        </div>
        <ProgramGrid programs={programmes} />
      </div>

      <div className="programs_">
        <div className="headline">
          <h2>{t("campuses.membership_partnership")}</h2>
        </div>
        <Membership />
      </div>
    </div>
  );
};

export default Campuses;
