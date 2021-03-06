import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Book from './pages/Book';

import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/starred'><Starred /></Route>
        <Route exact path='/book/:id'><Book/></Route>
        <Route>
          <div>
            Page not Found
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
