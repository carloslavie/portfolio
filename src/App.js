import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import inicio from './pages/inicio';


function App() {
  return (
    <Router>
        <Header />        
            <Switch>
              <Route exact path="/" component={inicio} />
            </Switch>
    </Router>
    
  );
}

export default App;
