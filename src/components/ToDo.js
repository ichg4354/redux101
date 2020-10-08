import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeToDo } from "../store";
import { toDos } from "../store";

function ToDo({ text, dispatchRemoveToDo, id }) {
  console.log(dispatchRemoveToDo);
  return (
    <>
      <Link to={`/${id}`}>
        <li>{text}</li>
      </Link>
      <button onClick={dispatchRemoveToDo}>DEL</button>
    </>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchRemoveToDo: (id) => dispatch(toDos.actions.deleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
