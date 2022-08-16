import { addDays } from 'date-fns';
import React, {useContext, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';
import {CalenderContext} from "../../Pages/app";

const ReactCalender = () => {
    const calenderData = useContext(CalenderContext);
    const onChange = (date) => calenderData.setDate(date);
    return (
        <div className="my-calender">
            <Calendar
                onChange={onChange}
                value={calenderData.value}
                minDate={new Date()}
                maxDate={addDays(new Date(), 25)}
            />
        </div>
    );
};

export default ReactCalender;
