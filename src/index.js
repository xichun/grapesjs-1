import React from "react";
import ReactDOM from "react-dom";
import Editor from "./components/Editor";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Editor id="editor" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
