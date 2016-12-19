import React  from 'react'

function Comment(props) {
    const { comment: { text, user } } = props
    return (
        <div>
            {text} <by>{user}</by>
        </div>
    )
}

export default Comment