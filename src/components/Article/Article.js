import React, {Component} from 'react'
import CommentList from'../Comment/CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css';

export default class Article extends Component {

    render() {
        const {article, onClick} = this.props;
        return (
            <div>
                <h2 onClick={onClick}>{article.title}</h2>
                <CSSTransition
                    transitionName="commentBody"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }


    getBody() {
        if (!this.props.isOpen) return null;
        return (
            <section>
                {this.props.article.text}
                <CommentList comments={this.props.article.comments}/>
            </section>
        )
    }

}