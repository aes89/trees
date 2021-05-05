import React from "react";
import ReactDom from "react-dom";

const Home = () => {
  return (
    <div>
      <h1>Trees</h1>
      <h2>Ballarat Trees</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
