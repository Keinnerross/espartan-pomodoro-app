import React, { useState, useEffect, useContext } from "react";
import { context } from "../context/store";
import "../../stylesheets/pomodoro/progressbar.css";

const ProgressBar = () => {
  const { time } = useContext(context);
  const { pomoSetting } = useContext(context);
  const { shortBreak } = useContext(context);
  const { longBreak } = useContext(context);
  const { pomoSession } = useContext(context);
  const [barValue, setBarValue] = useState(0);

  useEffect(() => {
    if (pomoSession == "Pomodoro") {
      setBarValue(pomoSetting);
    } else if (pomoSession == "Short") {
      setBarValue(shortBreak);
    } else if (pomoSession == "Long") {
      setBarValue(longBreak);
    }
  }, [time]);

  const barProgress = (time / 60 / barValue) * 100;

  return (
    <>
      <div
        className="pomo-bar-progress"
        style={{ width: `${barProgress}%` }}
      ></div>
    </>
  );
};

export default ProgressBar;
