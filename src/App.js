import React from 'react';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Router>
          <div>Movie Card Library CRUD</div>
        </Router>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
