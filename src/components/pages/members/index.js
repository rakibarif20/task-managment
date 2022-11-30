import React from "react";
import AllMembers from "../../allMembers";
import MemberForm from "../../addMember";
import { useSelector } from "react-redux";
import ViewMember from "../../viewMember";

const Member = () => {
  const { allMember, addMember, editMember, viewMember } = useSelector((state) => state.member);
  return (
    <>
      {allMember && <AllMembers />}
      {(addMember || editMember) && <MemberForm />}
      {viewMember && <ViewMember />}
    </>
  );
};
export default Member;
