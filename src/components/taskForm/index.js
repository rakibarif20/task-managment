import React, { useEffect, useState } from "react";
import ReUseButton from "../reUseComponents/button";
import { useDispatch, useSelector } from "react-redux";
import { setAddTask, setAllTask, setTaskList, setUpdateTask } from "../../redux-toolkit/features/task/taskSlice";

import "./style.scss";

const TaskForm = () => {
  const [selectValue, setSelectValue] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const { allTask, addTask, updateTask, taskList, selectViewTask } = useSelector((state) => state.task);
  const { memberList } = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const cancelButton = () => {
    closeForm();
  };
  const closeForm = () => {
    dispatch(setAllTask(true));
    dispatch(setAddTask(false));
    dispatch(setUpdateTask(false));
  };

  const blankField = () => {
    setTaskTitle("");
    setTaskDetails("");
    setSelectValue("");
  };

  const hadleSelectedValue = (e) => {
    setSelectValue(e.target.value);
  };

  const createNewTask = (e) => {
    e.preventDefault();
    const newTaskItem = { id: taskList.length + 1, title: taskTitle, details: taskDetails, creator: selectValue };
    const allTaskList = [...taskList, newTaskItem];
    dispatch(setTaskList(allTaskList));
    closeForm();
    blankField();
  };

  const updateNewTask = (e) => {
    e.preventDefault();

    const allTaskItem = taskList.map((oldTaskList) => {
      if (oldTaskList.title === selectViewTask.title) {
        const everyTask = { ...oldTaskList };
        everyTask.title = taskTitle;
        everyTask.details = taskDetails;
        everyTask.creator = selectValue;
        oldTaskList = everyTask;
      }
      return oldTaskList;
    });

    dispatch(setTaskList(allTaskItem));
    closeForm();
    blankField();
  };
  const updatingTask = () => {
    setTaskTitle(selectViewTask.title);
    setTaskDetails(selectViewTask.details);
  };
  useEffect(() => {
    updatingTask();
  }, []);
  return (
    <div className="updateTask">
      <h3>{addTask ? `Create new task` : updateTask ? `Update task ` : null}</h3>
      <div className="updateTask__formArea">
        <form onSubmit={addTask ? createNewTask : updateNewTask}>
          <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
          <textarea value={taskDetails} onChange={(e) => setTaskDetails(e.target.value)}></textarea>
          <div className="updateTask__formArea__membersList">
            <div className="updateTask__formArea__membersList__assing">
              <h4>Assign to :</h4>
            </div>
            <div className="updateTask__formArea__membersList__nameList">
              {memberList && (
                <select value={selectValue} onChange={hadleSelectedValue}>
                  {memberList.map((member, index) => {
                    const { name } = member;
                    return (
                      <option value={name} key={index}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
          </div>
          <div className="updateTask__formArea__btnList">
            <ReUseButton buttonName="Cancel" onClick={cancelButton} />
            <ReUseButton buttonName={updateTask ? "Update" : "Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
