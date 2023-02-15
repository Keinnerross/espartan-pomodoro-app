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

  const signOut = () => {
    const confirm = window.confirm("Are you sure to sign out?");
    if (loggedIn && confirm) {
      setLoggedIn(false);
      setUserMenuOpen(false);
      setUserLogin("User");
    }
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
        onClick={() => setUserMenuOpen(true)}
      >
        <span>{userLogin ? userLogin : "User"}</span>
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
          signOut={signOut}
        ></UserMenu>
      </div>
    </div>
  );
};

export default UserHeader;
