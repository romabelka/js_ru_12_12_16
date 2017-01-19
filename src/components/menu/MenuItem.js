import React, { Component, PropTypes } from 'react'

class MenuItem extends Component {
    static propTypes = {
        path: PropTypes.string.isRequired,
        name: PropTypes.string
    };

    render() {
        const { path, name } = this.props
        return (
            <li>
                <a href={path}>{name || path}</a>
            </li>
        )
    }
}

export default MenuItem