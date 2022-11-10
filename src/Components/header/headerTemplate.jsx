import "../../stylesheets/header/headerTemplate.css";
import UserHeader from "./user/userHeader";

const HeaderTemplate = () => {
  return (
    <div className="header-container">
      <div className="help-header-section">
        <div className="header-button-container">?</div>
      </div>
      <div className="mid-header-section">
        <div className="lang-container">
          <select>
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="controls-header">
          <div className="header-button-container">O</div>
          <div className="header-button-container">x</div>
        </div>
      </div>
      <div className="margin-user">
        <div className="user-header-section">
          <UserHeader />
        </div>
      </div>
    </div>
  );
};

export default HeaderTemplate;
