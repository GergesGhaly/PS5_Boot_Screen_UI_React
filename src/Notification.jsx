import React from "react";
import { BiMessageSquareDots } from "react-icons/bi";
import { FaPlaystation } from "react-icons/fa";

const Notification = ({ show }) => {
  return (
    <div
      style={{
        ...styles.container,
        transform: show ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <BiMessageSquareDots style={styles.icon} />
      <span style={styles.text}>You have a new message</span>
      <FaPlaystation style={styles.icon} />
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: "80px",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    minHeight: "80px",
    backgroundColor: "#f1f1f185",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
  icon: {
    fontSize: "20px",
    color: "#333",
  },
  text: {
    flex: 1,
    textAlign: "center",
    margin: "0 10px",
  },
};

export default Notification;
