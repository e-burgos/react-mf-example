import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div className="mb-4">From Remote MF <em>(remote)</em></div>
    <Counter title={"Title prop here!"} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
