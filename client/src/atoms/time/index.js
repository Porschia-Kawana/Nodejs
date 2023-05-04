import React, { useState } from "react";
import { clockIcon } from "../icons/definitions";

import './index.scss';

function TimeInput(props) {
    const [value, setValue] = useState();

    const handleChange = (time) => {
        const dt = time.split(':');
        let timeString
        if (dt[0] > 12) {
            timeString = dt[0] - 12 + ':' + dt[1] + ' pm'
        } else {
            timeString = dt[0] + ':' + dt[1] + ' am'
        }
        setValue(timeString)
    }

    return (
        <div className="time">
            {props.required && <span className="time__required">*</span>}
            <input type="time" className="time__input" value={value} placeholder={props.placeholder} required={props.required} onChange={(e) => handleChange(e.target.value)} />
            <span>{value || 'Select Time'}</span>
            <span className="time__icon">{clockIcon}</span>
        </div>
    );
};

export default TimeInput;
