import { createSlice } from "@reduxjs/toolkit";

const memberList = [];
const memberTaskList =[];
const initialState = {
  allMember: true,
  addMember: false,
  editMember: false,
  memberList,
  memberInputField: "",
  viewMember:false,
  memberTaskList,
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setAllMember: (state, action) => {
      state.allMember = action.payload;
    },
    setAddMember: (state, action) => {
      state.addMember = action.payload;
    },
    setMemberList: (state, action) => {
      state.memberList = action.payload;
    },
    setEditMember: (state, action) => {
      state.editMember = action.payload;
    },
    updateMember: (state, action) => {
      state.updateMember = action.payload;
      const { id, name } = action.payload;
      const updatedMember = state.memberList.filter((member) => member.id === id);
      if (updatedMember) {
        updatedMember[0] = name;
      }
    },
    setMemberInputField: (state, action) => {
      state.memberInputField = action.payload;
    },
    setViewMember : (state,action)=>{
      state.viewMember = action.payload
    },
    setMemberTaskList :(state,action)=>{
      state.memberTaskList = action.payload
    }
  },
});

export const { setAllMember, setAddMember, setEditMember, setMemberList, updateMember, setMemberInputField,setViewMember,setMemberTaskList } =
  memberSlice.actions;
export default memberSlice.reducer;
