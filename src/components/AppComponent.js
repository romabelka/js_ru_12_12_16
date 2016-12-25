import React, {Component} from 'react'
import ArticleLis from './ArticleList'
import DateRangePicker from './DateRangePicker'

export default class AppComponent extends Component {
    render() {
        return (
            <div>
                <DateRangePicker/>
                <ArticleLis/>
            </div>
        )
    }
}

