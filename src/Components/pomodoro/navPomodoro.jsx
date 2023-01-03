import React, { useContext, useEffect } from "react";
import { context } from "../context/store";
import "../../stylesheets/pomodoro/navPomodoro.css";
import { MdSettings } from "react-icons/md";

const NavPomodoro = () => {
  const { setTime } = useContext(context);
  const { pomoSetting } = useContext(context);
  const { shortBreak } = useContext(context);
  const { longBreak } = useContext(context);
  const { pomoSession, setPomoSession } = useContext(context);
  const { setToggleSetting } = useContext(context);

  useEffect(() => {
    if (pomoSession == "Pomodoro") {
      setTime(pomoSetting * 60);
    } else if (pomoSession == "Short") {
      setTime(shortBreak * 60);
    } else if (pomoSession == "Long") {
      setTime(longBreak * 60);
    }
  }, [pomoSession, pomoSetting, shortBreak, longBreak]);

  return (
    <div className="nav-pomodoro-container">
      <ul>
        <li className={ (pomoSession == "Pomodoro") ? "activeNav" : ""} onClick={() => setPomoSession("Pomodoro")}>Pomo</li>
        <li className={ (pomoSession == "Short") ? "activeNav" : ""} onClick={() => setPomoSession("Short")}>Short</li>
        <li className={ (pomoSession == "Long") ? "activeNav" : ""} onClick={() => setPomoSession("Long")}>Long</li>
      </ul>
      <div
        className="setting-pomo-button"
        onClick={() => setToggleSetting(true)}
      >
        <MdSettings/>
      </div>
    </div>
  );
};

export default NavPomodoro;
