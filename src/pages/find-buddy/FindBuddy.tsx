import React, { useEffect, useState } from "react";
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
    image:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDMdpkdHY8R22xDu0eMMKpcVzYg_itZhR1Ov8nN8gCLUXpaHTR-dIojK6aot9voxhUXYyKcaiGFDpbc3XgoULEsi2xL=s1600",
    name: "CHEFON BRANDON",
    tel: "+592 680 4363",
    position: "Doctor of Medicine/n(Texila American University) Zambia",
  },
  {
    image:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAgl_S8fws6MD-0HS2ruZNhaJhDhVzz8j4MNA-_-CviN2Id5p8KHDTatERbhejG2q1pWRadHIgEedCL0qn4AomGsWrXbg=s1600",
    name: "MENGOT SYLVIA",
    tel: "+237 651 428 708",
    position: "Nurse/nNursing Lecturer",
  },
  {
    image:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAKSrUQy3ObA6iFgs2AzsnvSsLxHFkBBjMpReF9PJ7GA8ukf7UDUuPzdLwsgB4nxO5e6g2t-l7Jzmr4t-uCFcO26BuEyg=s1600",
    name: "VUSENG VERA",
    tel: "+237 670 878 721",
    position: "Pysiotherapist/nActing HOD Physiotherapy",
  },
];
const students = [
  {
    image:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBtXtKbJ2ot8EEky4hBi8t9fVPzWBbZCKcm_stCP6LdSPi7jq4aYNODRH2XrRqaxpWVbg6wll3gL-gmBRv62_-HeRm1iQ=s1600",
    name: "Baiye Foma",
    tel: "+237 654 552 982",
    position: "Pharmacy Technology",
  },
  {
    image:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCFUuBaYj0eMPf95viOHEc2TMw7Q1jO7WVaZTC1CEAQLbpSo6vIp1PnWMHUZMQfthP8vLB3DTdxrXyHlxi8ET3bCPZhMQ=s1600",
    name: "Tinkeu Britney",
    tel: "+237 653 108 684",
    position: "Nursing",
  },
  {
    image:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBvjBSCGghjfyxz1S_k5GWC2qdOklL1Zx08CH__2fRu6E8-9lVrUd6Ub-bi13ru32qdxBW-8OC_nd23JUzppPo_tiXdjA=s1600",
    name: "Shaliatu Mohammed",
    tel: "+237 655 548 245",
    position: "Medical Image Technology",
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
    image:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDkiHhIGnzHzWofwBaSfusOd9NSn7FBSykwKyci36okkO89EF4b29Hf3WnaJepW2IhDbNE5hvMSbEbcPruzgOycteL7yQ=s1600",
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

function convertPhoneNumber(phoneNumber: string) {
  let cleanedNumber = phoneNumber.split(" ").join("");

  if (cleanedNumber.startsWith("+237")) {
    cleanedNumber = cleanedNumber.substring(5);
  } else if (cleanedNumber.startsWith("+592")) {
    return cleanedNumber.substring(1);
  }

  return "237" + cleanedNumber.substring(1);
}

const FindBuddy = () => {
  const [activeSelector, setActiveSelector] = useState(0);
  const [typeSelector, setTypeSelector] = useState(students);
  // const [typeSelector, setTypeSelector] = useState("STUDENT");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className="content__section">
        <Content
          direction="RIGHT"
          caption="Find Your SLUI Buddy"
          title="Chat with our staff & students"
          subText=""
          description="Do you want first-hand information? Our staff & students are happy to share their experiences with you, tell you about their courses, their projects and student life in Douala, Yaounde, Bamenda & Ndu."
          refLink="/core-principles"
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
            const number = convertPhoneNumber(type.tel);
            return (
              <BuddyCard
                key={index}
                image={type.image}
                title={type.position}
                name={type.name}
                whatsapp={`https://wa.me/${number}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FindBuddy;
