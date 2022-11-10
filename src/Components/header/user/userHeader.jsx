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
  const [userPicture, setUserPicture] = useState(null);

  const userJoin = (userData) => {
    setUserLogin({
      userName: userData.userName,
      password: userData.userPassword,
    });
    setLoggedIn(true);
    setUserMenuOpen(!userMenuOpen);
  };

  const changePicture = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader);
    reader.onloadend = () => {
      setUserPicture(reader.result);
    };
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

      <picture className="profile-picture-container">
        <label htmlFor="input-user-picture">
          <div
            className="profile-picture"
            style={{ background: `url(${userPicture}) center center/cover` }}
          ></div>
        </label>
        <input
          id="input-user-picture"
          type="file"
          name="archivo"
          onChange={changePicture}
        />
      </picture>
      <UserMenu
        onSubmit={userJoin}
        loggedIn={loggedIn}
        toggle={userMenuOpen ? "" : "disable"}
      ></UserMenu>
    </div>
  );
};

export default UserHeader;
