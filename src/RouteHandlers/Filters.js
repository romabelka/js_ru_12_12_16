import React, { Component, PropTypes } from 'react'
import ArticlesSelect from '../components/ArticlesSelect'
import DateRange from '../components/DateRange'

class Filters extends Component {
    static propTypes = {
    }

    render() {
        return (
            <div>
                <ArticlesSelect/>
                <DateRange/>
            </div>
        )
    }
}

export default Filters