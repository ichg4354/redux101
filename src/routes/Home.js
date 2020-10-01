import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo, removeToDo } from "../store";

const Home = ({ toDos, dispatchToDo }) => {
  const [text, changeText] = useState("");
  const onSubmit = () => {
    dispatchToDo(text);
    changeText("");
  };
  const onChange = (e) => {
    changeText(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={text}></input>
        <button>ADD</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    toDos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchToDo: (text) => dispatch(addToDo(text)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
