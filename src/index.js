import React from "react";
import ReactDom from "react-dom";
import RandomTree from "./tree";

const Home = () => {
  return (
    <div>
      <h1>Trees</h1>
      <h2>Ballarat Trees</h2>

      <div>Hang tight to learn about these trees.</div>
      <RandomTree />
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
