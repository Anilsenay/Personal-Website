import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects'

import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
// changed BrowserRouter to HashRouter
function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Route exact path='/' component={Home}/>
        <Route path='/projects' component={Projects}/>
      </HashRouter>
    </div>
  );
}

export default App;
