import "../../stylesheets/habits/habitsView.css";
import Habit from "./habit";
import AddHabit from "./addHabit";
import { useState } from "react";
const HabitsView = () => {
  const [habitArr, setHabitArr] = useState([]);

  const addNewHabit = (habit) => {
    const habitUpdate = [habit, ...habitArr];
    setHabitArr(habitUpdate);
  };

  return (
    <div className="habits-view-container">
      <span className="title-container-habit">Habits</span>
      <div className="habit-list">
        <AddHabit onSubmit={addNewHabit} />
        {habitArr.map((habit) => (
          <Habit
            habitTitle={habit.title}
            habitDescription={habit.description}
            key={habit.id}
          ></Habit>
        ))}
      </div>
      <p>? Habit Explained</p>
    </div>
  );
};

export default HabitsView;
