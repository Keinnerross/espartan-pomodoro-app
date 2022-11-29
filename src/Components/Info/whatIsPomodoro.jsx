import React, { useContext } from "react";
import { context } from "../context/store";
import "../../stylesheets/helps/whaIsPhomodoro.css";

const WhatIsPomodoro = () => {
  const { infoPomodoro, setInfoPomodoro } = useContext(context);

  return (
    <div
      className={infoPomodoro ? "pomodoro-info-container" : "disable"}
      onClick={() => {
        setInfoPomodoro(false);
      }}
    >
      <div className="pomdoro-info-section">
        <h1>Pomodoro Tecnique</h1>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          esse voluptatum eaque iure fugiat tempore? Provident quaerat expedita
          molestias labore, aspernatur consectetur dolorum ex temporibus, in
          minus, eius nesciunt cupiditate!
        </article>
      </div>
    </div>
  );
};

export default WhatIsPomodoro;
