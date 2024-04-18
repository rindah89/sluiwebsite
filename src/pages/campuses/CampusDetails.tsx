import { FC, useEffect, useState, useRef } from "react";

// styles
import styles from "./campus.module.css";
import ProgramCard from "../../components/programs/ProgramCard";
import { useTranslation } from "react-i18next";
import {
  getCampusSingle,
  getCourses,
  getFaculties,
} from "../../redux/reducers/app";
import { useParams } from "react-router-dom";

const CampusDetails: FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { id } = useParams();
  const [campus, setCampusSingle] = useState<any>(null);
  const [faculties, setFaculties] = useState<any[]>([]);
  const [courses, setCourses] = useState([]);
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

  const filterCourses = () => {
    if (campus) {
      const filtered = courses.filter((item: any) =>
        item.campuses?.includes(campus?._id)
      );
      setFilteredCourses(filtered);
    }
  };
  const handlerGetFaculties = async () => {
    try {
      setLoading(true);
      await getFaculties()
        .then((res: any) => {
          if (res.status === 200) {
            setFaculties(res.data);
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

  const filterFaculties = () => {
    const filteredCoursesByFaculty: any[] = [];

    if (i18n.language === "fr") {
      faculties.forEach((item: any) => {
        const filtered = filteredCourses.filter(
          (crs: any) => crs.faculty === item._id && item.isFrench
        );
        if (filtered.length > 0) {
          filteredCoursesByFaculty.push({
            faculty: item,
            courses: filtered,
          });
        }
      });
      return setFlteredPrograms(filteredCoursesByFaculty);
    } else {
      faculties.forEach((item: any) => {
        const filtered = filteredCourses.filter(
          (crs: any) => crs.faculty === item._id
        );
        if (filtered.length > 0) {
          filteredCoursesByFaculty.push({
            faculty: item,
            courses: filtered,
          });
        }
      });
      return setFlteredPrograms(filteredCoursesByFaculty);
    }
  };

  useEffect(() => {
    handlerGetCampusSingle();
    handlerGetCourses();
  }, [id]);

  useEffect(() => {
    handlerGetFaculties();
  }, []);

  useEffect(() => {
    filterCourses();
  }, [courses, campus]);

  useEffect(() => {
    filterFaculties();
  }, [faculties, filteredCourses]);

  const prevLanguageRef = useRef<string>(i18n.language);

  useEffect(() => {
    if (prevLanguageRef.current !== i18n.language) {
      window.location.reload();
    }
    prevLanguageRef.current = i18n.language;
  }, [i18n.language]);

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
        {filteredPrograms.length > 0 && (
          <h4 className={styles.details_heading}>{t("campus_details.list")}</h4>
        )}
        <div className={styles.list}>
          {filteredPrograms?.map((item, index) => {
            // const tempProgram: any = programmes.filter((p: any) =>
            //   item.programCategory.programmeID.includes(p._id)
            // )[0];
            return (
              <ProgramCard
                program={item.faculty}
                courses={item.courses}
                key={index}
                tag={""}
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
