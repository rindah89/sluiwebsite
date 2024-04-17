import React, { useState, useEffect } from "react";
import "./Slider.css"; // Create a CSS file for styling
import { getSliderNews } from "../../redux/reducers/app";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [text, setText] = useState([]);
  const [isFrenchText, setIsFrenchText] = useState([]);
  const { i18n } = useTranslation();

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handlerGetData = async () => {
    try {
      await getSliderNews()
        .then((res: any) => {
          if (res.status === 200) {
            setText(res.data);
            return;
          }
        })
        .catch((err: any) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handlerGetData();
  }, []);

  useEffect(() => {
    filterData();
  }, [i18n.language]);

  useEffect(() => {
    filterData();
  }, []);

  const filterData = () => {
    if (i18n.language === "fr") {
      const textFilter = text.filter((item: any) => item.isFrench);
      setIsFrenchText(textFilter);
    } else {
      const textFilter = text.filter((item: any) => !item.isFrench);
      setIsFrenchText(textFilter);
    }
  };

  const handleClick = (text: string) => {
    console.log("Clicked:", text);
    // Add your click handling logic here
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <div className="text-slider">
        <div className="text" onClick={() => handleClick("Text 1")}>
          {isFrenchText.map((item: any) => (
            <span style={{ marginRight: 30 }}>{item.title}</span>
          ))}
        </div>
        {/* <div className="text" onClick={() => handleClick("Text 2")}>
          tempora, inventore iusto corporis in aperiam vitae cum tenetur illo
        </div>
        <div className="text" onClick={() => handleClick("Text 3")}>
          libero aliquam, nesciunt illum asperiores, necessitatibus temporibus
        </div> */}
      </div>
    </div>
  );
};

export default Slider;
