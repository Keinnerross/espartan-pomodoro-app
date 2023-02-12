import React, { useState, useContext } from "react";
import { context } from "../context/store";
import "../../stylesheets/pomodoro/settingPomodoro.css";

const SettingPomodoro = ({ changeSound }) => {
  const { pomoSetting, setPomoSetting } = useContext(context);
  const { shortBreak, setShotBreak } = useContext(context);
  const { longBreak, setLongBreak } = useContext(context);
  const { toggleSetting, setToggleSetting } = useContext(context);
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
    setToggleSetting(!toggleSetting);
  }

  const settingShow = () => {
    setToggleSetting(!toggleSetting);
  };
  return (
    <div className={toggleSetting ? "setting-main" : "setting-main hidden"}>
      <div className="setting-container">
        <div className="title-close-setting">
          <h4>Time Setting</h4>
          <span onClick={() => settingShow()}>x</span>
        </div>

        <form onSubmit={updateSetting}>
          <div className="value-pomos">
            <label>Pomodoro</label>
            <input
              defaultValue={pomoSetting}
              onChange={(e) => {
                setInputValue({ ...inputValue, pomodoro: e.target.value });
                console.log(inputValue);
              }}
            />
          </div>
          <div className="value-pomos">
            <label>Short Break</label>
            <input
              type="number"
              defaultValue={shortBreak}
              onChange={(e) => {
                setInputValue({ ...inputValue, short: e.target.value });
                console.log(inputValue);
              }}
            />
          </div>
          <div className="value-pomos">
            <label>Long Break</label>
            <input
              defaultValue={longBreak}
              type="number"
              onChange={(e) => {
                setInputValue({ ...inputValue, long: e.target.value });
                console.log(inputValue);
              }}
            />
          </div>

          <select onChange={(e) => changeSound(e.target.value)}>
            <option value="1">Epic 1</option>
            <option value="2">Epic 2</option>
            <option value="3">Epic 3</option>
            <option value="0">Clasic Alarm</option>
          </select>
          <button type="submit">DONE</button>
        </form>
      </div>
    </div>
  );
};

export default SettingPomodoro;
