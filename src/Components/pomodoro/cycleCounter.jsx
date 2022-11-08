import React, { useState, useContext, useEffect } from "react";
import { context } from "../context/store";

const CycleCounter = () => {
  const { time, setTime } = useContext(context);
  const { pomoSetting } = useContext(context);
  const { shortBreak } = useContext(context);
  const { longBreak } = useContext(context);
  const { isActive, setIsActive } = useContext(context);
  const { pomoSession, setPomoSession } = useContext(context);
  const { cyclePomo, setCyclePomo } = useContext(context);


  useEffect(() => {
    if (time == 0 && pomoSession == "Pomodoro" && cyclePomo < 3) {
      setTime(shortBreak * 60);
      setCyclePomo((cyclePomo) => cyclePomo + 1);
      setIsActive(false);
      setPomoSession("Short");
      alert("Pomo completado");
    }
    else if (time == 0 && pomoSession == "Short") {
      setTime(pomoSetting * 60);
      setIsActive(false);
      setPomoSession("Pomodoro");
    }else if ( time == 0 && pomoSession == "Pomodoro" && cyclePomo > 3){
      setTime(pomoSetting * 60);
      setIsActive(false);
      setPomoSession("Long");
      setCyclePomo(0);
    }else if(time == 0 && pomoSession == "Long"){
      setTime(pomoSetting * 60);
      setIsActive(false);
      setPomoSession("Pomodoro");
    }
  }, [time]);

  return <div>{cyclePomo}</div>;
};

export default CycleCounter;
