import React from "react";
import "./App.css";
import Posts from "./containers/Posts/Posts.js";
import { Header } from "./components/Header/Header.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Posts></Posts>
      </main>
    </div>
  );
}

export default App;
