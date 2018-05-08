import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import { connect } from 'react-redux';

class ArticleDetails extends Component {
  componentWillMount() {
    this.props.fetchArticle(this.props.match.params.slug)
  }

  render() { 
    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            
            {
              this.props.article && <h1>{this.props.article.title}</h1>
            }
            {
              this.props.article && 
              <div className="article-meta">
                <a>
                  <img src={this.props.article.author.image}/>
                </a>
                <div className="info">
                  <a className="author">
                    {this.props.article.author.username}
                  </a>
                  <span className="date">
                    {new Date(this.props.article.createdAt).toDateString()}
                  </span>
                </div>
              </div>
            }
          </div>
        </div>  
      </div>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article.article
})

const mapDispatchToProps = dispatch => ({
  fetchArticle: slug => dispatch({ type: 'FETCH_ARTICLE', slug })
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);

