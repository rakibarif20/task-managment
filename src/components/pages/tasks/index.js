import React from "react";
import AllTask from "../../allTasks";
import TaskForm from "../../taskForm";
import { useSelector } from "react-redux";

import './style.scss';
import TaskDetails from "../../taskDetails";

const Task = () =>{
    const {allTask, addTask, updateTask,viewTask} = useSelector((state)=> state.task);
return(
    <>
    { allTask && <AllTask />}
    { (addTask || updateTask) && <TaskForm />}
    {viewTask && <TaskDetails />}
    </>
)
}
export default Task;