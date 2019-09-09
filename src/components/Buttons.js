import React from "react";

const Buttons = props => {
  const { handler, quarterHandler } = props;
  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button
          className="homeButtons__touchdown"
          onClick={() => handler("Lions", 7)}
        >
          Home Touchdown
        </button>
        <button
          className="homeButtons__fieldGoal"
          onClick={() => handler("Lions", 3)}
        >
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          className="awayButtons__touchdown"
          onClick={() => handler("Tigers", 7)}
        >
          Away Touchdown
        </button>
        <button
          className="awayButtons__fieldGoal"
          onClick={() => handler("Tigers", 3)}
        >
          Away Field Goal
        </button>
        <button onClick={quarterHandler}>Change</button>
      </div>
    </section>
  );
};

export default Buttons;
