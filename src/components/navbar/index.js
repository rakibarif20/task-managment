import React from "react";
import logo from "../../img/logo.png";
import { menuList } from "./utilis";
import { Link } from "react-router-dom";

import "./style.scss";
import LoggedUser from "../loggedUser";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {userList} = useSelector((state)=> state.user)
  const {name} = userList[userList.length-1]
  return (
    <div className="navbar">
      <nav>
        <div className="navbar__logoArea">
          <Link to='/'>
          <div className="navbar__logoArea__logo">
            <img src={logo} alt="logo" />
          </div>
          </Link>
          <h4>Task management</h4>
        </div>
        <div className="navbar__menu">
         <LoggedUser userName={name} />
          <ul>
            {menuList.map((item,index) => {
              const { name, url } = item;
              return (
                <li key={index}>
                  <Link to={url}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
