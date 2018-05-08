import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HeaderLogout extends Component {
  render() {
    return(
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">conduit</a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-link">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default HeaderLogout;