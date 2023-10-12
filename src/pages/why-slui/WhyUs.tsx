import React, { useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Fade } from "react-reveal";
import ProgramGrid from "../../components/program-grid/ProgramGrid";

// styles
import styles from "./why-us.module.css";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className={styles.hero}>
        <h3>ST. LOUIS UNIVERSITY INSTITUTE</h3>
        <Fade left>
          <h1>Why choose us?</h1>
        </Fade>
      </div>
      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Exploration:</h2>
        </div>

        <div className={styles.content}>
          <h4>
            <strong style={{ fontWeight: "600" }}>
              “Serve the community, the nation, and the world, by educating and
              preparing students to discharge the offices of life with
              usefulness and reputation”.
            </strong>
            <br />
            In exploring our options and community, we acknowledge that the
            world is messy, and the social challenges we face do not respect the
            neat boundaries of academic departments. We need students who can
            integrate the knowledge and methods of specific fields - whether
            health sciences, business or natural sciences learned from St. Louis
            University classrooms, fields and laboratories - into a toolkit for
            problem solving that will be adapted and applied across disciplines
            and settings. How do we nurture such brazen creativity? By providing
            settings for cross-disciplinary learning to take place - we give
            students permission and encouragement to color outside the lines,
            they learn how to think outside the box.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Immersion:</h2>
        </div>

        <div className={styles.content}>
          <h4>
            <strong style={{ fontWeight: "600" }}>
              “Pursue research and discovery that benefits the public good, and
              assumes major responsibility for the economic, social, and
              cultural vitality and health and well-being of the community”.
            </strong>
            <br /> While immersing ourselves in our mission, we have learnt that
            so much learning happens beyond the campus green. When students
            immerse themselves directly in the communities and issues they
            study, they not only understand the problems and possibilities
            differently, but also develop a critical quality for change making:
            Empathy. Whether through courses that take students into communities
            or through community engagement programmes on campus, immersion can
            easily be integrated into or isolated from the classroom so long as
            students find proper spaces of preparation and reflection. An
            example is our partnership with organizations and educators that
            inspire our students that will prepare them to design and lead a
            project in collaboration with a grassroots development organization.
            As universities, we must continue to increase these opportunities
            for students to immerse themselves in the world without a syllabus.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Innovation:</h2>
        </div>

        <div className={styles.content}>
          <h4>
            <strong style={{ fontWeight: "600" }}>
              “Encourage, prepare, and expect students to gain expertise,
              breadth, values, and practical experience necessary to achieve
              individual fulfillment and to help solve problems that challenge
              communities everywhere”.
            </strong>
            <br /> This message has never been more meaningful or critical. As
            it pertains to St. Louis objectives and mission. The intricacy and
            immediacy of global challenges we face require that universities
            re-connect and re-commit to these ideals by providing students with
            not only the acquisition of knowledge but the tools for action as
            well. At St. Louis University campuses and facilities around the
            country, we have been working to build the ecosystems - courses,
            programmes, internships, coaching and mentorship Programmes - within
            and in collaboration with external experts and organizations.
            Students need well-designed and supportive learning experiences
            through which they can translate ideas into action. We are pledged
            to give our students the chances to test ideas, fail occasionally
            (through risks that are calculated and respectful), and learn from
            things that don't work. The emphasis in these experiences is
            designed to be on empowerment, rather than earning good grades
            through perfect planning and execution. This dynamic shall occur
            between faculty/adviser and student, or peer-to-peer, through unique
            course exercises, projects or entrepreneurial venture support. We
            are poised therefore to deliver (and convinced that doing so shall
            position us at the peak of excellence in academia) to deliver
            excellence in our mission through exploration, immersion, and
            innovation, and provide the next generation of leaders with the
            knowledge and tools to make powerful connections that better our
            world.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
