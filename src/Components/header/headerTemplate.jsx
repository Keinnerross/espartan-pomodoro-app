import React, { useContext } from "react";
import "../../stylesheets/header/headerTemplate.css";
import UserHeader from "./user/userHeader";
import { BsFillMoonFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";
import { context } from "../context/store";
import Logo from "../logo";

const HeaderTemplate = () => {
  const { setInfoPomodoro } = useContext(context);

  return (
    <>
      <div className="nav-mobile">
        <div className="logo-container-mobile">
          <span></span>
        </div>

        <div className="buger-menu">
          <RxHamburgerMenu size={28} />
        </div>
      </div>
      <div className="header-container">
        <div className="help-header-section">
          <div
            className="header-button-container"
            onClick={() => {
              setInfoPomodoro(true);
            }}
          >
            ?
          </div>
        </div>
        <div className="mid-header-section">
          <div className="lang-container">
            <select>
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          <div className="controls-header">
            <div className="header-button-container">
              <BsFillMoonFill />
            </div>
            <div className="header-button-container">
              <IoMdSettings />
            </div>
          </div>
        </div>
        <div className="margin-user">
          <div className="user-header-section">
            <UserHeader />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTemplate;
