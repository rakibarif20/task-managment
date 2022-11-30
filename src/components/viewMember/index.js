import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddMember,
  setAllMember,
  setEditMember,
  setMemberInputField,
  setMemberList,
  setViewMember,
} from "../../redux-toolkit/features/member/memberSlice";

import ReUseButton from "../reUseComponents/button";

import "./style.scss";

const ViewMember = () => {
  const dispatch = useDispatch();
  const { memberInputField, memberTaskList, memberList } = useSelector((state) => state.member);

  const backToMember = () => {
    dispatch(setViewMember(false));
    dispatch(setAllMember(true));
    dispatch(setMemberInputField(""));
  };

  const editMember = () => {
    dispatch(setAllMember(false));
    dispatch(setAddMember(false));
    dispatch(setViewMember(false));
    dispatch(setEditMember(true));
  };

  const deteleMember = () => {
    const filterMember = memberList.filter((member) => {
      return member.name != memberInputField;
    });
    dispatch(setMemberList(filterMember));
    dispatch(setMemberInputField(""));
    backToMember();
  };
  return (
    <div className="memberDetails">
      <div className="memberDetails__header">
        <div className="memberDetails__header__backButton">
          <a href="#" onClick={backToMember}>
            Back
          </a>
        </div>
        <div className="memberDetails__header__editAndDelete">
          <ReUseButton onClick={editMember} buttonName="Edit" />
          <ReUseButton onClick={deteleMember} buttonName="Delete" />
        </div>
      </div>
      <div className="memberDetails__content">
        <h3>{memberInputField}</h3>
        <div className="memberDetails__content__tasklist">
          {memberTaskList &&
            memberTaskList.map((task, index) => {
              return (
                <p key={index}>
                  <span>{`${index + 1} . `}</span>
                  {task.title}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ViewMember;
