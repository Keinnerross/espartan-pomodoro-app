import React, { useContext, useEffect } from "react";
import { context } from "../context/store";
import "../../stylesheets/levels/levelNotice.css";

const LevelNotice = () => {
  const { currentLevel, setCurrentLevel } = useContext(context);
  const { allLevels } = useContext(context);
  const { levelPercentage, setLevelPercentage } = useContext(context);
  const { completedTask } = useContext(context);

  useEffect(() => {
    if (levelPercentage >= 100) {
      setLevelPercentage(0);
      setCurrentLevel(currentLevel + 1);
    }
  }, [levelPercentage]);

  return (
    <div className="level-notice-container">
      <div className="next-level-img"></div>

      <div className="level-notice-section">
        <div className="info-level-container">
          <div className="level-info">
            Próximo Nivel {allLevels[currentLevel + 1]}
          </div>
          <div className="level-percentage">{levelPercentage}%</div>
        </div>
        <div className="completed-task-container">
          {completedTask} completed task
        </div>
      </div>
    </div>
  );
};

export default LevelNotice;
