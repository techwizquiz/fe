import React, { Component } from 'react';
import Home from '../../Pages/Home';
import Login from '../../Pages/Login';
import Header from '../../Pages/Header';
import AboutUs from '../../Pages/AboutUs';
import Submit from '../../Pages/Submit';
import QuizPage from '../../Pages/QuizPage';
import SignUpPage from '../../Pages/SignUp';
import { useSetWinLose } from '../../services/SessionProvider';
import styles from './App.css';
import { QuestionProvider } from '../populators/QuestionProvider';


import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


const App = () => {
  const winLose = useSetWinLose();


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
          <div className={
            winLose === 'win' ?
              styles.win : styles.lose
          }>

            <Route path="/quiz/" exact={true}
              render={routerProps => (
                <QuizPage {...routerProps} />
              )}
            />
          </div>
        </QuestionProvider>


        <Redirect to="/" />

      </Switch>

      <AboutUs />

    </>
  );
};




export default App;
