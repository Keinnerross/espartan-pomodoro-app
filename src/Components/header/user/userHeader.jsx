import React, { useState } from "react";
import UserMenu from "./userMenu";
import "../../../stylesheets/header/user/userHeader.css";

const UserHeader = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userLogin, setUserLogin] = useState({
    userName: "User",
    password: 123,
  });

  const userJoin = (userData) => {
    setUserLogin({
      userName: userData.userName,
      password: userData.userPassword,
    });
    setLoggedIn(true);
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <div className="user-header-container">
      <div
        className="title-user-container"
        onClick={() => {
          setUserMenuOpen(!userMenuOpen);
        }}
      >
        <span>{userLogin.userName}</span>
        <span>Escudero</span>
      </div>
      <picture className="profile-picture"></picture>
      <UserMenu
        onSubmit={userJoin}
        loggedIn={loggedIn}
        toggle={userMenuOpen ? "" : "disable"}
      ></UserMenu>
    </div>
  );
};

export default UserHeader;
