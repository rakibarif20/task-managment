import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../img/logo.png";
import { setLoggedUser, setUserList } from "../../../redux-toolkit/features/user/userSlice";
import ReUseButton from "../../reUseComponents/button";

import "./style.scss";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { userList, loggedUser } = useSelector((state) => state.user);
  const submitForm = (e) => {
    e.preventDefault();
    formValidation();
  };
  const formValidation = () => {
    const name = userName;
    const pass = password;
    if ((name == null || name == "") & (pass == null || pass == "")) {
      alert("Name and Password can not blank");
      return dispatch(setLoggedUser(false));
    } else if (name == null || name == "") {
      alert("Name can't be blank");
      return dispatch(setLoggedUser(false));
    } else if (name.startsWith((0 - 9))) {
      alert("Dont't  use number at frist");
      return dispatch(setLoggedUser(false));
    } else if (pass.length < 6) {
      alert("Password must be use min 6 chracters");
      return dispatch(setLoggedUser(false));
    }
    else if (userList.find(userItem => userItem.name === userName)){
      alert("Already used this name. Please use different name");
      return dispatch(setLoggedUser(false));
    }else if(userName.length < 3){
      alert('Minium using 4 charecters for user name')
    }
     else {
      const newUserName = { name: userName, password: password };
      const allUserNaneList = [...userList,newUserName]
      dispatch(setUserList(allUserNaneList));
      dispatch(setLoggedUser(true));
      setUserName("");
      setPassword("");
    }
  };
  return (
    <div className="loginPage">
      <div className="loginPage__logoArea">
        <div className="loginPage__logoArea__img">
          <img src={logo} alt="logo" />
        </div>
        <h3>Task management</h3>
      </div>
      <div className="loginPage__inputArea">
        <form onSubmit={submitForm}>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter name" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ReUseButton type="submit" buttonName="Submit" />
        </form>
      </div>
    </div>
  );
};
export default Login;
