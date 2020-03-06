import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects'

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/projects' component={Projects}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
