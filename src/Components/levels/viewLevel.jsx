import BadgeLevel from "./BadgeLevel";
import LevelNotice from "./levelNotice";
import "../../stylesheets/levels/viewLevel.css";
import { MdSettings } from "react-icons/md";

const ViewLevel = () => {
  return (
    <div className="view-level-container">
      <div className="setting-level-button-container"></div>
      <BadgeLevel />
      <LevelNotice />
    </div>
  );
};

export default ViewLevel;
