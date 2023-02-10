import "../../stylesheets/habits/habitsView.css";
import Habit from "./habit";
import AddHabit from "./addHabit";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const HabitsView = () => {
  const [habitArr, setHabitArr] = useState([]);
  const [inputHabitValue, setInputHabitValue] = useState("");

  const addNewHabit = (habit) => {
    const habitUpdate = [habit, ...habitArr];
    setHabitArr(habitUpdate);
  };

  const editTitleHabit = (value, id) => {
    habitArr.forEach((habit) => {
      if (habit.id == id) {
        habit.title = value;
      }
    });
    setInputHabitValue(value);
  };

  const delHabit = (id) => {
    if (window.confirm("¿Do you want delete this habit?")) {
      const updateHabit = habitArr.filter((habit) => habit.id != id);
      setHabitArr(updateHabit);
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <div className="habits-view-container">
      <span className="title-container-habit">Habits</span>
      <AddHabit onSubmit={addNewHabit} />

      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }
          setHabitArr((prevHabitArr) =>
            reorder(prevHabitArr, source.index, destination.index)
          );
        }}
      >
        {/***/}

        <Droppable droppableId="habitArr">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {habitArr.map((habit, i) => (
                <Draggable
                  key={habit.id}
                  draggableId={habit.id.toString()}
                  index={i}
                >
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                    >
                      <Habit
                        habitTitle={habit.title}
                        habitDescription={habit.description}
                        idHabit={habit.id}
                        key={habit.id}
                        inputChange={editTitleHabit}
                        delHabit={delHabit}
                      ></Habit>
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
        {/***/}
      </DragDropContext>

      <p>? Habit Explained</p>
    </div>
  );
};

export default HabitsView;
