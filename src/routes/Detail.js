import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h2>created At: {toDo?.id}</h2>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const id = ownProps.match.params.id;
  return { toDo: state?.find((each) => each.id === parseInt(id)) };
};

export default connect(mapStateToProps, null)(Detail);
