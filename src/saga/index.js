import { fork } from 'redux-saga/effects';
import { watcherFetchArticles } from './fetchArticles'
import { watcherFetchTags } from './fetchTags'

export function* rootSaga() {
  yield [
    fork(watcherFetchArticles),
    fork(watcherFetchTags)
  ];
}