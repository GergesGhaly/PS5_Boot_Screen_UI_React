import { useState } from "react";
import "./App.css";
import Intro from "../Intro";
import Home from "./Home";
import NotAvailable from "./NotAvailable";

function App() {
  const [showIntro, setShowIntro] = useState(false); // Controls showing or hiding the Intro component

  return (
    <div>
      <NotAvailable/>
      {!showIntro ? <Intro setShowIntro={setShowIntro} /> : <Home />} 
    </div>
  );
}

export default App;
