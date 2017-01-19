import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

class MenuItem extends Component {
    static propTypes = {
        path: PropTypes.string.isRequired,
        name: PropTypes.string
    };

    render() {
        const { path, name } = this.props
        return (
            <li>
                <Link to={path} activeStyle={{color: 'red'}} activeClassName="active">{name || path}</Link>
            </li>
        )
    }
}

export default MenuItem