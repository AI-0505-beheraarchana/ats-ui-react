import React from "react"

export const Modal = ({ ...props }) => {

    const { modalProps, onClickHandler } = props
    const { title, body, buttonName, showModal } = modalProps

    return (
        <div className="modal" tabIndex="-1" show={showModal}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title"> {title} </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClickHandler}></button>
                    </div>
                    <div className="modal-body">
                        <p>{body}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClickHandler}>{buttonName}</button>
                    </div>
                </div>
            </div>
        </div>
    )

}