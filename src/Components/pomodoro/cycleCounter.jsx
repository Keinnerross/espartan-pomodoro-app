import React, { useState, useContext, useEffect } from "react";
import song from "../../Audio/Pomodoro/Alarms/Skyrim_completed.mp3";
import { context } from "../context/store";

const CycleCounter = () => {
  const { time, setTime } = useContext(context);
  const { pomoSetting } = useContext(context);
  const { shortBreak } = useContext(context);
  const { longBreak } = useContext(context);
  const { setIsActive } = useContext(context);
  const { pomoSession, setPomoSession } = useContext(context);
  const { cyclePomo, setCyclePomo } = useContext(context);
  const sound = new Audio(song);

  useEffect(() => {
    if (time == 0 && pomoSession == "Pomodoro" && cyclePomo < 3) {
      sound.play();
      setTime(shortBreak * 60);
      setCyclePomo((cyclePomo) => cyclePomo + 1);
      setIsActive(false);
      setPomoSession("Short");
    } else if (time == 0 && pomoSession == "Short") {
      setTime(pomoSetting * 60);
      setIsActive(false);
      setPomoSession("Pomodoro");
    } else if (time == 0 && pomoSession == "Pomodoro" && cyclePomo > 3) {
      setTime(longBreak * 60);
      setIsActive(false);
      setPomoSession("Long");
      setCyclePomo(0);
    } else if (time == 0 && pomoSession == "Long") {
      setTime(pomoSetting * 60);
      setIsActive(false);
      setPomoSession("Pomodoro");
    }
  }, [time]);

  return <div>{cyclePomo}</div>;
};

export default CycleCounter;
