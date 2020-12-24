import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App.jsx';
import UserDetails from './UserDetails.jsx';
import Nav from './Components/Nav.jsx';

const Routes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' exact render={props => <App {...props} />} />
        <Route
          path='/users/:username'
          exact
          render={props => <UserDetails {...props} />}
        />

        {/* For wrong router like localhost/dswejhew */}
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
