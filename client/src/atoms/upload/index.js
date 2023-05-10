import React, { useState } from "react";
import { uploadIcon } from "../icons/definitions";

import './index.scss'

function FileUpload(props) {
    const [value, setValue] = useState();

    const handleUpload = (e) => {
        if (e.target.files.length > 0) {
            props.onChange(e.target.files[0])
            setValue(e.target.files[0].name)
        }
    }

    return (
        <div className="file">
            <input type="file" className="file__input" accept="image/*" required={props.required} onChange={(e) => handleUpload(e)} />
            <span className="file__text">{value || 'Upload Image'}</span>
            <span className="file__icon">{uploadIcon}</span>
        </div>
    );
}

export default FileUpload;
