import React from "react";
import Button from '../../atoms/button'

import './index.scss';

function Form(props) {
    return (
        <form className={props.style ? props.style : 'form'} onSubmit={props.onSubmit}>
            {props.children}
            {props.button && <Button name={props.button} />}
        </form>
    );
}

export default Form;
