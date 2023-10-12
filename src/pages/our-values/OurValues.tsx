import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import ProgramGrid from "../../components/program-grid/ProgramGrid";

// styles
import styles from "./values.module.css";

const OurValues = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="hero">
        <h3>ST. LOUIS UNIVERSITY INSTITUTE</h3>
        <Fade left>
          <h1>OUR VALUES</h1>
        </Fade>
      </div>

      <div style={{ minHeight: "10vh", padding: "4rem 0" }} className="about">
        <div className="desc">
          <h4>
            St. Louis University adopts and freely calls on all stakeholders to
            respect as herein adopted, the following principles and behaviors as
            our best judgment of what&apos;s right (beliefs) and best (Values)
            for the mission of the University, here-in after referred to as St.
            Louis Core Values institution-wide:
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Ethical responsibility and Integrity</h2>
        </div>

        <div className={styles.content}>
          <h4>
            Ethics and integrity are the hallmarks of good character. School
            environments that adopt a culture of ethics and integrity play
            important role in producing that student that demonstrate strong
            moral principles such as respect, impartiality, social
            responsibility, transparency, and honesty.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Freedom of inquiry and expression</h2>
        </div>

        <div className={styles.content}>
          <h4>
            The freedoms of inquiry and expression are vital to the educational
            mission of the university; and are central to shared governance, and
            the discovery and dissemination of knowledge. Consequently, members
            of the University Community are free to examine and to discuss all
            questions of interest to them, and are free to express ideas
            publicly and privately.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Diversity, inclusion and collaboration </h2>
        </div>

        <div className={styles.content}>
          <h4>
            Diversity and inclusion{" "}
            <span style={{ fontWeight: "600" }}>
              play an integral role in producing an empowered and engaged
              community.
            </span>{" "}
            It is when this type of collaborative and inclusive conversation
            occurs that people feel comfortable enough to step out of their
            comfort zone, speak their mind, and participate.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Student-centeredness, empathy and innovation</h2>
        </div>

        <div className={styles.content}>
          <h4>
            The student-centeredness, empathy, and innovation (inventiveness /
            resourcefulness) in particular will carry St. Louis through its
            objectives and attract the best breed of students and trainers.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Impact on and change of lives through public engagement</h2>
        </div>

        <div className={styles.content}>
          <h4>
            For the learning community at St. Louis University, engaging public
            groups with their teaching (Pedagogy and curriculum) and research
            tends to serve three purposes for them:
          </h4>
          <h4>• to share and inform others about their work</h4>
          <h4>• to listen to people and communities outside the University</h4>
          <h4>• to collaborate with people and communities beyond academia</h4>
          ``
          <h4>
            Having a clear purpose and a consideration of the people you are
            hoping to engage with are the foundations of high-quality public
            engagement and shapes the type of work you may choose to do. No
            matter what your skills, experience, motivations and ambitions,
            getting involved in public engagement can deliver significant
            benefits to you, your research and to wider society.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Stewardship of the natural environment</h2>
        </div>

        <div className={styles.content}>
          <h4>
            Environmental stewardship also referred to as sustainable
            development refers to the responsible use and protection of the
            natural environment through active participation in conservation
            efforts and sustainable practices by actors ranging from
            individuals, small groups, nonprofit organizations, federal
            agencies, and other collective networks.
          </h4>
        </div>
      </div>

      <div className="programs_">
        <div className="headline">
          <h3>JUST THE RIGHT FIT FOR YOU.</h3>
          <h2>Exciting Programmes</h2>
        </div>
        <ProgramGrid
          programs={[
            {
              image: "/images/landing.webp",
              desc: "More and more exciting programmes to be explored at our campuses.",
              label: "Bachelor",
            },
            {
              image: "/images/landing2.webp",
              desc: "Explore our best masters programmes. Find a fit for yourself.",
              label: "Masters",
            },
            {
              image: "/images/landing3.webp",
              desc: "We offer a variety of short courses. Explore today!",
              label: "Short Course",
            },
            {
              image: "/images/landing4.webp",
              desc: "HND programmes are just so exciting start a career in one of these programmes.",
              label: "HND",
            },
          ]}
        />
      </div>

      <div className="programs_">
        <div className="headline">
          <h2>Memberships and Partnerships</h2>
        </div>
        <div className="logos">
          <Fade up delay={100}>
            <img src="/logos/logo.webp" alt="logo" />
          </Fade>
          <Fade up delay={300}>
            <img src="/logos/logo2.webp" alt="logo" />
          </Fade>
          <Fade up delay={500}>
            <img src="/logos/logo3.webp" alt="logo" />
          </Fade>
          <Fade up delay={700}>
            <img src="/logos/logo4.webp" alt="logo" />
          </Fade>
          <Fade up delay={900}>
            <img src="/logos/logo5.webp" alt="logo" />
          </Fade>
          <Fade up delay={900}>
            <img src="/logos/logo6.webp" alt="logo" />
          </Fade>
          <Fade up delay={900}>
            <a
              href="https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/how-to-participate/org-details/885163219"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/logos/logo7.webp" alt="logo" />
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
