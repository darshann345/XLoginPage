import React from "react";
import ReactDOM from "react-dom";
import Login from "./component/Login";
import "./styles.css";

function App() {
  return <Login />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
