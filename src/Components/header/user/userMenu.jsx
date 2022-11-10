import { useState } from "react";
import "../../../stylesheets/header/user/userMenu.css";

const UserMenu = ({ onSubmit, toggle, loggedIn }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("Escudero");

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
          <div className="">
            <p>Signed in as</p>
            <span>{userName}</span>
          </div>
          <span>Sign out</span>
        </div>
      ) : (
        <form className="join-user-container" onSubmit={sendUser}>
          <label>Name</label>
          <input
            type="text"
            maxLength={12}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label>password</label>
          <input
            type="password"
            minLength={6}
            required
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
          <button type="submit">Join / Register</button>
        </form>
      )}
    </div>
  );
};

export default UserMenu;
