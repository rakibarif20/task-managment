import { createSlice } from "@reduxjs/toolkit";

const userList = [];
const initialState = {
  loggedUser: false,
  userList,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const { setLoggedUser, setUserList } = userSlice.actions;
export default userSlice.reducer;
