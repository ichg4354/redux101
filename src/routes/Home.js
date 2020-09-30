import React, { useState } from "react";
import { connect } from "react-redux";
import store from "../Store";

function Home(props) {
  console.log(props);
  const [text, setText] = useState("");
  const onSubmit = () => {
    console.log(text);
    setText("");
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={text}></input>
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

const getCurrentState = (state, ownprops) => {
  console.log(state);
};

export default connect(getCurrentState)(Home);
