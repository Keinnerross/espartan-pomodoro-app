import React, { useState, useContext } from "react";
import { context } from "../Components/context/store";

const SettingPomodoro = () => {
  const { pomoSetting, setPomoSetting } = useContext(context);
  const { shortBreak, setShotBreak } = useContext(context);
  const { longBreak, setLongBreak } = useContext(context);
  const [inputValue, setInputValue] = useState({
    pomodoro: pomoSetting,
    short: shortBreak,
    long: longBreak,
  });

  function updateSetting(e) {
    e.preventDefault();
    setPomoSetting(inputValue.pomodoro);
    setShotBreak(inputValue.short);
    setLongBreak(inputValue.long);
    console.log("updadeado");
    console.log(inputValue.long);
  }
  return (
    <div className="setting-container">
      <form onSubmit={updateSetting}>
        <div className="value-pomos">
          <label>Pomodoro</label>
          <input
            type="number"
            defaultValue={pomoSetting}
            onChange={(e) => {
              setInputValue({ ...inputValue, pomodoro: e.target.value });
              console.log(inputValue);
            }}
          />
          <label>Short Break</label>
          <input
            type="number"
            defaultValue={shortBreak}
            onChange={(e) => {
              setInputValue({ ...inputValue, short: e.target.value });
              console.log(inputValue);
            }}
          />
          <label>Long Break</label>
          <input
            defaultValue={longBreak}
            type="number"
            onChange={(e) => {
              setInputValue({ ...inputValue, long: e.target.value });
              console.log(inputValue);
            }}
          />
          <button type="submit">DONE</button>
        </div>
      </form>
      <div>
        <br></br>
        {pomoSetting}
        <br></br>
        {shortBreak}
        <br></br>
        {longBreak}
      </div>
    </div>
  );
};

export default SettingPomodoro;
