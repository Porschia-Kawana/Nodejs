import React from "react";

import './index.scss';

function Label(props) {
    return (
        <label className={`Label ${props.type ? `Label--${props.type}` : `Label--input`}`}>{props.label}</label>
    );
}

export default Label;
