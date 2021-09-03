import React, { Component } from 'react';
import Home from '../../Pages/Home';
import Login from '../../Pages/Login';
import Header from '../../Pages/Header';
import AboutUs from '../../Pages/AboutUs';
import Submit from '../../Pages/Submit';
import QuizPage from '../../Pages/QuizPage';
import SignUpPage from '../../Pages/SignUp';
import { PrivateRoute } from '../../services/SessionProvider';
import { QuestionProvider } from '../populators/QuestionProvider';


import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


const App = () => {



  return (
    <>
      <Header />

      <Switch>

        <Route path="/" exact={true}
          render={routerProps => (
            <Login {...routerProps} />
          )}
        />

        <Route path="/home/" exact={true}
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

        <Route path="/aboutus/" exact={true}
          render={routerProps => (
            <AboutUs {...routerProps} />
          )}
        />

        <QuestionProvider>


          <Route path="/quiz/" exact={true}
            render={routerProps => (
              <QuizPage {...routerProps} />
            )}
          />

        </QuestionProvider>


        <Redirect to="/" />

      </Switch>


    </>
  );
};




export default App;
