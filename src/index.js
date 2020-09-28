import { createStore } from "redux";
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

const reducer = (state = [], action) => {
  let newState = [];
  if (action.type === "submit") {
    newState = [...state, { text: action.text }];
    return newState;
  } else if (action.type === "remove") {
    newState = [...state.filter((each) => each.text !== action.text)];
    return newState;
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const pushValueToUl = (value) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "❌";
  removeBtn.classList.add("remove");
  span.innerText = value;
  li.appendChild(span);
  li.appendChild(removeBtn);
  ul.appendChild(li);
  removeBtn.addEventListener("click", onRemoveBtnClick);
};

const resetForm = () => {
  input.value = "";
};

const onInputSubmit = (e) => {
  e.preventDefault();
  const inputValue = input.value;
  pushValueToUl(inputValue);
  store.dispatch({ type: "submit", text: inputValue });
  resetForm();
};

const onRemoveBtnClick = (e) => {
  const target = e.target.parentElement;
  const targetText = target.querySelector("span").innerText;
  target.remove();
  store.dispatch({ type: "remove", text: targetText });
};

const paintToDos = () => {
  const toDos = store.getState();
  console.log(toDos);
};

paintToDos();

form.addEventListener("submit", onInputSubmit);
