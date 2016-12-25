import React, {Component} from 'react'
import DayPicker, {DateUtils} from "react-day-picker";
import 'react-day-picker/lib/style.css';

export default class DateRangePicker extends Component {
    render() {
        return (
            <div>
                <DayPicker onDayClick={ (e, day) => window.alert(day) }/>
            </div>
        )
    }
}
