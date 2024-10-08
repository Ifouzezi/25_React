import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    const [isGenerated, setIsGenerated] = useState(false);
    const [qrCodeSize, setQrCodeSize] = useState(window.innerWidth < 480 ? '' : 350); 
  
    useEffect(() => {
        const handleResize = () => {
            setQrCodeSize(window.innerWidth < 480 ? '' : 350);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleGenerateQrCode() {
        setQrCode(input);
        setIsGenerated(true);
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter' && input.trim()) {
            handleGenerateQrCode();
        }
    }

    function handleInputChange(e) {
        setInput(e.target.value);
        if (isGenerated) {
            setIsGenerated(false);
        }
    }

    return (
        <div className="qrcode__generator">
            <h1>QR Code Generator</h1>
            <div className="qrcode__input">
                <input 
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress} 
                    type="text" 
                    name="qr-code" 
                    placeholder="Enter your value here" 
                    autoFocus
                />
                <button 
                    className="qrcode__btn"
                    onClick={handleGenerateQrCode}
                    disabled={input.trim() === "" || isGenerated}
                >
                    Generate
                </button>
            </div>

            <div className="qrcode__box">
                <QRCode
                    id="qr-code-value"
                    value={qrCode}
                    size={qrCodeSize} // Use the updated QR code size
                    bgColor="#ffff"
                />
            </div>
        </div>
    );
}

export default QRCodeGenerator;
