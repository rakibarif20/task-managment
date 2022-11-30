import React, { useEffect, useState } from "react";

import ReUseButton from "../reUseComponents/button";
import {
  setAddMember,
  setAllMember,
  setEditMember,
  setMemberInputField,
  setMemberList,
  setMemberTaskList,
  setViewMember,
} from "../../redux-toolkit/features/member/memberSlice";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";

const AllMembers = () => {
  const dispatch = useDispatch();
  const { memberList } = useSelector((state) => state.member);
  const { taskList } = useSelector((state) => state.task);
  const addMember = () => {
    dispatch(setAddMember(true));
    dispatch(setAllMember(false));
    dispatch(setEditMember(false));
  };

  const showMember = (e) => {
    dispatch(setAddMember(false));
    dispatch(setAllMember(false));
    dispatch(setEditMember(false));
    dispatch(setViewMember(true));
    const showMemberName = e.target.innerHTML;
    dispatch(setMemberInputField(showMemberName));
    const taskListOfMember = taskList.filter((task) => {
      return task.creator === showMemberName;
    });
    dispatch(setMemberTaskList(taskListOfMember));
  };
  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(memberList));
    const reloadMembers = JSON.parse(localStorage.getItem("members"));
    if (reloadMembers) {
      setMemberList(reloadMembers);
    }
  }, []);
  return (
    <div className="allMembers">
      <h2>All members</h2>
      <div className="allMembers__memberItem">
        <div className="allMembers__memberItem__titleArea">
          <p>Here is all members:</p>
          <ReUseButton buttonName="Add New" onClick={addMember} />
        </div>
        <div className="allMembers__memberList">
          {memberList &&
            memberList.map((member, index) => {
              const { name, id } = member;

              let taskCount = taskList.filter((task) => {
                return task.creator === name;
              });

              return (
                <div className="allMembers__memberList__item" key={index}>
                  <span>{index + 1} .</span>
                  <p onClick={showMember}>{`${name}`}</p>
                  <p>{`${taskCount.length} ${taskCount.length < 1 ? "Task" : "Tasks"}`}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default AllMembers;
