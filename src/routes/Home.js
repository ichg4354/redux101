import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../store";
import ToDo from "../components/ToDo.js";

const Home = ({ toDos, dispatchToDo }) => {
  const [text, changeText] = useState("");
  const onSubmit = () => {
    dispatchToDo(text);
    changeText("");
  };
  const onChange = (e) => {
    changeText(e.target.value);
  };
  const sendToDos = (toDos) => {
    if (toDos) {
      return toDos.map((each, key) => <ToDo {...each} key={key} />);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={text}></input>
        <button>ADD</button>
      </form>
      <ul>{sendToDos(toDos)}</ul>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    toDos: state,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchToDo: (text) => dispatch(addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
