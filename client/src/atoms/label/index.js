import React from "react";

import './index.scss';

function Label(props) {
    return (
        <div className={`Label ${props.type ? `Label--${props.type}` : `Label--input`}`}>
            <label className="Label__text">{props.label}</label>
            {props.required && <span className="Label__required">*</span>}
        </div>
    );
}

export default Label;
