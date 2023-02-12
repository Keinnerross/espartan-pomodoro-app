import React, { useContext, useEffect, useState } from "react";
import epic1 from "../../Audio/Pomodoro/Alarms/Epic_1.mp3";
import epic2 from "../../Audio/Pomodoro/Alarms/Epic_2.wav";
import epicShort from "../../Audio/Pomodoro/Alarms/Epic_short.wav";
import clasicSound from "../../Audio/Pomodoro/Alarms/Clasic_alarm.wav";

import { context } from "../context/store";

const CycleCounter = ({ soundSelect }) => {
  const [soundState, setSoundState] = useState(new Audio(epic1));
  const { time, setTime } = useContext(context);
  const { pomoSetting } = useContext(context);
  const { shortBreak } = useContext(context);
  const { longBreak } = useContext(context);
  const { setIsActive } = useContext(context);
  const { pomoSession, setPomoSession } = useContext(context);
  const { cyclePomo, setCyclePomo } = useContext(context);

  useEffect(() => {
    soundState.volume = 1;

    switch (soundSelect) {
      case "0":
        setSoundState(new Audio(clasicSound));
        break;
      case "1":
        setSoundState(new Audio(epic1));
        break;
      case "2":
        setSoundState(new Audio(epic2));
        break;
      case "3":
        setSoundState(new Audio(epicShort));
        break;
    }

    if (time == 0 && pomoSession == "Pomodoro" && cyclePomo < 3) {
      soundState.play();
      setTime(shortBreak * 60);
      setCyclePomo((cyclePomo) => cyclePomo + 1);
      setIsActive(false);
      setPomoSession("Short");
    } else if (time == 0 && pomoSession == "Short") {
      soundState.play();
      setTime(pomoSetting * 60);
      setIsActive(false);
      setPomoSession("Pomodoro");
    } else if (time == 0 && pomoSession == "Pomodoro" && cyclePomo > 3) {
      soundState.play();
      setTime(longBreak * 60);
      setIsActive(false);
      setPomoSession("Long");
      setCyclePomo(0);
    } else if (time == 0 && pomoSession == "Long") {
      soundState.play();
      setTime(pomoSetting * 60);
      setIsActive(false);
      setPomoSession("Pomodoro");
    }
  }, [time]);

  return <div>{cyclePomo}</div>;
};

export default CycleCounter;
