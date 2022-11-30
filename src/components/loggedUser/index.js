import React from 'react'
import ReUseButton from '../reUseComponents/button'
import { setLoggedUser } from '../../redux-toolkit/features/user/userSlice'
import { useDispatch,} from 'react-redux'

import './style.scss';
import { useNavigate } from 'react-router-dom';
import { setAddMember, setAllMember, setEditMember, setViewMember } from '../../redux-toolkit/features/member/memberSlice';
import { setAddTask, setAllTask, setUpdateTask, setViewTask } from '../../redux-toolkit/features/task/taskSlice';

const LoggedUser = ({userName}) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const closeEveryState = ()=>{
      dispatch(setViewMember(false));
      dispatch(setAddMember(false));
      dispatch(setEditMember(false));
      dispatch(setAllMember(true))
      dispatch(setAddTask(false));
      dispatch(setUpdateTask(false));
      dispatch(setViewTask(false))
      dispatch(setAllTask(true));
    }
    const logoutUser = ()=>{
        dispatch(setLoggedUser(false))
        closeEveryState();
        navigator('/', {replace : true})
    }
  return (
    <div className='loggedUser'>
      <p>{userName}</p>
      <ReUseButton type='text' buttonName='Log Out' onClick={logoutUser} />
    </div>
  )
}

export default LoggedUser
