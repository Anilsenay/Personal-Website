import React from 'react';
import '../App.css';
import Title from '../components/Title';
import Whoami from '../components/Whoami';
import Contact from '../components/Contact';
import Header from '../components/Header';

function Home() {

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
  )
}

export default Home;
