import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import filters from './filters'
import comments from './comments'

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    filters, comments
})