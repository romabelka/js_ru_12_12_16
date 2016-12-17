import React from 'react'
import ReactDOM from 'react-dom'
import ArticleList from './components/ArticleList'
import {normalizedArticles} from './fixtures'

ReactDOM.render(<ArticleList articles = {normalizedArticles} />, document.getElementById('container'));