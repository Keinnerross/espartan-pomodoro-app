import BadgeLevel from "./BadgeLevel";
import LevelNotice from "./levelNotice";
import "../../stylesheets/levels/viewLevel.css"

const ViewLevel = () => {
  return (
    <div className="view-level-container">
      <div className="setting-level-button-container">
        <span>Q</span>
      </div>
      <BadgeLevel />
      <LevelNotice />
    </div>
  );
};

export default ViewLevel;
