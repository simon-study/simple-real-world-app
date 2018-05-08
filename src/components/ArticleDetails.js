import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import { connect } from 'react-redux';
import marked from 'marked';

class ArticleDetails extends Component {
  componentWillMount() {
    this.props.fetchArticle(this.props.match.params.slug)
  }

  render() { 
    if (!this.props.article) {
      return null
    }

    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">   
            <h1>{this.props.article.title}</h1>
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
          </div>
        </div>  
        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">
              <div dangerouslySetInnerHTML={{ __html: marked(this.props.article.body, {sanitize: true}) }} />
              <ul className="tag-list">
                {
                  this.props.article.tagList.map(tag => {
                    return (
                      <li
                        className="tag-default tag-pill tag-outline"
                        key={tag}>
                        {tag}
                      </li>
                    );
                  })
                }
              </ul>
              <hr />
              <div className="article-actions">
              </div>
            </div>
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

