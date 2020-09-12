import React, { createContext, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Book from './components/Book/Book';

export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/home" >
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/book/:bedType">
          <Book />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
