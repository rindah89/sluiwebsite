import { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import styles from "./masters.module.css";
import GeneralPull from "../../components/general-pull/GeneralPull";
import ProgramCard from "../../components/programs/ProgramCard";
import { useParams } from "react-router-dom";
import {
  // getCategories,
  getCourses,
  getProgrammeSingle,
} from "../../redux/reducers/app";

interface program {
  _id: string;
  title: string;
  summary: string;
  date: string;
  otherDetails: string;
  location: string;
}

interface FilteredCourses {
  title?: String;
  programCategory: any; // Define the type of program category object
  courses: any[]; // Define the type of courses array
}

const SearchProgram = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { programId, campusId, facultyId } = useParams();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [programCategories, setProgramCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [filteredPrograms, setFlteredPrograms] = useState<FilteredCourses[]>(
    []
  );
  const [program, setProgram] = useState<program | null>(null);

  // const handlerGetCategories = async () => {
  //   try {
  //     setLoading(true);
  //     await getCategories()
  //       .then((res: any) => {
  //         if (res.status === 200) {
  //           setCategories(res.data);
  //           setLoading(false);
  //           return;
  //         }
  //         setLoading(false);
  //       })
  //       .catch((err: any) => {
  //         console.error(err);
  //         setLoading(false);
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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

  const handlerGetProgrammeSingle = async () => {
    try {
      setLoading(true);
      await getProgrammeSingle(programId)
        .then((res: any) => {
          if (res.status === 200) {
            setProgram(res.data);
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

  const filterCategories = () => {
    if (program) {
      const filtered = categories.filter(
        (item: any) => item.facultyID === facultyId
      );
      setProgramCategories(filtered);
    }
  };

  const filterCourses = () => {
    const filteredCoursesByCategory: FilteredCourses[] = [];

    programCategories.forEach((item: any) => {
      const filtered = courses.filter(
        (crs: any) =>
          crs.programType === item._id && crs.campuses?.includes(campusId)
      );
      if (filtered.length > 0) {
        filteredCoursesByCategory.push({
          programCategory: item,
          courses: filtered,
        });
      }
    });

    setFlteredPrograms(filteredCoursesByCategory);
  };

  useEffect(() => {
    // handlerGetCategories();
    handlerGetCourses();
  }, []);

  useEffect(() => {
    handlerGetProgrammeSingle();
  }, [programId]);

  useEffect(() => {
    filterCategories();
  }, [program, categories]);

  useEffect(() => {
    filterCourses();
  }, [programCategories, courses]);

  return (
    <div className={`${styles.bachelors}`}>
      <div className="hero">
        {/* <h3>{t("hnd.start")}</h3> */}
        <Fade left>
          <h1>{program?.title}</h1>
          <h4 className={styles.para}>{program?.summary}</h4>
        </Fade>
      </div>

      <div style={{ minHeight: "10vh", marginTop: "30px" }} className="about">
        <div style={{ fontSize: 18 }}>
          {program?.otherDetails && (
            <div dangerouslySetInnerHTML={{ __html: program?.otherDetails }} />
          )}
        </div>
      </div>

      {programCategories.length > 0 && (
        <>
          <div
            style={{ minHeight: "10vh", marginTop: "30px" }}
            className="about"
          >
            <div className={styles.desc}>
              {/* <h4>{t("hnd.below")}</h4> */}
              {filteredPrograms.length > 0 && (
                <h4>
                  Below are the list of {program?.title} programmes we offer
                </h4>
              )}
            </div>
          </div>

          <div className={styles.list}>
            {filteredPrograms?.map((item, index) => (
              <ProgramCard
                program={item.programCategory}
                courses={item.courses}
                key={index}
                tag={program?.title}
              />
            ))}
          </div>
        </>
      )}

      <GeneralPull />
    </div>
  );
};

export default SearchProgram;
