import React from "react";
import ReactDom from "react-dom";

const Home = () => {
  return <h1>Trees</h1>;
};

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
