import React from 'react';
import './App.css';
import Component from "./component"
import TimeOut from "./timeout"

function App() {
  return (
    <div className="App">
      <Component ms={2000}/>
      <TimeOut />
    </div>
  );
}

export default App;
