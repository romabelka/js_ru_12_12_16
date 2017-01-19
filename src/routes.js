import React from 'react'
import {Router, Route, hashHistory, browserHistory} from 'react-router'
import App from './RouteHandlers/App'
import Counter from './components/Counter'
import ArticleList from './components/ArticleList'
import Filters from './components/Filters'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="counter" component={Counter}/>
            <Route path="articles" component={ArticleList}/>
            <Route path="filters" component={Filters}/>
        </Route>
    </Router>
)