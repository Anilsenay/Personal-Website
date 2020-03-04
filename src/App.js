import React from 'react';
import './App.css';
import Title from './Title';
import Whoami from './Whoami';
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <div className="header">
        <a href="/" className="header-links">/home</a>
        <a href="/" className="header-links">/projects</a>
      </div>
      <div className="container">
        <Title/>
        <hr/>
        <Whoami/>
        <hr/>
        <Contact/>
        <hr/>
      </div>
    </div>
  );
}

export default App;
