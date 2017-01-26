import React, { PropTypes } from 'react'
import LocalizedText from './LocalizedText'

function Loader(props) {
    return (
        <div>
            <h2><LocalizedText text="Loading"/>...</h2>
        </div>
    )
}

Loader.propTypes = {
}

export default Loader