import React from "react";

// stylesheet
import styles from "./grid.module.css";

type Props = {
  height?: number;
  width?: number;
  columns: number;
  children: React.ReactNode;
  gap: number;
};

const GridLayout: React.FC<Props> = ({
  columns,
  height,
  width,
  children,
  gap,
}): React.JSX.Element => {
  if (columns > 4 || columns < 2) {
    alert("Grid Layout Only Supports: (2 - 4 inclusive) columns display");
  }
  return (
    <div
      style={{
        width,
        height,
        display: "grid",
        gap: `${gap}rem`,
      }}
      className={`${styles.grid} ${
        columns === 2
          ? styles.grid__2
          : columns === 3
          ? styles.grid__3
          : styles.grid__4
      }`}
    >
      {children}
    </div>
  );
};

export default GridLayout;
