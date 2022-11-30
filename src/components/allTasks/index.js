import React, { useEffect } from "react";
import ReUseButton from "../reUseComponents/button";
import {
  setAddTask,
  setAllTask,
  setDetailsTask,
  setSelectViewTask,
  setSpecificTask,
  setUpdateTask,
  setViewTask,
} from "../../redux-toolkit/features/task/taskSlice";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";

const AllTask = () => {
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.task);

  const addNew = () => {
    dispatch(setAddTask(true));
    dispatch(setAllTask(false));
    dispatch(setUpdateTask(false));
  };
  const viewTask = (e) => {
    dispatch(setViewTask(true));
    dispatch(setAllTask(false));
    // dispatch(setSelectViewTask(e.target.value));
    const getTitle = e.target.innerHTML;
    const viewTaskItem = taskList.filter((creatorName) => {
      const { title, details, id } = creatorName;
      if (title === getTitle) {
        const item = { title, details, id };
        dispatch(setSelectViewTask(item));
      }
    });
    return;
  };
  const allCreateName = taskList.map((item) => item.creator);
  const counts = allCreateName.reduce(
    (acc, value) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1,
    }),
    {}
  );
  console.log("counts value :", counts);

  useEffect(() => {}, [taskList]);

  return (
    <div className="taskList">
      {console.log("alltask render")}
      <h2>All tasks</h2>
      <p>You will find all tasks here.</p>
      <div className="taskList__taskItem">
        <div className="taskList__taskItem__titleArea">
          <p>Here is all tasks:</p>
          <ReUseButton buttonName="Add New" onClick={addNew} />
          {/* <button onClick={addNew}>Add new</button> */}
        </div>
        <div className="taskList__taskItem__items">
          {taskList &&
            taskList.map((task, index) => {
              const { id, title, details, creator } = task;
              return (
                <div className="taskList__taskItem__items__item" key={index}>
                  <span>{index + 1}</span>
                  <h5 onClick={viewTask}>{title}</h5>
                  <p>{creator}</p>
                  {/* {creatorNameList.push.creator} */}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default AllTask;
