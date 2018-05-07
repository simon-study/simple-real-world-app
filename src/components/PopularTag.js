import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  componentWillMount() {
    this.props.fetchTags()
  }
  
  render() {
    return(
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
          {
            this.props.tags.length ? this.props.tags.map((tag, index) => {
              return (
                <a key={index} href="" className="tag-pill tag-default">{tag}</a>
              )
            }) : <div>Loading tags...</div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tags: state.tags.tags
})

const mapDispatchToProps = dispatch => {
  return {
    fetchTags: () => {
      dispatch({type: 'FETCH_TAGS'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);