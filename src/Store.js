import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const removeToDo = createAction("REMOVE");

const reducer = (state = [], action) => {
  if (action.type === addToDo.type) {
    return [{ text: action.payload, id: Date.now() }, ...state];
  } else if (action.type === removeToDo.type) {
    return state.filter((each) => each.id !== action.payload);
  }
};

const store = createStore(reducer);

export default store;
