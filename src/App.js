import React from "react";
import "./styles.css";
import Component1 from "./components/component1";
import { Component2 } from "./components/component2";

const App = (props) => {
  return (
    <>
      <h1>Hello World</h1>
      <Component1 />
      <Component2 />
    </>
  );
};

export default App;
