import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer, 0)
//not for prod
window.store = store

export default store