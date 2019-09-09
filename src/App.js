//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(10);
  const [awayScore, setAwayScore] = useState(5);
  const [quarter, setQuarter] = useState(1);

  // home helpers
  // const homeTouchdown = () => {
  //   setHomeScore(homeScore + 7);
  // }
  // const homeFieldGoal = () => {
  //   setHomeScore(homeScore + 3);
  // }

  // // away helpers
  // const awayTouchdown = () => {
  //   setAwayScore(awayScore + 7);
  // }
  // const awayFieldGoal = () => {
  //   setAwayScore(awayScore + 3);
  // }

  // stretch: handler function

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
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} handler={quarterHandler} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => handler("Lions", 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => handler("Lions", 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => handler("Tigers", 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => handler("Tigers", 3)}>Away Field Goal</button>
          <button onClick={quarterHandler}>Change</button>
        </div>
      </section>
    </>
  );
}

export default App;
