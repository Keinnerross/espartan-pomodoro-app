import "../../stylesheets/habits/addHabit.css";

import React, { useState, useRef, useEffect } from "react";

const AddHabit = ({ onSubmit }) => {
  const [addHabitForm, setAddHabitForm] = useState(false);
  const [habitValue] = useState({
    title: "",
    description: "",
    id: "",
  });
  const titleHabit = useRef(null);

  document.addEventListener("click", (e) => {
    if (e.target.className.includes("add-habit")) {
      setAddHabitForm(true);
    } else {
      setAddHabitForm(false);
    }
  });

  const sendHabit = (e) => {
    e.preventDefault();
    habitValue.id = parseInt(Math.random() * (50 - 1) + 1).toString();
    const newHabit = {
      id: habitValue.id,
      title: habitValue.title,
      description: habitValue.description,
    };
    onSubmit(newHabit);

    e.target.reset();
  };

  useEffect(() => {
    if (titleHabit) {
      titleHabit.current.focus();
    }
  }, [addHabitForm]);

  return (
    <div className="add-habit-container">
      <div
        className={
          addHabitForm ? "add-habit-section disable" : "add-habit-section"
        }
      >
        <div className="add-habit-button"></div>
      </div>
      <form
        className={addHabitForm ? "add-habit-form" : "add-habit-form disable"}
        onSubmit={sendHabit}
      >
        <label>Title</label>
        <input
          ref={titleHabit}
          className="add-habit-title"
          onChange={(e) => {
            habitValue.title = e.target.value;
          }}
        ></input>
        <label>Description</label>
        <input
          className="add-habit-description"
          onChange={(e) => {
            habitValue.description = e.target.value;
            console.log(habitValue);
          }}
        ></input>
        <button className="disable" type="submit">
          Add Habit
        </button>
      </form>
    </div>
  );
};

export default AddHabit;
