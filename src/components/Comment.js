import React, { PropTypes }  from 'react'

function Comment(props) {
    const { comment: { text, user } } = props
    return (
        <div>
            <p className="test-comment-body">{text} <b>{user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    })
}

export default Comment