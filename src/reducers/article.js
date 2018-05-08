const article = (state = {} , action) => {
  switch (action.type) {
    case 'FETCH_ARTICLE_SUCCESS': 
      return {
        ...state,
        article: action.payload.article
      }
    default:
      return state;
  }
}

export default article;