import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects'

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
