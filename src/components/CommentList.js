import React, {Component} from 'react'
import {normalizedComments} from '../fixtures'

// export default function CommentList(props) {
export default class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpenComments: false,
        };
    };

    toggleOpen = () => {
        this.setState({
            isOpenComments: !this.state.isOpenComments,
        });
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
        if(!this.props.comentsId.length) return (
            <span>No comments</span>
        );

        return (
            <button onClick={this.toggleOpen}>{!this.state.isOpenComments ? "Show comments" : "Hide comments"}</button>
        )
    }

    getCommentList() {
        if (!this.state.isOpenComments) return null;
        const {comentsId} = this.props;

        // Create array with related comments
        let relatedComments = [];
        comentsId.forEach(function (i) {
            normalizedComments.forEach(function (item) {
                if (i === item.id) {
                    relatedComments.push(item)
                }
            });
        });

        const commentsElements = relatedComments.map(oneComment =>(
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
