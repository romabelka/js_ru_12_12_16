import React, { PropTypes } from 'react'

function LocalizedText(props, context) {
    if (!context.dictionary) {
        return <span>{props.text}</span>
    }
    return (
        <span>{context.dictionary[props.text] || props.text}</span>
    )
}

LocalizedText.propTypes = {
    text: PropTypes.string.isRequired
}

LocalizedText.contextTypes = {
    dictionary: PropTypes.object
}

export default LocalizedText