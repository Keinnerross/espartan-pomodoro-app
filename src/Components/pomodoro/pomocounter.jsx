import { context } from "../context/store";
import React, { useState, useContext, useEffect } from "react";
import NavPomodoro from "./navPomodoro";
import CycleCounter from "./cycleCounter";
import ProgressBar from "./progressbar";
import ButtonsPomo from "./buttonsPomo";
import "../../stylesheets/pomodoro/pomoCounter.css";

const PomoCounter = () => {
  const { time, setTime } = useContext(context);
  const { isActive } = useContext(context);

  const showTime = (time) => {
    const min = parseInt(time / 60);
    const sec = parseInt(time % 60);
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const [timeId, setTimeId] = useState(0);

  useEffect(() => {
    let runningPomo = null;

    if (isActive) {
      runningPomo = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      setTimeId(runningPomo);
    } else {
      clearInterval(timeId);
    }
    console.log("effect");
  }, [isActive]);

  /*TO DINAMIC TITLE */
  (() => {
    document.title = `${showTime(time)} - Focus Warrior! `;
  })();
  /****************** */
  return (
    <div className="pomodoro-container">
      <div className="pomoNav">
        <NavPomodoro></NavPomodoro>
      </div>
      <div className="pomo-time-container">{showTime(time)}</div>
      <ButtonsPomo />
      <span className="cycle-view">
        <CycleCounter />
        /4
      </span>
      <span>Focus Warrior</span>
      <div className="pomo-bar-container">
        <ProgressBar />
      </div>
    </div>
  );
};

export default PomoCounter;
