import { createStore } from "redux";
const h1 = document.querySelector("h1");
const addButton = document.getElementById("add");
const minusButton = document.getElementById("minus");

const reducer = (count = 1, action) => {
  if (action.type === "minus") {
    count = count - 1;
  } else if (action.type === "add") {
    count = count + 1;
  }
  return count;
};

const countStore = createStore(reducer);

const handleAddClick = () => {
  countStore.dispatch({ type: "add" });
  h1.innerHTML = countStore.getState();
};
const handleMinusClick = () => {
  countStore.dispatch({ type: "minus" });
  h1.innerHTML = countStore.getState();
};

addButton.addEventListener("click", handleAddClick);
minusButton.addEventListener("click", handleMinusClick);

h1.innerHTML = countStore.getState();
