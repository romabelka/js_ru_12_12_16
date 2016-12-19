import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    state = {
        isOpen: false,
    }

    static propTypes = {
        article: PropTypes.object.isRequired
    }

/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    componentDidMount() {
        console.log('---', this.refs.container)
    }

    render() {
        const { article } = this.props
        return (
            <div ref = "container">
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        if (!this.state.isOpen) return null
        return (
            <section>
                {this.props.article.text}
                <CommentList comments = {this.props.article.comments} />
            </section>
        )
    }
}