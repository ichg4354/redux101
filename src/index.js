import { createStore } from "redux";
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const remove = document.getElementsByClassName("remove") || null;

const reducer = (state = [], action) => {
  let newState = [];
  if (action.type === "submit") {
    newState = [...state, { text: action.text, id: Date.now() }];
    return newState;
  } else if (action.type === "remove") {
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const pushValueToUl = (value) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const remove = document.createElement("button");
  remove.innerText = "❌";
  remove.classList.add("remove");
  span.innerText = value;
  li.appendChild(span);
  li.appendChild(remove);
  ul.appendChild(li);
  remove.addEventListener("click", onRemoveBtnClick);
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

form.addEventListener("submit", onInputSubmit);
