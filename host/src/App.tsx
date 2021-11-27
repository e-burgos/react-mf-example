import React from "react";
import ReactDOM from "react-dom";

import Counter from "remote/Counter";
import FetchData from "remote_fetch_mf/FetchData";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div className="mb-2">From Host</div>
    <Counter title={"Remote Counter MF"} />
    <div className="mt-5"/>
    <FetchData title={"Remote Fetch MF"} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
