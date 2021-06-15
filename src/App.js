import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import inicio from './pages/inicio';
import About from './components/about';
import Proyectos from './components/proyectos';


function App() {
  return (
    <Router>
        <Header />        
            <Switch>
              <Route exact path="/" component={inicio} />
              <Route exact path="/about" component={About} />
              <Route exact path="/proyectos" component={Proyectos} />
            </Switch>
    </Router>
    
  );
}

export default App;
