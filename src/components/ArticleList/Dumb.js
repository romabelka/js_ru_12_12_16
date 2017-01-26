import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import {Link} from 'react-router'
import Loader from '../Loader'
import accordion from '../../decorators/accordion'
import LocalizedText from '../LocalizedText'

class ArticleList extends React.Component {
    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        const {articles, loading, isOpenItem, toggleOpenItem} = this.props
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Link to={`/articles/${article.id}`} activeStyle={{color: 'red'}}>{article.title}</Link>
            </li>)
        const loader = loading && <Loader />
        return (
            <div>
                <h2><LocalizedText text="Article List" /></h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
                {loader}
            </div>
        )
    }

    getArticleRef = (article) => {
        this.article = article
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isOpenItem: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}

export default accordion(ArticleList)