import { initialState } from './initialState';
import { FETCH_TAGS_SUCCESS, FETCH_TAGS_FAILURE } from '../constants/actionTypes';

const tags = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload.tags
      }
    case FETCH_TAGS_FAILURE:
      break;
    default: 
      return state;
  }
}

export default tags;