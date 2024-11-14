import React from "react";
import Header from "./Components/Header";
import Roadmap from "./Components/Roadmap";
import CodeEditor from "./Components/CodeEditor";
import MockInterview from "./Components/MockInterview";
import AIbot from "./Components/AIbot";
import PartFive from "./Components/PartFive";
import "./App.css"; // Include the general CSS for the app

function App() {
  return (
    <div id="main">
      <Header />
      <Roadmap />
      <CodeEditor />
      <MockInterview />
      <AIbot />
      <PartFive />
    </div>
  );
}

export default App;
