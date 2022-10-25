import { BsFillPlayFill, BsStopFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import { context } from "../context/store";
import React, { useState, useContext, useEffect } from "react";
import NavPomodoro from "./navPomodoro";
import CycleCounter from "./cycleCounter";
import "../../stylesheets/pomodoro/pomoCounter.css";

const PomoCounter = () => {
  const { time, setTime } = useContext(context);
  const { isActive, setIsActive } = useContext(context);
  const { pomoSetting } = useContext(context);

  const showTime = (time) => {
    const min = parseInt(time / 60);
    const sec = parseInt(time % 60);
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const [timeId, setTimeId] = useState(0);

  /*State Bar-Progress Pomodoro */
  const barProgress  = ((time / 60) //*ojo */ 
  / pomoSetting) * 100;

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
    document.title = `${showTime(time)}`;
  })();
  /****************** */
  return (
    <div className="pomodoro-container">
      <div className="pomoNav">
        <NavPomodoro></NavPomodoro>
      </div>
      <div className="pomo-container">{showTime(time)}</div>
      <div className="buttons-pomo-container">
        <div className="button-pomo rest">
          <GrPowerReset />
        </div>
        <div
          className="button-pomo play"
          onClick={() => setIsActive(!isActive)}
        >
          {" "}
          <BsFillPlayFill />
        </div>
        <div className="button-pomo stop">
          <BsStopFill />
        </div>
      </div>
      <span className="cycle-view">
        <CycleCounter />
        /4
      </span>
      <span>Focus Warrior</span>
      {barProgress}
      <div className="pomo-bar-container">
        <div className="pomo-bar-progress" style={{ width: `${barProgress}%` }}></div>
      </div>
    </div>
  );
};

export default PomoCounter;
