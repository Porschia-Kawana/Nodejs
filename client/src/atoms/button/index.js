import React from 'react';

import './index.scss';

const Button = (props) => {
    return (
        <div className={`button ${props.style ? props.style : 'rounded'} ${props.disabled ? 'disabled' : ''}`}>
            {props.onClick ?
                <button onClick={props.onClick} disabled={props.disabled}>
                    {props.name.toUpperCase()}
                </button>
                :
                <button type="submit" disabled={props.disabled}>
                    {props.name.toUpperCase()}
                </button>
            }
        </div>
    );
};

export default Button;
