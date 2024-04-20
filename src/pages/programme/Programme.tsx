import { useEffect, FC, useState } from "react";
import { Fade } from "react-reveal";
import {
  programDetailsEN,
  programDetailsFR,
} from "../../utils/programmesDetails";

// styles
import styles from "./programme.module.css";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Mandi from "../../assets/new/mandi.jpg";
import Mengot from "../../assets/new/mengot.jpg";

import {
  getCourseSingle,
  getCampuses,
  getFaculties,
  getTeam,
} from "../../redux/reducers/app";
import { useParams } from "react-router-dom";
import moment from "moment";

const staffsEN = [
  {
    name: "Mr. Mandi Derick",
    position: "Programme Coordinator",
    mail: "info@stlui.org",
    phoneNumber: "",
    image: Mandi,
  },
  {
    name: "Mme. Mengot Sylvia",
    position: "Lecturer",
    mail: "info@stlui.org",
    phoneNumber: "",
    image: Mengot,
  },
];

const staffsFR = [
  {
    name: "Mr. Mandi Derick",
    position: "Coordinateur de Programme",
    mail: "info@stlui.org",
    phoneNumber: "",
    image: Mandi,
  },
  {
    name: "Mme. Mengot Sylvia",
    position: "Maître de Conférences",
    mail: "info@stlui.org",
    phoneNumber: "",
    image: Mengot,
  },
];

