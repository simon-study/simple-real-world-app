import React, { Component } from 'react';
import Banner from './Banner';
import PopularTag from './PopularTag';
import ArticleList from './ArticleList';

class Home extends Component {
  render() {
    return(
      <div className="home-page">
        <Banner />
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link disabled" href="">Your Feed</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="">Global Feed</a>
                  </li>
                </ul>
              </div>      
              <ArticleList />     
            </div>

            <div className="col-md-3">
              <PopularTag />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;