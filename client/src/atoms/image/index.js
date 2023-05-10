import React from "react";
import { Image } from 'cloudinary-react';

function ImageDisplay(props) {
    const cloudName = process.env.REACT_APP_CLOUD_NAME;
    return (
        <Image cloudName={cloudName} publicId={props.imageId} />
    )
}

export default ImageDisplay;
