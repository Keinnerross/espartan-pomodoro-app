import "../../stylesheets/habits/habitsView.css";
import Habit from "./habit";
import AddHabit from "./addHabit";
const HabitsView = () => {
  return (
    <div className="habits-view-container">
      <span className="title-container-habit">Habits</span>
      <div className="habit-list">
        <AddHabit/>
        <Habit></Habit>
        <Habit></Habit>
        <Habit></Habit>
        <Habit></Habit>
        <Habit></Habit>
      </div>
      <p>? Habit Explained</p>
    </div>
  );
};

export default HabitsView;
