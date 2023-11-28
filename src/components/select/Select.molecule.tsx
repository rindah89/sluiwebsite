import { useCallback, useRef, useEffect, useState } from "react";

import styles from "./select.module.css";

type SelectProps = {
  onSelect: (data: string, index?: number) => void;
  list: string[];
  selected: string;
  height?: string;
};

const UseOnClickOutside = (ref: any, handler: Function) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const SelectMolecule = ({ onSelect, height, list, selected }: SelectProps) => {
  const [dropActive, setDropActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const outsideClickHandler = useCallback(() => {
    setDropActive(() => {
      return false;
    });
  }, []);

  UseOnClickOutside(ref, outsideClickHandler);

  return (
    <div
      style={{
        width: "100%",
      }}
      className={`${styles.select__wrapper}`}
    >
      <div
        onClick={() => {
          setDropActive(!dropActive);
        }}
        className={styles.select}
        ref={ref}
        id="select"
      >
        <h4>{selected}</h4>
        <CaretDownIcon />
        <div
          style={{
            display: dropActive ? "flex" : "none",
            top: document.getElementById("select")?.scrollHeight,
            height: height,
            width: "100%",
          }}
          className={styles.options}
        >
          {list.map((data, index) => {
            return (
              <h4
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(data, index);
                  setDropActive(false);
                }}
                key={index}
              >
                {data.length === 0 ? list[0] : data}
              </h4>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CaretDownIcon = ({
  size = "24",
  fillColor = "currentColor",
}: {
  size?: string;
  fillColor?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08 8.95"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SelectMolecule;
