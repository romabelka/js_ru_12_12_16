import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS, FAIL } from '../constants'
import { arrayToMap } from '../helpers'
import { Record, OrderedMap, Map, List } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})

const DefaultReducerState = Record({
    error: null,
    entities: new OrderedMap({}),
    pagination: new Map({}),
    total: null
})


export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, new CommentModel({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return state
                .mergeIn(['entities'], arrayToMap(response.records, CommentModel))
                .setIn(['pagination', payload.page], new List(response.records.map(record => record.id)))
                .set('total', response.total)
    }

    return state
}