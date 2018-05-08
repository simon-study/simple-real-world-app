import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { 
  DEFAULT_LIMIT, FETCH_ARTICLES_OFFSET, 
  FETCH_ARTICLES_OFFSET_SUCCESS, FETCH_ARTICLES_OFFSET_FAILURE
} from '../constants/actionTypes';

// watcher fetch saga
export function* watcherFetchArticlesWithOffset() {
  yield takeEvery(FETCH_ARTICLES_OFFSET, workerFetchArticlesWithOffset)
}
// worker fetch saga
export function* workerFetchArticlesWithOffset(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: `https://conduit.productionready.io/api/articles?limit=${DEFAULT_LIMIT}&offset=${action.page * DEFAULT_LIMIT}`
    })
    yield put({
      type: FETCH_ARTICLES_OFFSET_SUCCESS, 
      payload: {
        data: response.data,
        page: action.page
      }
    })
  } catch (error) {
    yield put({
      type: FETCH_ARTICLES_OFFSET_FAILURE, 
      payload: error
    })
  }
}