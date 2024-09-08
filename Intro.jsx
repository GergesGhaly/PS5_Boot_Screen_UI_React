import React, { useEffect, useState } from "react";
import intro from "./src/assets/video/intro2.mp4";

const Intro = ({ setShowIntro }) => {
  const [showMessage, setShowMessage] = useState(false);
  //
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 16000); // Show message after 16 seconds

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, []);

  const handleKeyPress = () => {
    // Logic to proceed to the next page or action
  };

  return (
    <div
      style={styles.container}
      onClick={handleKeyPress}
      onKeyPress={handleKeyPress}
      tabIndex="0"
    >
      <video style={styles.video} src={intro} autoPlay muted playsInline />
      {showMessage && (
        <div
          className="message"
          onClick={() => setShowIntro(true)}
          style={styles.message}
        >
          Press here to continue
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default Intro;
