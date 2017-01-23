import React, { Component, PropTypes } from 'react'

class ErrorPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Error page</h1>
                <h3>{this.props.location.query.message}</h3>
            </div>
        )
    }
}

export default ErrorPage