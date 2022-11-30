import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "../features/member/memberSlice";
import taskSlice from "../features/task/taskSlice";
import userSlice from "../features/user/userSlice";
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  task: taskSlice,
  member: memberSlice,
  user: userSlice,
});
const persistedReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
export let persist = persistStore(store) 
