import React, {Component} from 'react'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpenComments: false,
        };
    };


    render() {
        return (
            <div>
                {this.getCommentsButton()}
                {this.getCommentList()}
            </div>
        );
    }

    getCommentsButton() {
        // Check count comments
        //на comments === undefined будет ошибка
        if (!this.props.comments) return (
            <span>No comments</span>
        );

        return (
            <button onClick={this.props.toggleOpen}>
                {!this.state.isOpenComments ? "Show comments" : "Hide comments"}
            </button>
        )
    }

    getCommentList() {

        if (!this.state.isOpenComments) return null;

        const {comments} = this.props;

        const commentsElements = comments.map(oneComment =>(
            <li key={oneComment.id}>
                <h4>{oneComment.user}</h4>
                <section>
                    {oneComment.text}
                </section>
            </li>
        ));

        return (
            <ul>
                {commentsElements}
            </ul>
        )
    }
}

export default toggleOpen(CommentList);
