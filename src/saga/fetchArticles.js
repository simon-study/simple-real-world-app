import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { 
  DEFAULT_LIMIT, FETCH_ARTICLES, 
  FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE
} from '../constants/actionTypes';


// watcher fetch saga
export function* watcherFetchArticles() {
  yield takeEvery(FETCH_ARTICLES, workerFetchArticles)
}
// worker fetch saga
export function* workerFetchArticles() {
  
  try {
    const response = yield axios({
      method: 'GET',
      url: `https://conduit.productionready.io/api/articles?limit=${DEFAULT_LIMIT}`
    })
    yield put({type: FETCH_ARTICLES_SUCCESS, payload: response.data})
  } catch (error) {
    yield put({type: FETCH_ARTICLES_FAILURE, payload: error})
  }
}