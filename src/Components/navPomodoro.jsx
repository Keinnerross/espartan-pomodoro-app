import React, { useState, useContext, useEffect } from "react";
import { context } from "../Components/context/store";

const NavPomodoro = () => {
  const { time, setTime } = useContext(context);
  const { pomoSetting } = useContext(context);
  const { shortBreak } = useContext(context);
  const { longBreak } = useContext(context);
  const { pomoSession, setPomoSession } = useContext(context);

  useEffect(() => {
    if (pomoSession == "Pomodoro") {
      setTime(pomoSetting * 60);
    } else if (pomoSession == "Short Break") {
      setTime(shortBreak * 60);
    } else if (pomoSession == "Long Break") {
      setTime(longBreak * 60);
    }
  }, [pomoSession, pomoSetting, shortBreak, longBreak]);

  return (
    <div className="nav-pomodoro-container">
      <ul>
        <li onClick={() => setPomoSession("Pomodoro")}>Pomo</li>
        <li onClick={() => setPomoSession("Short Break")}>xd</li>
        <li onClick={() => setPomoSession("Long Break")}>Long</li>
      </ul>
    </div>
  );
};

export default NavPomodoro;
