import React , {useState}from 'react';
import './App.css';
import Login from './components/login.js';
import Compose from "./components/compose.js"
import Example from './components/calender.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
function App() {
  const [user, setUser] = useState("y");
  return (
    <div className="App">
      {!user ? <><Login /></> :
      <>
        <Switch>
          <Route exact path="/" component={Example} />
          <Route path="/compose" component={Compose} />
        </Switch>
        </> }
    </div>
  );
}

export default App;
