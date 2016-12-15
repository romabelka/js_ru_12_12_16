import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
    state = {
        isShow: false
    }

    render() {
        return (
            <div>
                {this.getCommentsList()}
                {this.renderButton()}
            </div>
        )
    }

    toggleComments = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    getCommentsList() {
        if (!this.state.isShow) {
            return;
        }

        const { comments } = this.props;
        const list = comments.map(item =>
            <li key={item.id}>
                <Comment user={item.user} text={item.text}/>
            </li>
        );

        return (
            <ul>
                {list}
            </ul>
        )
    }

    renderButton = () => {
        return (this.state.isShow) ?
            <a href="#" onClick={this.toggleComments} className="btn btn--hide">Hide comments</a> :
            <a href="#" onClick={this.toggleComments} className="btn btn--show">Show comments</a>;
    }
}