import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <Heading content='My heading' subheading='New value'/>
    </div>
  );
}

export default App;
