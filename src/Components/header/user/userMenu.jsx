import React, { useState, useContext } from "react";
import { context } from "../../context/store";
import "../../../stylesheets/header/user/userMenu.css";

const UserMenu = ({ onSubmit, toggle, loggedIn }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("Escudero");
  const { setUserPicture } = useContext(context);

  const changePicture = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader);
    reader.onloadend = () => {
      setUserPicture(reader.result);
    };
  };
  const sendUser = (e) => {
    e.preventDefault();

    const dataUser = {
      userName: userName,
      userPassword: userPassword,
    };
    onSubmit(dataUser);
  };

  return (
    <div className={`user-menu-container ${toggle}`}>
      {loggedIn ? (
        <div className="user-settings">
          <span className="title-name-menu">Signed in as</span>
          <span>{userName}</span>
          <label>
            Change Picture
            <input
              id="input-user-picture"
              type="file"
              name="archivo"
              onChange={changePicture}
            />
          </label>
          <span>Sign out</span>
        </div>
      ) : (
        <form className="join-user-container" onSubmit={sendUser}>
          <input
            type="text"
            maxLength={12}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <button className="button-join" type="submit">Done</button>
        </form>
      )}
    </div>
  );
};

export default UserMenu;
