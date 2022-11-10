import "../stylesheets/mainTemplate.css";
import Logo from "./logo";
import PomoCounter from "./pomodoro/pomocounter";
import SettingPomodoro from "../Components/pomodoro/settingPomodoro"
import TaskView from "./tasks/taskView";
import HeaderTemplate from "./header/headerTemplate";
const MainTemplate = () => {
  return (
    <div className="all-container">
      {/* Configure modal menus */}
      <SettingPomodoro/> 
      <div className="tasks-logo-container">
        <Logo/>
        <TaskView/>
      </div>
      <div className="body-main-app-container">
        <header>
          <HeaderTemplate></HeaderTemplate>
        </header>
        <div className="body-app">
            <div className="title-greeting">Hello Warrior, Keinner Ross</div>
            <div className="content-body-app-container">
                <div className="record-missions-container"></div>
                <div className="pomo-habits-container">
                    <div className="pomo-container">
                        <PomoCounter/>
                    </div>
                    <div className="habits-container"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainTemplate;