const Programme: FC<any> = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [program, setProgram] = useState<any>();

  const { id, title } = useParams();
  const staticId = location.search.split("?id=")[1];

  const language = i18n.language;

  const staffs = language === "en" ? staffsEN : staffsFR;

  useEffect(() => {
    const programDetails =
      language === "fr" ? programDetailsFR : programDetailsEN;
    setProgram(
      programDetails.find(
        (program) => program.id === decodeURIComponent(staticId)
      )
    );
  }, [language, staticId]);

  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState<any>([]);
  const [campuses, setCampuses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [lecturers, setLectures] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState<any>(null);
  const [filteredCampuses, setFilteredCampuses] = useState<any[]>([]);
  const [filteredLectures, setFilteredLecturers] = useState<any[]>([]);

  const handlerGetCourseSingle = async () => {
    try {
      setLoading(true);
      await getCourseSingle(id)
        .then((res: any) => {
          if (res.status === 200) {
            setCourse(res.data);
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

  const handlerGetCategories = async () => {
    try {
      setLoading(true);
      await getFaculties()
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

  const handlerGetTeam = async () => {
    try {
      setLoading(true);
      await getTeam()
        .then((res: any) => {
          if (res.status === 200) {
            setLectures(res.data);
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

  const filterCampuses = () => {
    if (course) {
      const filtered: any[] = campuses.filter((item: any) =>
        course?.campuses?.includes(item?._id)
      );
      setFilteredCampuses(filtered);
    }
  };

  const filterCategory = () => {
    const filtered: any[] = categories.filter(
      (item: any) => course?.faculty === item?._id
    )[0];
    setFilteredCategory(filtered);
  };
  const filterLecturers = () => {
    const filtered: any[] = lecturers.filter((item: any) =>
      course?.lecturers?.includes(item?._id)
    );
    setFilteredLecturers(filtered);
  };

  useEffect(() => {
    handlerGetCourseSingle();
    handlerGetCampuses();
    handlerGetCategories();
    handlerGetTeam();
  }, [id]);

  useEffect(() => {
    filterCampuses();
  }, [campuses, course]);

  useEffect(() => {
    filterCategory();
  }, [categories, course]);

  useEffect(() => {
    filterLecturers();
  }, [lecturers, course]);

  const formatMoney = (amount: any) => {
    let dollarUSLocale = Intl.NumberFormat("en-US");
    return dollarUSLocale.format(amount);
  };

  if (program) {
    return (
      <div>
        <div className="hero">
          <h3>{program.type}</h3>
          <Fade left>
            <h1>{program.name}</h1>
          </Fade>
        </div>

        <div className={styles.main}>
          <div className={styles.heads}>
            {program.heads.map((head: any, index: number) => (
              <h3 key={index}>{head}</h3>
            ))}
          </div>
          <div className={styles.content}>
            <div className={styles.left_content}>
              <p>{program.leftContent}</p>
              <div className={styles.buttons}>
                <button>{t("program.request")}</button>
                <a
                  href="https://apply.stlouissystems.org/"
                  style={{ textDecoration: "none" }}
                >
                  {t("program.apply")}
                </a>
              </div>
            </div>
            <div className={styles.right_content}>
              <div className={styles.list1}>
                <ul>
                  {program.rightContent.list1.map(
                    (list: any, index: number) => (
                      <li key={index}>{list}</li>
                    )
                  )}
                </ul>
              </div>
              <div className={styles.list2}>
                <ul>
                  {program.rightContent.list2.map(
                    (list: any, index: number) => (
                      <li key={index}>{list}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.backgroundImage} />
          <div className={styles.section}>
            <h4>{t("program.content")}</h4>
            <h3>{`Study ${program.name} at St. Louis University Institute`}</h3>
            <p>{program.studySection}</p>
          </div>
          <div className={styles.section}>
            <h4>{t("program.career")}</h4>
            <h3>{t("program.innovative")}</h3>
            {program.prospectusSection && <p>{program.prospectusSection}</p>}
            {program.careerPaths && (
              <>
                <p>{t("program.choose")}</p>
                <ul>
                  {program.careerPaths.map((path: any, index: number) => (
                    <li key={index}>{path}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className={styles.section}>
            <h4>{t("program.lecturers")}</h4>
            <h3>{t("program.goals")}</h3>
            <div className={styles.imageSection}>
              {program.stafs.map((staff: any, index: number) => {
                return (
                  <div className={styles.image}>
                    <div
                      className={styles.staffImage}
                      style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${staff.image}), no-repeat`,
                        backgroundSize: "cover",
                      }}
                    >
                      <div className={styles.topContent}>
                        <p
                          style={{
                            fontSize: 24,
                            fontWeight: "500",
                          }}
                          className={styles.pos}
                        >
                          {staff.position}
                        </p>
                      </div>
                      <div className={styles.bottomContent}>
                        <p
                          style={{
                            color: "white",
                            fontSize: 24,
                            fontWeight: "500",
                          }}
                        >
                          {staff.name}
                        </p>
                        <p
                          style={{
                            color: "white",
                            fontSize: 24,
                            fontWeight: "500",
                          }}
                        >
                          {staff.mail}
                        </p>
                        {!!staff.phoneNumber && (
                          <p
                            style={{
                              color: "white",
                              fontSize: 24,
                              fontWeight: "500",
                            }}
                          >
                            {staff.phoneNumber}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.section}>
            <h4>{t("program.admission")}</h4>
            <h3>{t("program.requirements")}</h3>
            <p>{t("program.to_submit")}</p>
            <ul>
              <li>{t("program.a_level")}</li>
              <li>{t("program.proof")}</li>
              <li>{t("program.cv")}</li>
              <li>{t("program.passport")}</li>
            </ul>
          </div>
          <div className={styles.section}>
            {/* <h4>{t("program.fees")}</h4> */}
            <h3>{t("program.fees")}</h3>
            {/* <h5>{t("program.tuition_fees")}</h5> */}
            <ul>
              <li>{t("program.registration")} 30,000 CFAF</li>
              <li>
                {`Total anual tuition: ${program.heads.find(
                  (head: any) =>
                    head.includes("FCFA") || head.includes("Tuition")
                )}`}
                {/* <ul>
                  <li>
                    First installment: 250,000 CFAF due upon issuance of
                    conditional offer{" "}
                  </li>
                  <li>
                    Second installment: 150,000 CFAF Due at the end of first
                    semester
                  </li>
                </ul> */}
              </li>
            </ul>
            <h5>{t("program.scholarships")}</h5>
            <p>
              {t("program.info")}{" "}
              <a href="/scholarships">{t("program.here")}</a>
            </p>
          </div>

          <div className={styles.section}>
            <h4>{t("program.apply")}</h4>
            <h3>{t("program.process")}</h3>
            <p>
              {t("program.please")} <a href="#">{t("program.here")}</a>
            </p>
            <p>{t("program.happy")} </p>
            <ul>
              <li>
                {t("program.submit")}{" "}
                <a href="https://apply.stlouissystems.org/">
                  {t("program.portal")}
                </a>
              </li>
              <li>{t("program.if")}</li>
              <li>{t("program.if2")}</li>
              <li>{t("program.sign")}</li>
              <li>{t("program.pay")}</li>
              <li>{t("program.receive")}</li>
              <li>{t("program.take_part")}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="hero">
          <h3>{filteredCategory?.title}</h3>
          <Fade left>
            <h1>{course?.title}</h1>
          </Fade>
        </div>

        <div className={styles.main}>
          <div className={styles.heads}>
            <h3>{title}</h3>
            <h3>{course?.duration}</h3>
            <h3>{course?.location}</h3>
            <h3>{formatMoney(course?.fee)} XAF</h3>
            <h3>{course?.courseType}</h3>
          </div>
          <div className={styles.content}>
            <div className={styles.left_content}>
              <p>{course?.summary}</p>
              <div className={styles.buttons}>
                <a href="/fill-form">Request for information</a>
                <a href="https://apply.stlouissystems.org/">Apply now</a>
              </div>
            </div>
            <div className={styles.right_content}>
              <div className={styles.list1}>
                <ul>
                  <li>{course?.language}</li>
                  <li>
                    Starts in{" "}
                    {moment(course?.startMonth, "YYYY-MM").format("MMMM")}
                  </li>
                </ul>
              </div>
              <div className={styles.list2}>
                <ul>
                  {filteredCampuses?.map((item, index) => {
                    return <li key={index}>{item.title}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.backgroundImage} />
          <div className={styles.section}>
            <h4>Course Content</h4>
            <p
              dangerouslySetInnerHTML={{ __html: course?.content }}
              style={{ fontSize: 18 }}
            />
          </div>
          <div className={styles.section}>
            <h4>Your career prospectus</h4>
            <h3>Our innovative approach that pays off</h3>
            <p
              dangerouslySetInnerHTML={{ __html: course?.prospectus }}
              style={{ fontSize: 18 }}
            />
          </div>
          <div className={styles.section}>
            <h4>Lecturers</h4>
            <h3>We help you meet your goals</h3>
            <div className={styles.imageSection}>
              {filteredLectures?.map((staff, index) => {
                // const image = new URL(staff.image, import.meta.url).href;
                return (
                  <div className={styles.image} key={index}>
                    <div
                      className={styles.staffImage}
                      style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), 
                        url('${process.env.REACT_APP_BASE_URL}/uploads/gallery/${staff?.image}'), no-repeat`,
                        backgroundSize: "cover",
                      }}
                    >
                      <div className={styles.topContent}>
                        {/* <p>{staff?.profession}</p> */}
                      </div>
                      <div className={styles.bottomContent}>
                        <p>{staff?.name}</p>
                        {/* <p>info@stlui.org</p> */}
                        <p>{staff?.profession}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.section}>
            <h4>Admission requirments</h4>
            <h3>Our requirements</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: course?.admissionRequirements,
              }}
              style={{ fontSize: 18 }}
            />
          </div>
          <div className={styles.section}>
            {/* <h4>Fees and Funding</h4> */}
            <h3>Tuition fees:</h3>
            {/* <h5>Tuition fees: </h5> */}
            <p
              dangerouslySetInnerHTML={{
                __html: course?.feeDetails,
              }}
              style={{ fontSize: 18 }}
            />

            <h3>Scholarships</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: course?.scholarship,
              }}
              style={{ fontSize: 18 }}
            />
          </div>

          <div className={styles.section}>
            <h4>Apply now</h4>
            <h3>Application process and deadlines</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: course?.applicationProcess,
              }}
              style={{ fontSize: 18 }}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Programme;
