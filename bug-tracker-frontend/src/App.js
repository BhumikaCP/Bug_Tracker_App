import React from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Bug Tracker</h1>
      <BugForm />
      <BugList />
    </div>
  );
}

export default App;
