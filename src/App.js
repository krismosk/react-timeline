import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import Timestamp from './components/Timestamp';
import TimelineEvent from './components/TimelineEvent';

function App() {
  console.log(timelineData);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
        <Timeline/>
      </main>
    </div>
  );
}

export default App;
