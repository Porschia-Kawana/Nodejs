import React from "react";

import Modal from "../../templates/modal";

function CreatePerformer(props) {
    return (
        <Modal show={props.show} onClose={props.onClose} >
            <p>HEllO</p>
        </Modal>
    );
}

export default CreatePerformer;
