import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './supports/css/agency.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HacksawRidge from './components/HacksawRidge';
import Avengers from './components/Avengers';
import Fallout from './components/Fallout';

class App extends Component {
  render() {
    console.log("render dijalankan");
    return (
      <div className="App">
          <Header />
          <Route exact path="/" component ={HomePage}/>
          <Route path="/hacksawridge" component={HacksawRidge}/>
          <Route path="/avengers" component={Avengers}/>
          <Route path="/fallout" component={Fallout}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
      </div>
    );
  }
}

export default App;
