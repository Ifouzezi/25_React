// ModalTest.js
import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

function ModalTest() {
    const [showPopup, setShowPopup] = useState(false);

    function handlePopup() {
        setShowPopup(!showPopup);
    }

    return (
        <div className="modalContainer">
            <button onClick={handlePopup} className="open-modal-button">
                Open Modal
            </button>
            {showPopup && <Modal onClose={handlePopup} />}
        </div>
    );
}

export default ModalTest;
