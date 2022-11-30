import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './style.scss'

const Home = () => {
  const {userList} = useSelector((state)=> state.user)
  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(userList))
  },[userList])
  return (
    <div className="home_page">
      <div className="home_page__content">
        <h4>Welcome to task management system</h4>
        <p>
          You can use some features using react like creating a username, and a task list and if you want you will be
          update task details and delete any item
        </p>
      </div>
      <div className="home_page__btnArea">
        <h4>Get started</h4>
        <div className="home_page__btnArea__btnList">
            <Link to='/task'> <button type="button" className="home_btn">tasks</button></Link>
            <Link to='/member'><button type="button" className="home_btn">members</button></Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
