import React, { useContext } from "react";
import { context } from "../../Components/context/store";
import { BsFillPlayFill, BsStopFill, BsFillPauseFill } from "react-icons/bs";
import { MdOutlineRestartAlt } from "react-icons/md";

const ButtonsPomo = () => {
  const { setTime } = useContext(context);
  const { pomoSetting } = useContext(context);
  const { shortBreak } = useContext(context);
  const { longBreak } = useContext(context);
  const { pomoSession, setPomoSession } = useContext(context);
  const { isActive, setIsActive } = useContext(context);
  const { setCyclePomo } = useContext(context);

  const restButton = () => {
    if (window.confirm("¿are you sure?") == true) {
      if (pomoSession == "Pomodoro") {
        setTime(pomoSetting * 60);
      } else if (pomoSession == "Short") {
        setTime(shortBreak * 60);
      } else if (pomoSession == "Long") {
        setTime(longBreak * 60);
      }
    }

    setIsActive(false);
  };

  const stopButton = () => {
    if (window.confirm("¿are you sure?") == true) {
      setTime(pomoSetting * 60);
      setPomoSession("Pomodoro");
      setCyclePomo(0);
    }

    setIsActive(false);
  };

  return (
    <div className="buttons-pomo-container">
      <div className="button-pomo aux" onClick={() => restButton()}>
        <MdOutlineRestartAlt />
      </div>
      <div
        className={isActive ? "button-pomo play active" : "button-pomo play"}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? (
          <BsFillPauseFill size="25px" />
        ) : (
          <BsFillPlayFill size="30px" />
        )}
      </div>
      <div className="button-pomo aux" onClick={() => stopButton()}>
        <BsStopFill />
      </div>
    </div>
  );
};

export default ButtonsPomo;
