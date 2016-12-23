import React, {Component} from 'react'
import Article from './Article'

export default class ArticleList extends Component {
    state = {
        openArticleId: null
    };

    render() {
        const {articles} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={this.state.openArticleId == article.id}
                         onClick={this.toggleOpenArticle(article.id)}
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

    toggleOpenArticle = id => ev => {
        console.log(id);
        console.log(this.state.openArticleId);
        console.log(this.props.isOpen);

        if (this.state.openArticleId === null || this.state.openArticleId) {
            this.setState({
                openArticleId: id
            })
        }
        if (this.state.openArticleId == id) {
            this.setState({
                openArticleId: null
            })
        }
    }
}