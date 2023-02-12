import "../../stylesheets/habits/habits.css";
import React, { useState, useRef } from "react";
const Habit = ({
  habitTitle,
  habitDescription,
  idHabit,
  inputChange,
  delHabit,
}) => {
  const [habitCompleted, setHabitCompleted] = useState(0);
  const [editActive, setEditActive] = useState(false);
  const plusHabit = () => {
    setHabitCompleted(habitCompleted + 1);
  };
  return (
    <div className="margin-habits-container">
      <div className="habit-container">
        <div
          className="habit-edit-container"
          onMouseLeave={() => setEditActive(false)}
        >
          <div className={editActive ? "edit-habit-card" : "hidden"}>
            <div className="edit-habit-section">
              <ul>
                <li>Edit Title</li>
                <li>Edit Description</li>
                <li>Create a Duplicate</li>
                <li onClick={() => delHabit(idHabit)}>Delete Habit</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="habit-section">
          <div className="description-habit-container">
            <div className="img-habit"></div>
            <div className="text-habit-container">
              <span className="title-habit">{habitTitle}</span>
              <span className="description-habit">{habitDescription}</span>
            </div>
          </div>
          <div className="controls-container">
            <span className="setting-habit" onClick={() => setEditActive(true)}>
              ...
            </span>
            <div className="button-habit-plus">
              <span
                onClick={() => {
                  plusHabit();
                }}
              >
                +
              </span>
            </div>
            <div className="counter-habit-plus">{`++${habitCompleted}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habit;
