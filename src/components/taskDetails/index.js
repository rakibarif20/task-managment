import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllTask,
  setSelectViewTask,
  setTaskList,
  setUpdateTask,
  setViewTask,
} from "../../redux-toolkit/features/task/taskSlice";
import ReUseButton from "../reUseComponents/button";

import "./style.scss";

const TaskDetails = () => {
  const dispatch = useDispatch();
  const { selectViewTask, taskList } = useSelector((state) => state.task);

  const backToTask = () => {
    dispatch(setAllTask(true));
    dispatch(setViewTask(false));
    dispatch(setSelectViewTask(""));
  };

  const editTask = () => {
    dispatch(setUpdateTask(true));
    dispatch(setViewTask(false));
    dispatch(setAllTask(false));
  };

  const deteleTask = () => {
    const filteredTask = taskList.filter((task) => {
      return task.id != selectViewTask.id;
    });
    dispatch(setTaskList(filteredTask));
    backToTask();
  };
  return (
    <div className="taskDetails">
      <div className="taskDetails__header">
        <div className="taskDetails__header__backButton">
          <a href="#" onClick={backToTask}>
            Back
          </a>
        </div>
        <div className="taskDetails__header__editAndDelete">
          <ReUseButton onClick={editTask} buttonName="Edit" />
          <ReUseButton onClick={deteleTask} buttonName="Delete" />
        </div>
      </div>
      <div className="taskDetails__content">
        <h5>{selectViewTask.title}</h5>
        <p>{selectViewTask.details}</p>
      </div>
    </div>
  );
};

export default TaskDetails;
