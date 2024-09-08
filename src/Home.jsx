import React, { useRef, useState, useEffect } from "react";
import Header from "./Header";
import GamesPage from "./GamesPage";
import backgroundSound from "./assets/sound/background.mp3";
import defaultWallPeaper from "./assets/image/ps5-playstation-5-sony-1.webp";
import Fotter from "./Fotter";
import getContrastColor from "./getContrastColor";
import Notification from "./Notification";
import appearSound from "./assets/sound/notifcation1.mp3";
import disappearSound from "./assets/sound/notivcation2.mp3";

const Home = () => {
  // State for text color
  const [textColor, setTextColor] = useState("#000000");
  // State to control the visibility of the notification
  const [showNotification, setShowNotification] = useState(false);
  // Reference for background audio
  const audioRef = useRef(null);
  // State to control playback of the background audio
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle audio playback on interaction
  const handleInteraction = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Audio references for notification sounds
  const appearAudio = useRef(new Audio(appearSound));
  const disappearAudio = useRef(new Audio(disappearSound));

  // State for background image
  const [background, setBackground] = useState(defaultWallPeaper);

  // Change background and update text color based on new background
  const changeBackGround = (e) => {
    const newBgColor = e;
    setTextColor(getContrastColor(newBgColor));
    setBackground(e);
  };

  useEffect(() => {
    // Show notification after 5 seconds
    const timer1 = setTimeout(() => {
      appearAudio.current.play(); // Play sound when notification appears
      setShowNotification(true);
    }, 5000);

    // Hide notification after 10 seconds
    const timer2 = setTimeout(() => {
      disappearAudio.current.play(); // Play sound when notification disappears
      setShowNotification(false);
    }, 10000);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div
      className="Home"
      style={{ ...styles.container, backgroundImage: `url(${background})` }}
    >
      {/* Background audio */}
      <audio ref={audioRef} src={backgroundSound} loop />

      <Header
        handleInteraction={handleInteraction}
        isPlaying={isPlaying}
        textColor={textColor}
      />
      <Notification show={showNotification} />
      <GamesPage textColor={textColor} changeBackGround={changeBackGround} />
      <Fotter textColor={textColor} />
      <div style={styles.shdow}></div>
    </div>
  );
};

// Styles for the Home component
const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
  },
  shdow: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
    opacity: "0.1",
    zIndex: 2,
  },
};

export default Home;
