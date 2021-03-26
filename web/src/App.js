import React from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import Sample from "./components/Sample";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomePage />
        {/* <Sample /> */}
      </header>
    </div>
  );
};
export default App;
