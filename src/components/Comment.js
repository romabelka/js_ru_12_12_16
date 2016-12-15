import React, {Component} from 'react';

export default class Comment extends Component {
    render() {
        const {user, text} = this.props;

        return (
            <div>
                <div><strong>User:</strong> {user}</div>
                <div><strong>Comment:</strong> {text}</div>
            </div>
        )
    }


}