function Modal({ onClose }) {
    return (
        <div id="Modal" className="modal">
            <div className="content">
                <div className="header">
                    <h2>Modal Header</h2>
                    <span className="close__modal" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className="body">
                    <p>This is the modal body content.</p>
                </div>
                <div className="footer">
                    This is the footer
                </div>
            </div>
        </div>
    );
}

export default Modal;
