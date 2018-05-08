import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../action';
import { Link } from "react-router-dom";

class ArticleList extends Component {
  componentWillMount() {
    this.props.fetchArticles()
  }

  render() {
    const { articles } = this.props;

    return(
      articles.length ? articles.map((article, index) => {
        return (
          <div key={index} className="article-preview">
            <div className="article-meta">
              <a href="profile.html">
                <img alt={article.author.username} src={article.author.image} />
              </a>
              <div className="info">
                <a href="" className="author">{article.author.username}</a>
                <span className="date">{new Date(article.createdAt).toDateString()}</span>
              </div>
              <button className="btn btn-outline-primary btn-sm pull-xs-right">
                <i className="ion-heart"></i> {article.favoritesCount}
              </button>
            </div>
            
            <Link to={`/article/${article.slug}`} className="preview-link">            
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <span>Read more...</span>
              {                
                <ul className="tag-list">
                  {
                    article.tagList[0] && article.tagList.map((item, index) => {
                      return (
                        <li key={index} className="tag-default tag-pill tag-outline">
                          {item}
                        </li>
                      )
                    })
                  }
                </ul>                
              }              
            </Link>         
          </div>
        )
      }) : <div className="article-preview">Loading articles...</div>
    )
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles
})

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);