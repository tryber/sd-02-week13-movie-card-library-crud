import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChampList from './pages/ChampList';
import ChampDetails from './pages/ChampDetails';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/:id" component={ChampDetails} />
          <Route path="/" component={ChampList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
