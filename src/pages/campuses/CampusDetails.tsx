import React, { FC, useEffect, useState } from "react";

// styles
import styles from "./campus.module.css";
import ProgramCard from "../../components/programs/ProgramCard";
import { useTranslation } from "react-i18next";
import {
  getCampusSingle,
  getCategories,
  getCourses,
  getProgrammes,
} from "../../redux/reducers/app";
import { useParams } from "react-router-dom";

const CampusDetails: FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const selected =
    parseInt(JSON.parse(localStorage.getItem("@campusSelected") as string)) ||
    0;

  // const campuses = i18n.language === "en" ? campusesEN : campusesFR;
  // const campus = campuses[selected];

  const { id } = useParams();
  const [campus, setCampusSingle] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [courses, setCourses] = useState([]);
  const [programmes, setProgrammes] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filteredPrograms, setFlteredPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handlerGetCampusSingle = async () => {
    try {
      setLoading(true);
      await getCampusSingle(id)
        .then((res: any) => {
          if (res.status === 200) {
            setCampusSingle(res.data);
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
  const handlerGetCategories = async () => {
    try {
      setLoading(true);
      await getCategories()
        .then((res: any) => {
          if (res.status === 200) {
            setCategories(res.data);
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
  const handlerGetCourses = async () => {
    try {
      setLoading(true);
      await getCourses()
        .then((res: any) => {
          if (res.status === 200) {
            setCourses(res.data);
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

  const filterCourses = () => {
    if (campus) {
      const filtered = courses.filter((item: any) =>
        item.campuses?.includes(campus?._id)
      );
      setFilteredCourses(filtered);
    }
  };

  const filterCategories = () => {
    const filteredCoursesByCategory: any[] = [];

    categories.forEach((item: any) => {
      const filtered = filteredCourses.filter(
        (crs: any) => crs.programType === item._id
      );
      filteredCoursesByCategory.push({
        programCategory: item,
        courses: filtered,
      });
    });
    return setFlteredPrograms(filteredCoursesByCategory);
  };

  useEffect(() => {
    handlerGetCategories();
    handlerGetCourses();
    handlerGetProgrammes();
  }, []);

  useEffect(() => {
    handlerGetCampusSingle();
  }, [id]);

  useEffect(() => {
    filterCourses();
  }, [courses, campus]);

  useEffect(() => {
    filterCategories();
  }, [categories, filteredCourses]);

  return (
    <div className="landing">
      <div className={styles.hero}>
        <div className={styles.campusNameContainer}>
          <h1 className={styles.heading}>{campus?.title}</h1>
        </div>
      </div>

      <div className={styles.campuses}>
        {/* <p className={styles.detailsTag}>{campus.tag}</p> */}
        <p
          dangerouslySetInnerHTML={{
            __html: campus?.summary,
          }}
          style={{ fontSize: 18 }}
        />
      </div>

      <div>
        <h4 className={styles.details_heading}>{t("campus_details.list")}</h4>

        <div className={styles.list}>
          {filteredPrograms?.map((item, index) => {
            const tempProgram: any = programmes.filter((p: any) =>
              item.programCategory.programmeID.includes(p._id)
            )[0];
            return (
              <ProgramCard
                program={item.programCategory}
                courses={item.courses}
                key={index}
                tag={tempProgram?.title}
              />
            );
          })}
        </div>

        {/* {filteredPrograms?.map((program, index) => {
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
        })} */}
      </div>
    </div>
  );
};

export default CampusDetails;
