import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './components/AppContainer'
import {articles} from './fixtures'
import store from './store'


ReactDOM.render(<AppContainer articles = {articles} />, document.getElementById('container'))