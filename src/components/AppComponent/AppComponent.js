import React, {Component} from 'react'
import ArticleLis from '../Article/ArticleList'
import DateRangePicker from '../DatePicker/DateRangePicker'
import './style.css';

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

