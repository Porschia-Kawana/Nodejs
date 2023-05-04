import React from "react";

import './index.scss'

function Input(props) {
    return (
        <div className="input">
            {props.required && <span className="input__required">*</span>}
            <input type="text" value={props.value} placeholder={props.placeholder} required={props.required} onChange={props.onChange} />
        </div>
    );
}

export default Input;
