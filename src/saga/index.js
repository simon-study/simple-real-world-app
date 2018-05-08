import { fork } from 'redux-saga/effects';
import { watcherFetchArticles } from './fetchArticles';
import { watcherFetchTags } from './fetchTags';
import { watcherFetchArticlesWithOffset } from './fetchArticlesWithOffset';
import { watcherFetchArticle } from './fetchArticleWithSlug';

export function* rootSaga() {
  yield [
    fork(watcherFetchArticles),
    fork(watcherFetchTags),
    fork(watcherFetchArticlesWithOffset),
    fork(watcherFetchArticle)
  ];
}