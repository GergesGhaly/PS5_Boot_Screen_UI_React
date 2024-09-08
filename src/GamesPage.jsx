import { useState } from "react";
import Game from "./Game";
import buttons from "./assets/image/buttons.png";
import stroe from "./assets/image/store.png";
import farCry from "./assets/image/farCry.jpg";
import godOfWar from "./assets/image/godOfwar.jpg";
import creed from "./assets/image/creed.jpg";

const GamesPage = ({ changeBackGround, textColor }) => {
  // State to manage the list of games
  const [games, setGames] = useState([
    {
      id: 0,
      image: stroe, // Image for the store game
      title: "Store", // Title of the game
      static: true, // Static game indicator
    },
    {
      id: 1,
      image: buttons, // Image for the settings game
      title: "Settings", // Title of the game
      static: true, // Static game indicator
    },
    {
      id: 2,
      image: farCry, // Image URL for Far Cry Primal
      title: "Far Cry Primal", // Title of the game
    },
    {
      id: 3,
      image: creed, // Image URL for Assassin's Creed
      title: "Assassin's Creed", // Title of the game
    },
    {
      id: 4,
      image: godOfWar, // Image URL for God Of War
      title: "God Of War", // Title of the game
    },
  ]);

  return (
    <div style={styles.container}>
      {/* Map through the list of games and render a Game component for each */}
      {games.map((game) => (
        <Game
          key={game.id} // Unique key for each game item
          game={game} // Pass game data to Game component
          changeBackGround={changeBackGround} // Function to change the background
          textColor={textColor} // Color for the text
        />
      ))}
    </div>
  );
};

export default GamesPage;

const styles = {
  container: {
    width: "100vw", // Full width of the viewport
    height: "calc(100vh - 60px)", // Height of the viewport minus the footer height
    // overflowX: "auto", // Uncomment if horizontal scrolling is needed
    display: "flex", // Flexbox layout
    alignItems: "end", // Align items to the bottom
    gap: "20px", // Space between game items
    padding: "20px", // Padding around the container
    backgroundColor: "transparent", // Transparent background
    zIndex: 3, // Stack order for the container
  },
};
