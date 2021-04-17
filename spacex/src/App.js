import React from 'react';
import './App.css';
import Home from "./component/Home";
import {Route, Router, useLocation} from 'react-router-dom';
import { createMemoryHistory } from 'history';


function App(props) {
  const history = createMemoryHistory();
  const {search} = useLocation();

  return (
    <div className="App">
      <Router history={history}>
          <Route path="/" exact render={() => ( <Home filter={search} /> )} />
      </Router>
    </div>
  );
}

export default App;
