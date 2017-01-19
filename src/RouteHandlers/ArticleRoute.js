import React, { Component, PropTypes } from 'react'
import Article from '../components/Article'

class ArticleRoute extends Component {
    static propTypes = {

    };

    render() {
        return <Article id={this.props.params.id} isOpen={true} key={this.props.params.id} />
    }
}

export default ArticleRoute