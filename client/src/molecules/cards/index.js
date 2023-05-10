import React from "react";
import ImageDisplay from "../../atoms/image";

import './index.scss';

function Card(props) {
    return (
        <div className="card">
            <h2>{props.data.title}</h2>
            <div className="card__image">
                <ImageDisplay imageId={props.data.imageId} />
            </div>
            <p>{props.data.description}</p>
            {props.data.details.map((line) =>
                <p>{line}</p>
            )}
        </div>
    )
}

export default Card;
