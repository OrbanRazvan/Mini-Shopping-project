import React, { useEffect } from 'react';
import "./App.css";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { useShoppingContext } from './Provider';
import Shorts from './Components/Shorts/Shorts';
import Boots from './Components/Boots/Boots';

function App() {

  const [{ }, dispatch] = useShoppingContext();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/shorts">
            <Navbar />
            <Shorts />
          </Route>
          <Route path="/boots">
            <Navbar />
            <Boots />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;