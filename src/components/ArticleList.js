import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {


    render() {
        const {articles, toggleOpenItem, isOpen} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={isOpen(article.id)}
                         onClick={toggleOpenItem(article.id)}
                />
            </li>);

        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {articleElements}
                </ul>
            </div>
        )
    }


}

export default accordion(ArticleList)