import React from 'react'
import {Router, Route, Redirect, IndexRedirect, IndexRoute} from 'react-router'
import history from './history'
import App from './RouteHandlers/App'
import ArticleList from './RouteHandlers/ArticleListRoute'
import Article from './RouteHandlers/ArticleRoute'
import Filters from './RouteHandlers/Filters'
import NotFound from './RouteHandlers/NotFound'
import CommentsRoot from './RouteHandlers/CommentsRoot'
import CommentsPage from './RouteHandlers/CommentsPage'
import ArticleIndexPage from './RouteHandlers/ArticleIndexPage'
import ErrorPage from './RouteHandlers/ErrorPage'

export default (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRedirect to="/articles" />
            <Redirect from="/article" to="/articles"/>
            <Route path="articles" component={ArticleList}>
                <IndexRoute component={ArticleIndexPage}/>
                <Route path="/view/:id" components={{article: Article}} />
                <Route path=":id" components={{article: Article}} />
            </Route>
            <Route path="filters" component={Filters}/>
            <Route path = "comments" component = {CommentsRoot}>
                <IndexRedirect to="1"/>
                <Route path = ":page" component = {CommentsPage} />
            </Route>
            <Route path="error" component={ErrorPage}/>
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
)