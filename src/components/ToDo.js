import React from "react";
import { connect } from "react-redux";
import { removeToDo } from "../store";

function ToDo({ text, dispatchRemoveToDo }) {
  return (
    <li>
      {text} <button onClick={dispatchRemoveToDo}>DEL</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchRemoveToDo: (id) => dispatch(removeToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
