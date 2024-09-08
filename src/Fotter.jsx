import React from "react";
import { BsJustify } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { TbPlaystationTriangle } from "react-icons/tb";
import { TbPlaystationSquare } from "react-icons/tb";
import { TbPlaystationX } from "react-icons/tb";

const Fotter = ({ textColor }) => {
  const styles = {
    container: {
      width: "100%", // Full width of the screen
      height: "60px", // Height set to 60px
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "20px",
      padding: "20px",
      backgroundColor: "transparent",
      zIndex: 3,
    },
    flexItem: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      padding: "5px 10px",
      gap: "5px",
      fontSize: "1.4rem",
      cursor: "pointer",
      color: textColor,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.flexItem}>
        <IoMenu />
        <span>Options</span>
      </div>
      <div style={styles.flexItem}>
        <TbPlaystationTriangle />
        <span>Top Menu</span>
      </div>
      <div style={styles.flexItem}>
        <TbPlaystationSquare />
        <span>Details</span>
      </div>
      <div style={styles.flexItem}>
        <TbPlaystationX />
        <span>Play</span>
      </div>
    </div>
  );
};

export default Fotter;
