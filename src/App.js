import React from 'react';
import './App.css';
import Title from './Title';
import Whoami from './Whoami';
import Contact from './Contact';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
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
