import React, { Component } from 'react';
import Home from '../../Pages/Home';
import Header from '../../Pages/Header';
import AboutUs from '../../Pages/AboutUs';
import Submit from '../../Pages/Submit';
import SignUp from '../../Pages/SignUp';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class App extends Component {
  render() {

    return (
      <>



        <Header />

        <Switch>

          <Route path="/" exact={true}
            render={routerProps => (
              <Home {...routerProps} />
            )}
          />

          <Route path="/signup/" exact={true}
            render={routerProps => (
              <SignUp {...routerProps} />
            )}
          />


          <Route path="/submit/" exact={true}
            render={routerProps => (
              <Submit {...routerProps} />
            )}
          />

          <Redirect to="/" />

        </Switch>

        <AboutUs />

      </>
    );
  }


}

export default App;
