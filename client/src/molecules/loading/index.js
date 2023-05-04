import React from "react";

function Loading() {
    const [data, setData] = React.useState(null);

    return (
        <div className="Loading">
            <p>Loading</p>
        </div>
    );
}

export default Loading;
