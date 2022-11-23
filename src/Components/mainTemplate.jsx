import React, { useContext } from "react";
import { context } from "./context/store";
import "../stylesheets/mainTemplate.css";
import Logo from "./logo";
import HeaderTemplate from "./header/headerTemplate";
import PomoCounter from "./pomodoro/pomocounter";
import SettingPomodoro from "../Components/pomodoro/settingPomodoro";
import TaskView from "./tasks/taskView";
import HabitsView from "./habits/habitsView";
import ViewLevel from "./levels/viewLevel";

const MainTemplate = () => {
  const { userLogin } = useContext(context);

  return (
    <div className="all-container">
      {/* Configure modal menus */}
      <SettingPomodoro />
      <div className="tasks-logo-container">
        <Logo />
        <TaskView />
      </div>
      <div className="body-main-app-container">
        <header>
          <HeaderTemplate></HeaderTemplate>
        </header>
        <div className="body-app">
          <div className="title-greeting">Hello Warrior, {userLogin.userName}</div>
          <div className="content-body-app-container">
            <div className="record-missions-container">
              <ViewLevel />
            </div>
            <div className="pomo-habits-container">
              <div className="pomo-container">
                <PomoCounter />
              </div>
              <div className="habits-container">
                <HabitsView />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTemplate;
