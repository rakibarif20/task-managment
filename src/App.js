import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import Task from "./components/pages/tasks";
import Member from "./components/pages/members";
import Login from "./components/pages/login";
import { useSelector } from "react-redux";

const App = () => {
  const { loggedUser, userList } = useSelector((state) => state.user);


  return (
    <>
      {loggedUser ? (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task" element={<Task />} />
            <Route path="/member" element={<Member />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
