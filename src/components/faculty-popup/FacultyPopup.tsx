import styles from "./styles.module.css";
// import {
//   AiOutlineArrowDown,
//   AiOutlineArrowRight,
//   AiOutlineArrowUp,
// } from "react-icons/ai";
// import { useTranslation } from "react-i18next";
import ProgramCard from "../programs/ProgramCard";

export type Attrib = {
  title: string;
  desc: string;
  subDesc?: string;
  programs?: any[];
};

const FacultyPopup: React.FC<Attrib> = ({ title, desc, subDesc, programs }) => {
  // const [more, setMore] = useState("");
  // const { t } = useTranslation();
  return (
    <div className={styles.popup} id="mainRef">
      <div className={styles.content} id="content">
        <img
          style={{ marginBottom: "3rem" }}
          width={400}
          src="/images/logo_red.webp"
          alt="logo"
        />
        <div className={styles.head}>
          <h2>{title}</h2>
        </div>

        <div className={styles.desc}>
          {desc && <h4 dangerouslySetInnerHTML={{ __html: desc }} />}
          {subDesc && <h4>{subDesc}</h4>}
        </div>

        <div className={styles.list}>
          {programs?.map((item, index) => (
            <ProgramCard
              program={item.programCategory}
              courses={item.courses}
              key={index}
              tag={""}
            />
          ))}
        </div>

        {/* {programs?.map((program: any, index) => (
          <>
            <h2 className={styles.title}>
              {program?.title}
              {program.allCampuses && (
                <span> - {t("faculty_popup.all_campuses")}</span>
              )}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "4rem",
              }}
            >
              {program.campuses.map((campus: any, index: number) => (
                <div
                  style={{
                    gridColumn: "span 1 / span 1",
                  }}
                  key={index}
                >
                  <h3
                    style={{
                      color: "var(--main-color)",
                      fontSize: "1.5rem",
                      fontWeight: "500",
                      marginBottom: "2rem",
                    }}
                  >
                    {campus.title}
                  </h3>
                  <div className={styles.list}>
                    <div className="programCard" style={{}}>
                      <ul>
                        {more === campus.title
                          ? campus.programs.map((item: any) => {
                              return (
                                <li>
                                  <a href="/programme" className={"anchor"}>
                                    <AiOutlineArrowRight /> {item}
                                  </a>
                                </li>
                              );
                            })
                          : campus.programs.slice(0, 2).map((item: any) => {
                              return (
                                <li>
                                  <a href="/programme" className={"anchor"}>
                                    <AiOutlineArrowRight /> {item}
                                  </a>
                                </li>
                              );
                            })}
                      </ul>
                      <div className="seeMore" id="seeMore">
                        <div
                          id="button"
                          className="button"
                          onClick={() =>
                            more === ""
                              ? setMore(`${campus.title}-${program.title}`)
                              : setMore("")
                          }
                        >
                          <p id="link">
                            {more === `${campus.title}-${program.title}`
                              ? "See less"
                              : "See more"}
                          </p>
                          {more === `${campus.title}-${program.title}` ? (
                            <AiOutlineArrowUp />
                          ) : (
                            <AiOutlineArrowDown />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ))} */}
      </div>
    </div>
  );
};

export default FacultyPopup;
