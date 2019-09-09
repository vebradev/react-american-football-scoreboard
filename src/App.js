//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import Buttons from "./components/Buttons";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(10);
  const [awayScore, setAwayScore] = useState(5);
  const [quarter, setQuarter] = useState(1);

 const handler = (name, score) => {
    if(name === "Lions") {
      setHomeScore(homeScore + score);
    } else if(name === "Tigers") {
      setAwayScore(awayScore + score);
    }
  }

  const quarterHandler = () => {
    if (quarter !== 4) {
      setQuarter(quarter + 1);
    } else {
      alert("Game over! Go home!");
    }
  }
  
  return (
    <>
      <ScoreBoard homeScore={homeScore} awayScore={awayScore} quarter={quarter} handler={handler} />
      <Buttons handler={handler} quarterHandler={quarterHandler} />
    </>
  );
}

export default App;
