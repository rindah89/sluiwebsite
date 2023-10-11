import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { SiTripadvisor } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";

// stylesheet
import styles from "./buddy.module.css";

// components
import Content from "../../components/content/Content";
import BuddyCard from "../../components/buddy-card/BuddyCard";

const alumni = [
  {
    image: "",
    name: "CHEFON BRANDON",
    tel: "+592 680 4363",
    position: "Doctor of Medicine (Texila American University) Zambia",
  },
  {
    image:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAgl_S8fws6MD-0HS2ruZNhaJhDhVzz8j4MNA-_-CviN2Id5p8KHDTatERbhejG2q1pWRadHIgEedCL0qn4AomGsWrXbg=s1600",
    name: "MENGOT SYLVIA",
    tel: "+237 651 428 708",
    position: "Lecturer, Nursing",
  },
  {
    image: "",
    name: "VUSENG VERA",
    tel: "+237 670 878 721",
    position: "Acting HOD Physiotherapy",
  },
];
const students = [
  {
    image: "",
    name: "Baiye Foma",
    tel: "+237 654 552 982",
    position: "Pharmacy Technology",
  },
  {
    image: "",
    name: "Tinkeu Britney",
    tel: "+237 653 108 684",
    position: "Nursing",
  },
];
const advisers = [
  {
    image: "",
    name: "Mme. Ashubeng Emile B.",
    tel: "+237 678 933 452",
    position: "Administrative Secretary",
  },
  {
    image: "",
    name: "Mr. Kum Cyprain N",
    tel: "+237 681 200 836",
    position: "Administrative Assitant I",
  },
  {
    image:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDqpH5SBWeSP5fLLRX8zDCXh5jT3h8JiErLwWhtSZqkZwNaAxGtRhe2Q2fXGnQw5-nKQAvAZwISGp3BJ6l3BIvwHecCNQ=s500",
    name: "Ndipendoh Kingsly Mukom",
    tel: "+237 679 201 766",
    position: "Administrative Representative",
  },
];

const administrators = [
  {
    image:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAzXUgUqGKsmPY3DlFVj3yOHoY8ARE6QQqHk2GJsgvduIem-GII9TD_qum6BpJJQp2_5VUG19k0mapVlKuuBqLlO6WF=s1600",
    name: "MR. CHEGHE PEREZ K",
    tel: "679 933 329",
    position: "Dean of Studies, Health",
  },
  {
    image:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBczKhynO3ItzcOe7waXOHRLThcbXVS2a0BIN0DenFLG2IAvPz9s8RBWFIiSYRkt-Ku_9TVWY-k-7x4BBrW3duu6xIr=s2560",
    name: "MR SIMON MUFOR",
    tel: "652 615 379",
    position: "Dean of Studies, ICT",
  },
  {
    image:
      "https://drive.google.com/file/d/1dCAD4ewHsa0A-honC1bWxxO7u5wtnvor/view?usp=drive_link",
    name: "MR. MANDI DERICK",
    tel: "672 137 794",
    position: "Registrar/Lecturer Nursing",
  },
];

const FindBuddy = () => {
  const [activeSelector, setActiveSelector] = useState(0);
  const [typeSelector, setTypeSelector] = useState(students);
  // const [typeSelector, setTypeSelector] = useState("STUDENT");

  return (
    <div className={styles.wrapper}>
      <div className="content__section">
        <Content
          direction="RIGHT"
          caption="Find Your SLUI Buddy"
          title="Chat with our staff & students"
          subText=""
          description="Do you want first-hand information? Our staff & students are happy to share their experiences with you, tell you about their courses, their projects and student life in Douala, Yaounde, Bamenda & Ndu."
          refLink="/core-principle"
          btnText="See All Buddies"
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
            <h4>Students</h4>
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
            <h4>Admission Advicers</h4>
          </button>
          <button
            onClick={() => {
              setActiveSelector(2);
              setTypeSelector(administrators);
            }}
            className={activeSelector === 2 ? styles.active : ""}
          >
            <AiOutlineUser size={30} style={{ marginRight: "0.3rem" }} />
            <h4>Administrator</h4>
          </button>
          <button
            onClick={() => {
              setActiveSelector(3);
              setTypeSelector(alumni);
            }}
            className={activeSelector === 3 ? styles.active : ""}
          >
            <RiAdminFill size={30} style={{ marginRight: "0.3rem" }} />
            <h4>Alumni</h4>
          </button>
        </div>

        <div className={styles.buddies__grid}>
          {typeSelector.map((type, index) => {
            return (
              <BuddyCard
                image={type.image}
                title={type.position}
                name={type.name}
                whatsapp="https://wa.me/650999316"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FindBuddy;
