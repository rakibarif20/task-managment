import { createSlice } from "@reduxjs/toolkit";

const taskList = []

const initialState = {
  allTask: true,
  addTask: false,
  updateTask: false,
  taskList,
  viewTask: false,
  selectViewTask:''
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setAllTask: (state, action) => {
      state.allTask = action.payload;
    },
    setAddTask: (state, action) => {
      state.addTask = action.payload;
    },
    setUpdateTask: (state, action) => {
      state.updateTask = action.payload;
    },
    setTaskList : (state,action)=>{
      state.taskList = action.payload
    },
    setViewTask : (state,action)=>{
      state.viewTask = action.payload
    },
    setSelectViewTask : (state,action)=>{
      state.selectViewTask= action.payload
    },
    setSpecificTask : (state,action)=>{
      state.specificTask.push(action.payload)
    },

  },
});

export const { setAddTask, setAllTask, setUpdateTask,setTaskList,setViewTask,setSelectViewTask,setSpecificTask } = taskSlice.actions;
export default taskSlice.reducer;
