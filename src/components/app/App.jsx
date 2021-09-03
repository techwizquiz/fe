import React, { Component } from 'react';
import Home from '../../Pages/Home';
import Login from '../../Pages/Login';
import Header from '../../Pages/Header';
import AboutUs from '../../Pages/AboutUs';
import Submit from '../../Pages/Submit';
import QuizPage from '../../Pages/QuizPage';
import SignUpPage from '../../Pages/SignUp';
import ViewQuestions from '../../Pages/ViewQuestions';


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

        <QuestionProvider>
         

          <Route path="/quiz/" exact={true}
            render={routerProps => (
              <QuizPage {...routerProps} />
            )}
          />
         
        </QuestionProvider>

        <Redirect to="/" />

      </Switch>

      <AboutUs />

    </>
  );
};




export default App;
