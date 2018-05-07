import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pagination extends Component {
  handleSetPage = (e, page) => {
    e.preventDefault();
    this.props.handleSetPage(page);
  }  

  render() {
    const paginationList = [];
    
    for (let i = 0; i < Math.ceil(this.props.articlesCount/10); i++) {
      paginationList.push(i);
    }  

    console.log(this.props);

    return (
      <ul className="pagination">
        {
          paginationList.length && paginationList.map((page, index) => {
            return (
              <li key={index} className={this.props.currentPage === page ? 'page-item active' : 'page-item'} onClick={(e) => this.handleSetPage(e, page)}>
                <a className="page-link" href="">{page + 1}</a>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  articlesCount: state.articles.articlesCount,
  currentPage: state.articles.currentPage
})

const mapDispatchToProps = dispatch => ({
  handleSetPage: (page) => dispatch({type: 'FETCH_ARTICLES_OFFSET', page})
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);