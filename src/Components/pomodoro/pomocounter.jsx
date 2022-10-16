import { context } from "../context/store";
import React, { useState, useContext, useEffect } from "react";
import NavPomodoro from "./navPomodoro";
import CycleCounter from "./cycleCounter";
import "../../stylesheets/pomodoro/pomoCounter.css"

const PomoCounter = () => {
  const { time, setTime } = useContext(context);
  const { pomoSession } = useContext(context);
  const { isActive, setIsActive } = useContext(context);

  const showTime = `${parseInt(time / 60)}: ${parseInt(time % 60)}`;
  const [timeId, setTimeId] = useState(0);
  const [cycleCounter, setCycleCounter] = useState();

  useEffect(() => {
    let runningPomo = null;

    if (isActive) {
      runningPomo = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      setTimeId(runningPomo);
    } else {
      clearInterval(timeId);
      console.log(`soy yo ${timeId}`);
      console.log(`soy yo el interval${runningPomo}`);

      console.log("pausee");
    }
    console.log("effect");
  }, [isActive]);

  /* CYCLE SYSTEM VALIDATION */

  /*TO DINAMIC TITLE */
  (() => {
    document.title = `${showTime}`;
  })();
  /****************** */
  return (
    <div className="pomodoro-container">
      <div className="pomoNav">
        <NavPomodoro></NavPomodoro>
      </div>
      <div className="pomo-container">{showTime}</div>
      <div className="button-play" onClick={() => setIsActive(!isActive)}>
        
      </div>
      <br></br>
      <div className="pomo-session">{pomoSession}</div>
      <br></br>
      <CycleCounter></CycleCounter>
    </div>
  );
};

export default PomoCounter;
