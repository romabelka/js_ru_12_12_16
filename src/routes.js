import React from 'react'
import {Router, Route, hashHistory, browserHistory} from 'react-router'
import App from './RouteHandlers/App'

export default (
    <Router history={browserHistory}>
        <Route path="/app" component={App}/>
    </Router>
)