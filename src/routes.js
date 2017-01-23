import React from 'react'
import {Router, Route, hashHistory, browserHistory} from 'react-router'
import App from './RouteHandlers/App'
import ArticleList from './RouteHandlers/ArticleListRoute'
import Article from './RouteHandlers/ArticleRoute'
import Filters from './RouteHandlers/Filters'
import NotFound from './RouteHandlers/NotFound'
import CommentsRoot from './RouteHandlers/CommentsRoot'
import CommentsPage from './RouteHandlers/CommentsPage'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="articles" component={ArticleList}>
                <Route path=":id" component={Article} />
            </Route>
            <Route path="filters" component={Filters}/>
            <Route path = "comments" component = {CommentsRoot}>
                <Route path = ":page" component = {CommentsPage} />
            </Route>
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
)