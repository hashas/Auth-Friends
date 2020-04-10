import React from 'react';

// setting up React Router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Components
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        {/* Testing Route components without Switch component */}

        {/* <Route component={Login} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} /> */}


        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
