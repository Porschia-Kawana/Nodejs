import React, { useState } from "react";
import { calendarIcon } from "../icons/definitions";

import './index.scss';

function DateInput(props) {
    const [value, setValue] = useState();

    const handleChange = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const convert = new Date(date).toLocaleDateString('en-GB', options)
        setValue(convert)
    }

    return (
        <div className="date">
            {props.required && <span className="date__required">*</span>}
            <input type="date" className="date__input" value={value} placeholder={props.placeholder} required={props.required} onChange={(e) => handleChange(e.target.value)} />
            <span>{value || 'Select Date'}</span>
            <span className="date__icon">{calendarIcon}</span>
        </div>
    );
};

export default DateInput;
