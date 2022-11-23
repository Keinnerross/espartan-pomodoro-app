import "../../stylesheets/habits/habits.css";
import React, { useState } from "react";
const Habit = ({ habitTitle, habitDescription }) => {
  const [habitCompleted, setHabitCompleted] = useState(0);
  const plusHabit = () => {
    setHabitCompleted(habitCompleted + 1);
  };
  return (
    <div className="habit-container">
      <div className="description-habit-container">
        <div className="img-habit"></div>
        <div className="text-habit-container">
          <span className="title-habit">{habitTitle}</span>
          <span className="description-habit">{habitDescription}</span>
        </div>
      </div>
      <div className="controls-container">
        <span className="setting-habit">...</span>
        <div className="button-habit-plus">
          <span onClick={()=>{
            plusHabit();
          }}>+</span>
        </div>
        <div className="counter-habit-plus">{`++${habitCompleted}`}</div>
      </div>
    </div>
  );
};

export default Habit;
