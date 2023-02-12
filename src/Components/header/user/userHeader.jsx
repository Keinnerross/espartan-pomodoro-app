import React, { useState, useContext, useEffect } from "react";
import UserMenu from "./userMenu";
import "../../../stylesheets/header/user/userHeader.css";
import { context } from "../../context/store";

const UserHeader = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const { userPicture } = useContext(context);
  const { userLogin, setUserLogin } = useContext(context);
  const { currentLevel } = useContext(context);
  const { allLevels } = useContext(context);
  const { data, setData } = useContext(context);

  const userJoin = (userData) => {
    setLoggedIn(true);
    setUserMenuOpen(false);
    setUserLogin(userData.userName);
  };

  useEffect(() => {
    const userLoginData = localStorage.getItem("userLogin");
    const storedDataL = localStorage.getItem("loggedIn");
    if (data) {
      setUserLogin(JSON.parse(userLoginData));
      setLoggedIn(JSON.parse(storedDataL));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  }, [data, loggedIn]);

  return (
    <div className="user-header-container">
      <div
        className="title-user-container"
        onMouseEnter={() => setUserMenuOpen(true)}
      >
        <span>{userLogin}</span>
        <span>{allLevels[currentLevel]}</span>
      </div>

      <picture className="profile-picture-container">
        <label htmlFor="input-user-picture">
          <div
            className="profile-picture"
            style={{ background: `url(${userPicture}) center center/cover` }}
          ></div>
        </label>
      </picture>
      <div
        className="user-menu-section"
        onMouseLeave={() => setUserMenuOpen(false)}
      >
        <UserMenu
          onSubmit={userJoin}
          loggedIn={loggedIn}
          toggle={userMenuOpen ? "" : "disable"}
        ></UserMenu>
      </div>
    </div>
  );
};

export default UserHeader;
