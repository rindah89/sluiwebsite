import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaArrowRight, FaGraduationCap, FaGlobe, FaUsers, FaBook, FaClock, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./international.module.css";

// Import logos and images
import cobrandLogo from "../../assets/st louis ncuk cobrand-2.png";
import foundationLogo from "../../assets/702240-international-foundation-year-ncuk-programme-logo-colour.png";
import yearOneLogo from "../../assets/702239-international-year-one-ncuk-programme-logo-colour.png";
import mastersLogo from "../../assets/702237-masters-preparation-ncuk-programme-logo-colour.png";
import heroBanner from "../../assets/herobanner.png";
import ncukBadge from "../../assets/764127-ncuk-guaranteed-entry-to-university-badge.png";
import studyCenter1 from "../../assets/studyCenter1.png";
import studyCenter2 from "../../assets/studyCenter2.png";
import studyCenter3 from "../../assets/studyCenter3.png";
import studyCenter4 from "../../assets/studyCenter4.png";
import ncukVideo from "../../assets/598992-ncuk-international-foundation-year-animated-promotional-video-english-with-subtitles-online-preview.mp4";

const International: React.FC = () => {
  useTranslation();
  
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    programme: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/submit-contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Thank you for your inquiry! We will contact you soon.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          programme: '',
          message: ''
        });
      } else {
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "International Study Centre - St. Louis University International";
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const programmes = [
    {
      id: 1,
      title: "International Foundation Year",
      duration: "9 months (3 terms)",
      startDate: "September & January",
      description: "Prepare for undergraduate study with guaranteed entry to 60+ universities worldwide. Choose from 12 subject modules plus English for Academic Purposes.",
      subjects: ["Biology", "Business Studies", "Chemistry", "Computer Science", "Economics", "Mathematics", "Physics", "Art & Design"],
      progression: "Guaranteed entry to Year 1 of over 6,000 undergraduate degrees at 60+ universities in the UK, Australia, New Zealand, USA, Canada, and more",
      logo: foundationLogo,
      isNCUKProgramme: true
    },
    {
      id: 2,
      title: "International Year One - Business Management",
      duration: "9 months (3 terms)",
      startDate: "September & January",
      description: "Study the first year of an undergraduate degree with guaranteed progression to Year 2 of over 300 degree courses.",
      subjects: ["Accounting & Finance", "Business Management", "Economics", "Marketing", "English for Academic Purposes"],
      progression: "Guaranteed progression to Year 2 of Business degrees at 30+ universities in the UK, Australia, and New Zealand",
      logo: yearOneLogo,
      isNCUKProgramme: true
    },
    {
      id: 3,
      title: "International Year One - Computer Science",
      duration: "9 months (3 terms)", 
      startDate: "September & January",
      description: "Study the first year of a Computer Science degree with guaranteed progression to Year 2.",
      subjects: ["Computer Programming", "Mathematics for Computing", "Computer Systems", "Software Development", "English for Academic Purposes"],
      progression: "Guaranteed progression to Year 2 of Computer Science degrees at 30+ universities in the UK, Australia, and New Zealand",
      logo: yearOneLogo,
      isNCUKProgramme: true
    },
    {
      id: 4,
      title: "Masters Preparation Programme",
      duration: "10, 20, or 30 weeks",
      startDate: "Multiple start dates throughout the year",
      description: "Develop academic and English language skills for master's degree success. 91% of students complete their master's in one year.",
      subjects: ["Academic Writing", "Research Methods", "Critical Analysis", "Presentation Skills", "English for Academic Purposes"],
      progression: "Guaranteed entry to over 2,500 master's degrees at 30+ universities in the UK, Australia, and New Zealand",
      logo: mastersLogo,
      isNCUKProgramme: true
    },
    {
      id: 5,
      title: "English Language Preparation",
      duration: "4-36 weeks",
      startDate: "Multiple start dates throughout the year",
      description: "Improve your English language proficiency for academic success.",
      subjects: ["Academic English", "IELTS Preparation", "Study Skills", "Presentation Skills"],
      progression: "Progress to academic programmes or meet English requirements",
      icon: <FaClock />,
      isNCUKProgramme: false
    },
    {
      id: 6,
      title: "International Year One - Engineering",
      duration: "9 months (3 terms)",
      startDate: "September & January",
      description: "Study the first year of an Engineering degree with guaranteed progression to Year 2.",
      subjects: ["Electrical & Electronic Engineering", "Mathematics for Engineers", "Engineering Principles", "Technical Drawing", "English for Academic Purposes"],
      progression: "Guaranteed progression to Year 2 of Engineering degrees at 30+ universities in the UK, Australia, and New Zealand",
      logo: yearOneLogo,
      isNCUKProgramme: true
    }
  ];

  return (
    <div className={styles.international}>
      {/* Hero Section */}
      <motion.section 
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className={styles.heroBanner}>
          <img src={heroBanner} alt="Your Gateway To The World - St. Louis International Study Centre" />
          <div className={styles.heroButtons}>
            <Link to="/application-and-admission" className={styles.primaryBtn}>
              Apply Now <FaArrowRight />
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              Get More Information
            </Link>
          </div>
        </div>
      </motion.section>

      {/* NCUK Partnership Section */}
      <motion.section 
        className={styles.partnership}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className={styles.container}>
          <div className={styles.partnershipContent}>
            <div className={styles.partnershipText}>
              <img src={cobrandLogo} alt="St. Louis NCUK Partnership" className={styles.cobrandLogo} />
              <h2>In Partnership with NCUK</h2>
              <p>
                St. Louis University International is proud to partner with NCUK,
                a leading provider of international foundation and pathway programmes. This partnership ensures our students 
                receive world-class education and guaranteed progression to top UK universities.
              </p>
              <div className={styles.partnershipFeatures}>
                <div className={styles.feature}>
                  <FaGlobe />
                  <div>
                    <h4>Global Recognition</h4>
                    <p>Qualifications recognized by universities worldwide</p>
                  </div>
                </div>
                <div className={styles.feature}>
                  <FaUsers />
                  <div>
                    <h4>Guaranteed Progression</h4>
                    <p>Direct entry to partner universities upon completion</p>
                  </div>
                </div>
                <div className={styles.feature}>
                  <FaGraduationCap />
                  <div>
                    <h4>Quality Assurance</h4>
                    <p>NCUK quality standards and regular monitoring</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://www.ncuk.ac.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.ncukLink}
              >
                Learn more about NCUK <FaArrowRight />
              </a>
            </div>
            <div className={styles.partnershipImage}>
              <div className={styles.videoWrapper}>
                <video 
                  controls 
                  poster={require("../../assets/landing2.webp")}
                  className={styles.video}
                >
                  <source src={ncukVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className={styles.ncukBadge}>
                <img src={ncukBadge} alt="NCUK Guaranteed Entry to University" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Programmes Section */}
      <motion.section 
        className={styles.programmes}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className={styles.container}>
          <motion.div className={styles.sectionHeader} variants={fadeInUp}>
            <h2>NCUK Pathway Programmes</h2>
            <p>Choose the pathway that's right for your academic and career goals</p>
          </motion.div>
          
          <div className={styles.programmesGrid}>
            {programmes.map((programme) => (
              <motion.div 
                key={programme.id}
                className={styles.programmeCard}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {programme.isNCUKProgramme ? (
                  <div className={styles.programmeLogo}>
                    <img src={programme.logo} alt={`${programme.title} Logo`} />
                  </div>
                ) : (
                  <div className={styles.cardIcon}>
                    {programme.icon}
                  </div>
                )}
                <div className={styles.cardContent}>
                  <h3>{programme.title}</h3>
                  <div className={styles.programmeDetails}>
                    <span><strong>Duration:</strong> {programme.duration}</span>
                    <span><strong>Start Date:</strong> {programme.startDate}</span>
                  </div>
                  <p>{programme.description}</p>
                  <div className={styles.subjects}>
                    <h4>Key Subjects:</h4>
                    <ul>
                      {programme.subjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.progression}>
                    <strong>Progression:</strong> {programme.progression}
                  </div>
                  <Link to="/application-and-admission" className={styles.cardBtn}>
                    Apply Now <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        className={styles.whyChoose}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className={styles.container}>
          <h2>Why Choose St. Louis International Study Centre?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <FaGraduationCap />
              <h3>Expert Teaching</h3>
              <p>Learn from experienced academics and industry professionals</p>
            </div>
            <div className={styles.benefit}>
              <FaGlobe />
              <h3>Global Perspective</h3>
              <p>International curriculum preparing you for global opportunities</p>
            </div>
            <div className={styles.benefit}>
              <FaUsers />
              <h3>Small Class Sizes</h3>
              <p>Personalized attention and support for your academic success</p>
            </div>
            <div className={styles.benefit}>
              <FaBook />
              <h3>Modern Facilities</h3>
              <p>State-of-the-art learning environments and resources</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Facilities Section */}
      <motion.section 
        className={styles.facilities}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className={styles.container}>
          <motion.div className={styles.sectionHeader} variants={fadeInUp}>
            <h2>Our Modern Facilities</h2>
            <p>Experience world-class learning environments designed for academic success</p>
          </motion.div>
          
          <div className={styles.facilitiesGrid}>
            <motion.div className={styles.facilityCard} variants={fadeInUp}>
              <div className={styles.facilityImage}>
                <img src={studyCenter1} alt="Modern Study Centre - Reception and Student Areas" />
              </div>
              <div className={styles.facilityInfo}>
                <h3>Reception & Student Areas</h3>
                <p>Welcoming reception areas with comfortable student spaces for collaboration and relaxation.</p>
              </div>
            </motion.div>
            
            <motion.div className={styles.facilityCard} variants={fadeInUp}>
              <div className={styles.facilityImage}>
                <img src={studyCenter2} alt="Interactive Classroom with Digital Technology" />
              </div>
              <div className={styles.facilityInfo}>
                <h3>Interactive Classrooms</h3>
                <p>State-of-the-art classrooms equipped with interactive displays and modern learning technology.</p>
              </div>
            </motion.div>
            
            <motion.div className={styles.facilityCard} variants={fadeInUp}>
              <div className={styles.facilityImage}>
                <img src={studyCenter3} alt="Conference Room for Group Work and Presentations" />
              </div>
              <div className={styles.facilityInfo}>
                <h3>Conference Rooms</h3>
                <p>Professional meeting spaces perfect for group work, presentations, and academic discussions.</p>
              </div>
            </motion.div>
            
            <motion.div className={styles.facilityCard} variants={fadeInUp}>
              <div className={styles.facilityImage}>
                <img src={studyCenter4} alt="Study Centre Entrance and Common Areas" />
              </div>
              <div className={styles.facilityInfo}>
                <h3>Study Areas</h3>
                <p>Bright, modern study spaces designed to inspire learning and academic achievement.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className={styles.contact}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>
              <p>Ready to start your international education journey? Contact our admissions team today.</p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <MdEmail />
                  <div>
                    <h4>Email</h4>
                    <p>rindahluanga@slui.org</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <MdPhone />
                  <div>
                    <h4>Phone</h4>
                    <p>691 232 678 / 681 963 370</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <FaWhatsapp />
                  <div>
                    <h4>WhatsApp</h4>
                    <a 
                      href="https://wa.me/237691232678" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.whatsappLink}
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <MdLocationOn />
                  <div>
                    <h4>Location</h4>
                    <p>4th Floor Le 942, Rue Njo Njo, Bonapriso</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.contactForm}>
              <h3>Request Information</h3>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Full Name" 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required 
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <select 
                    name="programme"
                    value={formData.programme}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Programme</option>
                    <option value="foundation">International Foundation Year</option>
                    <option value="year-one-business">International Year One - Business Management</option>
                    <option value="year-one-cs">International Year One - Computer Science</option>
                    <option value="year-one-engineering">International Year One - Engineering</option>
                    <option value="masters-prep">Masters Preparation Programme</option>
                    <option value="english">English Language Preparation</option>
                  </select>
                </div>
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                
                {submitMessage && (
                  <div className={`${styles.submitMessage} ${submitMessage.includes('Thank you') ? styles.success : styles.error}`}>
                    {submitMessage}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default International;