import React, { useEffect } from "react";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import { TfiCup } from "react-icons/tfi";
import { CiStar } from "react-icons/ci";
import { GiCardJoker } from "react-icons/gi";

const Header = ({ handleInteraction, isPlaying, textColor }) => {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      padding: "8px 20px",
      width: "100%",
      height: "60px",
      backgroundColor: "transparent",
      alignItems: "center",
      color: textColor,
      zIndex: 3,
    },
    partOne: {
      display: "flex",
      gap: "5px",
      alignItems: "center",
    },
    partTwo: {
      flex: 1,
      alignItems: "center",
      overflow: "hidden",
      position: "relative",
    },
    partThree: {
      display: "flex",
      gap: "5px",
      alignItems: "center",
    },
    flexItem: {
      display: "flex",
      alignItems: "center",

      textAlign: "center",
      padding: "5px 10px",
      // borderRadius: "4px",
      fontSize: "1.5rem",
    },
  };

  const [time, setTime] = React.useState(getCurrentTime());

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.header}>
      <div style={styles.partOne}>
        {isPlaying ? (
          <>
            <GiSoundOff
              onClick={handleInteraction}
              style={{ fontSize: "2rem", cursor: "pointer" }} // تكبير حجم الأيقونة
            />
          </>
        ) : (
          <>
            <GiSoundOn
              onClick={handleInteraction}
              style={{ fontSize: "2rem", cursor: "pointer" }} // تكبير حجم الأيقونة
            />
          </>
        )}
      </div>

      <div style={styles.partThree}>
        <div style={styles.flexItem}>
          <GiCardJoker />
        </div>
        <div style={styles.flexItem}>
          <CiStar />
          <span>23</span>
        </div>
        <div style={styles.flexItem}>
          <TfiCup />
        </div>
        <div style={{ ...styles.flexItem, fontSize: "1.8rem" }}>{time}</div>
      </div>
    </div>
  );
};

export default Header;
