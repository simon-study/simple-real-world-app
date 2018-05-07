import { initialState } from './initialState';
import { 
  FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_OFFSET_SUCCESS, FETCH_ARTICLES_OFFSET_FAILURE
} from '../constants/actionTypes';

const articles = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      }
    case FETCH_ARTICLES_FAILURE:
      break
    case FETCH_ARTICLES_OFFSET_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        articles: action.payload.data.articles,
        currentPage: action.payload.page
      }
    case FETCH_ARTICLES_OFFSET_FAILURE:
      break
    default: 
      return state;
  }
}

export default articles;