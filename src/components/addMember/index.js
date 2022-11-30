import React, { useEffect, useState } from "react";
import ReUseButton from "../reUseComponents/button";
import {
  setMemberList,
  setAddMember,
  setAllMember,
  setEditMember,
  setMemberInputField,
} from "../../redux-toolkit/features/member/memberSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./style.scss";

const MemberForm = () => {
  const [member, setMember] = useState("");

  const { memberList, addMember, editMember, allMember, memberInputField } = useSelector((state) => state.member);
  const { taskList } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const addNewMember = (e) => {
    e.preventDefault();
    const newMemberName = { id: memberList.length + 1, name: member };
    const allMemberList = [...memberList, newMemberName];
    dispatch(setMemberList(allMemberList));
    dispatch(setMemberInputField(""));
    setMember("");
    navigator("/member", { replace: true });
    memberPage();
  };

  const stateCall = () => {
    if (!addMember) {
      setMember(memberInputField);
    }
  };

  const memberPage = () => {
    dispatch(setAddMember(false));
    dispatch(setAllMember(true));
    dispatch(setEditMember(false));
  };
  const cancelForm = () => {
    memberPage();
    setMember("");
  };
  const updateNewMember = (e) => {
    e.preventDefault();
    memberPage();

    const updatedMember = memberList.map((oldMember) => {
      if (oldMember.name === memberInputField) {
        const newMember = { ...oldMember };

        newMember.name = member;
        oldMember = newMember;
      }
      return oldMember;
    });

    dispatch(setMemberList(updatedMember));
  };

  useEffect(() => {
    stateCall();
  }, [addMember]);
  return (
    <div className="addMember">
      <h3>{addMember ? "Add member" : "Update Member"}</h3>
      <div className="addMember__formArea">
        <form onSubmit={addMember ? addNewMember : updateNewMember}>
          <input required type="text" value={member} onChange={(e) => setMember(e.target.value)} />
          <div className="addMember__formArea__btnList">
            <ReUseButton type="cancel" buttonName="Cancel" onClick={cancelForm} />
            <ReUseButton type="submit" buttonName={addMember ? "Submit" : "Update"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberForm;
