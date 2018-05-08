import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

export function* watcherFetchArticle() {
  yield takeLatest('FETCH_ARTICLE', workerFetchArticle)
}

export function* workerFetchArticle(action)  {
  console.log('running');
  try {
    const response = yield axios({
      method: 'GET',
      url: `https://conduit.productionready.io/api/articles/${action.slug}`
    })
    yield put({
      type: 'FETCH_ARTICLE_SUCCESS', 
      payload: response.data
    })
  } catch (error) {
    yield put({
      type: 'FETCH_ARTICLE_FAILURE', 
      payload: error
    })
  }
}
