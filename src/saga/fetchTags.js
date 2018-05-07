import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { FETCH_TAGS, FETCH_TAGS_SUCCESS, FETCH_TAGS_FAILURE } from '../constants/actionTypes';

// watcher fetch saga
export function* watcherFetchTags() {
  yield takeEvery(FETCH_TAGS, workerFetchTags)
}
// worker fetch saga
export function* workerFetchTags() {
  try {
    const response = yield axios({
      method: 'GET',
      url: 'https://conduit.productionready.io/api/tags'
    })
    yield put({type: FETCH_TAGS_SUCCESS, payload: response.data})
  } catch (error) {
    yield put({type: FETCH_TAGS_FAILURE, payload: error})
  }
}