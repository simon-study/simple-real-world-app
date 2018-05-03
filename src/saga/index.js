import { fork } from 'redux-saga/effects';
import { watchFetchArticles } from './fetchArticles'

export function* rootSaga() {
  yield [
    fork(watchFetchArticles)
  ];
}