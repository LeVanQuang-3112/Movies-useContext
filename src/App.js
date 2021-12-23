import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';


function App() {

  return (
    <div className="App">
         <Router>
             <Header/>
           <div className="container">
             <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/movie/:movieId">
              <MovieDetail/>
            </Route>
             </Switch>
           </div>
         </Router>
    </div>
  );
}

export default App;
