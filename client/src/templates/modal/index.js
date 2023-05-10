import React, { useCallback, useEffect, useState } from "react";
import Button from "../../atoms/button";

import './index.scss';

function Modal(props) {
    const [pageIdx, setPageIdx] = useState(0)
    const { onClose } = props;

    const goToPreviousPage = () => {
        if (pageIdx === 0) return
        setPageIdx(pageIdx - 1)
    }

    const goToNextPage = () => {
        if (pageIdx === (props.children.length - 1)) return
        setPageIdx(pageIdx + 1)
    }

    const closeOnEscapeKeyDown = useCallback((e) => {
        if ((e.charCode || e.keyCode) === 27) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, [closeOnEscapeKeyDown]);

    if (!props.show) {
        return null
    }

    return (
        <div className={`modal ${props.show ? 'modal--show' : ''}`} onClick={props.onClose}>
            <div className="modal__content" onClick={(e) => { e.stopPropagation() }}>
                <div className="modal__content__header">{props.title}</div>
                <div className="modal__content__body">
                    {props.children.map((page, idx) => {
                        const hidden = idx !== pageIdx
                        return (
                            <div className={`modal__content__body__page ${hidden ? 'modal__content__body__page--hidden' : ''}`}>
                                {page}
                            </div>
                        )
                    })}
                </div>
                <div className="modal__content__footer">
                    {props.children.length > 1 &&
                        <div className="modal__content__footer__navigation">
                            <Button onClick={() => goToPreviousPage()} name="Back" disabled={pageIdx === 0} />
                            {pageIdx !== (props.children.length - 1) ?
                                <Button onClick={() => goToNextPage()} name="Continue" />
                                :
                                <Button name="Save" onClick={props.onSave} />
                            }
                        </div>
                    }
                    <div className="modal__content__footer__close">
                        <Button onClick={props.onClose} name="Close" style="text" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
