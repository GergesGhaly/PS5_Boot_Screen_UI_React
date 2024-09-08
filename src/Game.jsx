import React, { useState, useRef } from "react";
import hover from "./assets/sound/hover.mp3"; // Importing the sound file correctly

const Game = ({ game, changeBackGround, textColor }) => {
  // Styles for the game component
  const styles = {
    gameWraper: {
      display: "flex", // Use flexbox for layout
      justifyContent: "start", // Align items to the start
      marginTop: "20px", // Space above the game component
      flexDirection: "column", // Stack items vertically
    },
    title: {
      fontSize: "1.2rem", // Font size for the title
      padding: "10px 0", // Vertical padding for the title
      color: textColor, // Color of the title text
    },
    gameCard: {
      borderRadius: "8px", // Rounded corners for the card
      textAlign: "center", // Center text inside the card
      width: "180px", // Width of the game card
      height: "250px", // Height of the game card
      cursor: "pointer", // Pointer cursor on hover
      transition: "transform 0.3s ease, border 0.3s ease", // Smooth transition for hover effects
    },
    image: {
      width: "100%", // Image width covers the card width
      height: "100%", // Image height covers the card height
      borderRadius: "4px", // Rounded corners for the image
      // objectFit: "cover", // Uncomment if you want the image to cover the card area without distortion
    },
  };

  const [isHovered, setIsHovered] = useState(false); // State to track hover status
  const audioRef = useRef(null); // Ref to access the audio element

  // Function to play the hover sound
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play sound if audio element is available
    }
  };

  return (
    <div style={styles.gameWraper}>
      {isHovered && (
        <h2
          style={{
            ...styles.title,
            marginBottom: !game?.static ? "25px" : "0px", // Add margin if the game is not static
          }}
        >
          {game.title} {/* Display the game title */}
        </h2>
      )}
      <div
        style={{
          ...styles.gameCard,
          backgroundColor: game?.static ? "#ffffff3d" : "", // Set background color if the game is static
          border: isHovered ? "3px solid #fff" : "none", // Add border on hover
          transform: isHovered && !game?.static ? "scale(1.2)" : "scale(1)", // Scale the card on hover if the game is not static
        }}
        onClick={() => (game?.static ? null : changeBackGround(game.image))} // Change background image if game is not static
        onMouseEnter={() => {
          setIsHovered(true); // Set hover state to true on mouse enter
          playSound(); // Play hover sound
        }}
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
      >
        <img
          src={game.image}
          alt={game.title}
          style={{
            ...styles.image,
            objectFit: game?.static ? "contain" : "cover", // Fit image inside the card based on game type
          }}
        />
        <audio ref={audioRef} src={hover} />{" "}
        {/* Audio element for hover sound */}
      </div>
    </div>
  );
};

export default Game;
