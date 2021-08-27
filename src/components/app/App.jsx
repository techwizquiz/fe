import React, { Component } from 'react';
import Home from '../../Pages/Home';
import Header from '../../Pages/Header';
import AboutUs from '../../Pages/AboutUs';
import Submit from '../../Pages/Submit';
import QuizPage from '../../Pages/QuizPage';
import SignUpPage from '../../Pages/SignUp';


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
              <SignUpPage {...routerProps} />
            )}
          />


          <Route path="/submit/" exact={true}
            render={routerProps => (
              <Submit {...routerProps} />
            )}
          />

          <Route path="/quiz/" exact={true}
            render={routerProps => (
              <QuizPage {...routerProps} />
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
