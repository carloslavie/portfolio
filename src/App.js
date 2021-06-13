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
        <Hero />
        <div className="2x1:container mx-20">
            <Switch>
              <Route exact path="/" component={inicio} />
            </Switch>
        </div>
    </Router>
    
  );
}

export default App;
