import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDo, dispatchAddToDo }) {
  const [text, changeText] = useState("");
  const onSubmit = (e) => {
    dispatchAddToDo(text);
    changeText("");
  };
  const sendToDos = () => {
    if (toDo) {
      return toDo.map((each, key) => <ToDo {...each} key={key} />);
    }
  };
  const onChange = (e) => changeText(e.target.value);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>ADD</button>
      </form>
      <ul>{sendToDos()}</ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return { toDo: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddToDo: (text) => dispatch(addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
