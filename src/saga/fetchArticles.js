import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE} from '../constants/actionTypes';

const API_ROOT = 'https://conduit.productionready.io/api/articles';

// watcher fetch saga
export function* watchFetchArticles() {
  yield takeEvery(FETCH_ARTICLES, workerFetchArticles)
}
// worker fetch saga
export function* workerFetchArticles() {
  try {
    const response = yield axios({
      method: 'GET',
      url: API_ROOT
    })
    yield put({type: FETCH_ARTICLES_SUCCESS, payload: response})
  } catch (error) {
    yield put({type: FETCH_ARTICLES_FAILURE, payload: error})
  }
}