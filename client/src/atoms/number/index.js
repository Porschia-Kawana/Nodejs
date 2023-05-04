import React from "react";

import './index.scss'

function Number(props) {
    return (
        <div className="number">
            {props.required && <span className="input__required">*</span>}
            <input type="number" value={props.value} placeholder={props.placeholder} required={props.required} onChange={props.onChange} />
        </div>
    );
}

export default Number;
