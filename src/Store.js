import { createStore } from "redux";

const ADD = "Add";
const REMOVE = "Remove";

export const removeToDo = (id) => {
  return {
    type: REMOVE,
    id: id,
  };
};

export const addToDo = (text) => {
  return {
    type: ADD,
    text: text,
  };
};

const reducer = (state = [], action) => {
  if (action.type === ADD) {
    return [{ text: action.text, id: Date.now() }, ...state];
  } else if (action.type === REMOVE) {
    return state.filter((each) => each.id !== action.id);
  }
};

const store = createStore(reducer);

export default store;
