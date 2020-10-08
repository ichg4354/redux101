import { createStore } from "redux";
import {
  createAction,
  createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const removeToDo = createAction("REMOVE");

// const reducer = (state = [], action) => {
//   if (action.type === addToDo.type) {
//     return [{ text: action.payload, id: Date.now() }, ...state];
//   } else if (action.type === removeToDo.type) {
//     return state.filter((each) => each.id !== action.payload);
//   }
// };

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [removeToDo]: (state, action) =>
//     state.filter((each) => each.id !== action.payload),
// });

export const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) =>
      state.filter((each) => each.id !== action.payload),
  },
});

console.log(toDos);

const store = configureStore({ reducer: toDos.reducer });

export default store;
