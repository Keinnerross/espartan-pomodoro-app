import React, { useContext } from "react";
import { Provider } from "./Components/context/store";
import PomoCounter from "./Components/pomocounter";
import SettingPomodoro from "./Components/settingPomodoro";

import "./App.css";

function App() {
  
  return (
    <Provider>
      <PomoCounter></PomoCounter>
      <SettingPomodoro></SettingPomodoro>
    </Provider>
  );
}

export default App;
