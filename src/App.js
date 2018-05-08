import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'
// import HeaderLogin from './components/HeaderLogin';
import HeaderLogout from './components/HeaderLogout';
import Footer from './components/Footer';
import Home from './components/Home';
import Settings from './components/Settings';
import LoginRegister from './components/LoginRegister';
import ArticleDetails from './components/ArticleDetails';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderLogout />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/signup" component={LoginRegister} />
          <Route path="/article/:slug" component={ArticleDetails} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
