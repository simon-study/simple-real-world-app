import { fork } from 'redux-saga/effects';
import { watcherFetchArticles } from './fetchArticles';
import { watcherFetchTags } from './fetchTags';
import { watcherFetchArticlesWithOffset } from './fetchArticlesWithOffset';

export function* rootSaga() {
  yield [
    fork(watcherFetchArticles),
    fork(watcherFetchTags),
    fork(watcherFetchArticlesWithOffset)
  ];
}