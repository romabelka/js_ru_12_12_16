import React, { PropTypes } from 'react'
import Article from './Article'
import Chart from './Chart'

export default function ArticleList(props) {
    const { articles } = props
    const articleElements = articles.map(article => <li key = {article.id}><Article article = {article} /></li>)
    return (
        <div>
            <h2>Article List</h2>
            <ul>
                {/*some comment*/}
                {articleElements}
            </ul>
            <Chart articles = {articles}/>
        </div>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}