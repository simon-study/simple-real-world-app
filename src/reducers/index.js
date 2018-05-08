import { combineReducers } from 'redux';
import articles from './articles';
import tags from './tags';
import article from './article';

export default combineReducers({
  articles,
  tags,
  article
})