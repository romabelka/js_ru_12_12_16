import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL } from '../constants'
import { arrayToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const ArticleModel = Record({
    "id": null,
    "date": null,
    "title": null,
    "text": null,
    "comments": []
})

const DefaultReducerState = Record({
    error: null,
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

export default (articlesState = new DefaultReducerState({}), action) => {
    const { type, payload, response, error, randomId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articlesState.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId))

        case LOAD_ALL_ARTICLES + START:
            return articlesState.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articlesState
                .mergeIn(['entities'], arrayToMap(response, ArticleModel))
                .set('loading', false)
                .set('loaded', true)
                .set('error', null)

        case LOAD_ALL_ARTICLES + FAIL:
            return articlesState
                .set('error', error)
                .set('loading', false)

        case LOAD_ARTICLE + SUCCESS:
            return articlesState.setIn(['entities', response.id], new ArticleModel(response))
    }

    return articlesState
}