import React from "react";
import Input from "../../atoms/input";
import Textarea from "../../atoms/textarea";
import DateInput from "../../atoms/date";
import Label from "../../atoms/label";
import TimeInput from "../../atoms/time";
import Number from "../../atoms/number";
import FileUpload from "../../atoms/upload";

import './index.scss'

function InputWithLabel(props) {
    const type = props.type ? props.type.toLowerCase() : false
    return (
        <div className={props.style ? props.style : 'InputWithLabel'}>
            <Label {...props} type={type} />
            {!type && <Input {...props} />}
            {type === 'textarea' && <Textarea {...props} />}
            {type === 'date' && <DateInput {...props} />}
            {type === 'time' && <TimeInput {...props} />}
            {type === 'number' && <Number {...props} />}
            {type === 'file' && <FileUpload {...props} />}
        </div>
    );
}

export default InputWithLabel;
