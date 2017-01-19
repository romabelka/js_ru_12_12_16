import React, { Component, PropTypes } from 'react'
import AppContainer from '../components/AppContainer'
import store from '../store'
import { Provider } from 'react-redux'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store = {store}>
                <AppContainer />
            </Provider>        )
    }
}

export default App