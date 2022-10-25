import React, { useState, createContext } from "react";

export const context = createContext();

export const Provider = ({ children }) => {
  const [time, setTime] = useState("300");
  const [pomoSetting, setPomoSetting] = useState(25);
  const [shortBreak, setShotBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [pomoSession, setPomoSession] = useState("Pomodoro");
  const [isActive, setIsActive] = useState(false);
  const [toggleSetting, setToggleSetting] = useState(false);

  return (
    <context.Provider
      value={{
        time,
        setTime,
        pomoSetting,
        setPomoSetting,
        shortBreak,
        setShotBreak,
        longBreak,
        setLongBreak,
        pomoSession,
        setPomoSession,
        isActive,
        setIsActive,
        toggleSetting,
        setToggleSetting,
      }}
    >
      {children}
    </context.Provider>
  );
};
