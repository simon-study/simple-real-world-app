import { initialState } from './initialState';
import { FETCH_ARTICLES_SUCCESS } from '../constants/actionTypes';

const articles = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ARTICLES_SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        articles: action.payload.data.articles
      }
    default: 
      return state;
  }
}

export default articles;