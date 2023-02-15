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
  const [cyclePomo, setCyclePomo] = useState(0);
  const [completedTask, setCompletedTask] = useState(0);
  const [allLevels, setAllLevels] = useState([
    "Novice",
    "Apprentice",
    "Light Infantry",
    "Hoplite Warrior",
  ]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [levelPercentage, setLevelPercentage] = useState(0);
  const [userPicture, setUserPicture] = useState(null);
  const [userLogin, setUserLogin] = useState("");

  {
    /*Helps Toggles*/
  }

  const [infoPomodoro, setInfoPomodoro] = useState(false);

  /*Local Data */
  const [data, setData] = useState([
    { userName: "User", password: 123, picture: null, tasks: [], habits: [] },
  ]);

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
        cyclePomo,
        setCyclePomo,
        completedTask,
        setCompletedTask,
        allLevels,
        setAllLevels,
        currentLevel,
        setCurrentLevel,
        levelPercentage,
        setLevelPercentage,
        userPicture,
        setUserPicture,
        userLogin,
        setUserLogin,
        infoPomodoro,
        setInfoPomodoro,
        data,
        setData,
      }}
    >
      {children}
    </context.Provider>
  );
};
