import React, { useState, useContext } from "react";
import { context } from "../Components/context/store";

const SettingPomodoro = () => {
  const { pomoSetting, setPomoSetting } = useContext(context);
  const { shortBreak, setShotBreak } = useContext(context);
  const { longBreak, setLongBreak } = useContext(context);

  function updateSetting() {
    setPomoSetting(pomoSetting);
    setShotBreak(shortBreak);
    setLongBreak(longBreak);
    console.log("updadeado");
  }
  return (
    <div className="setting-container">
      <form>
        <div className="value-pomos">
          <label>Pomodoro</label>
          <input
            type="number"
            onChange={(e) => {
              setPomoSetting(e.target.value);
            }}
          />
          <label>Short Break</label>
          <input
            type="number"
            onChange={(e) => {
              setShotBreak(e.target.value);
            }}
          />
          <label>Long Break</label>
          <input
            type="number"
            onChange={(e) => {
              setLongBreak(e.target.value);
            }}
          />
        </div>
        <div>
          <br></br>
          {pomoSetting}
          <br></br>
          {shortBreak}
          <br></br>
          {longBreak}
        </div>
      </form>
    </div>
  );
};

export default SettingPomodoro;
