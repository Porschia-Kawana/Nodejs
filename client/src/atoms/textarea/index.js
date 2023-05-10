import React from "react";

import './index.scss'

function Textarea(props) {
    return (
        <div className="textarea">
            <textarea type="textarea" value={props.value} placeholder={props.placeholder} required={props.required} onChange={props.onChange} />
        </div>
    );
}

export default Textarea;
