import "../../stylesheets/habits/habits.css";

const Habit = ({habitTitle, habitDescription, habitId}) => {
  return (
    <div className="habit-container">
      <div className="description-habit-container">
        <div className="img-habit"></div>
        <div className="text-habit-container">
          <span className="title-habit">{habitTitle}</span>
          <span className="description-habit">
            {habitDescription}
          </span>
        </div>
      </div>
      <div className="controls-container">
        <span className="setting-habit">...</span>
        <div className="button-habit-plus">
          <span>+</span>
        </div>
        <div className="counter-habit-plus">+1</div>
      </div>
    </div>
  );
};

export default Habit;
