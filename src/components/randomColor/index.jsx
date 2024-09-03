import React, { useState } from "react";
import styled from "styled-components";

function RandomColor() {
    const [color, setColor] = useState("#000000");
    const [colorName, setColorName] = useState("#000000");

    // Function to generate a random HEX color
    function handleCreateRandomHexColor() {
        const randomHexColor = "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0');
        setColor(randomHexColor);
        setColorName(randomHexColor);
        console.log(randomHexColor);
    }

    // Function to generate a random RGB color
    function handleCreateRandomRgbColor() {
        const r = Math.floor(Math.random() * 256); // Red component (0 to 255)
        const g = Math.floor(Math.random() * 256); // Green component (0 to 255)
        const b = Math.floor(Math.random() * 256); // Blue component (0 to 255)
        const randomRgbColor = `RGB(${r}, ${g}, ${b})`; // Format as rgb(r, g, b)
        setColor(randomRgbColor);
        setColorName(randomRgbColor);
        console.log(randomRgbColor);
    }

    // Function to generate a random color (either HEX or RGB)
    function handleGenerateRandomColor() {
        const randomChoice = Math.random() > 0.5 ? handleCreateRandomHexColor : handleCreateRandomRgbColor;
        randomChoice();
    }

    return (
        <Container color={color}>
            <div className="container__box">
                <div className="button__box">
                    <button onClick={handleCreateRandomHexColor}>
                        Create HEX Color
                    </button>
                    <button onClick={handleCreateRandomRgbColor}>
                        Create RGB Color
                    </button>
                    <button onClick={handleGenerateRandomColor}>
                        Generate Random Color
                    </button>

                </div>
                <ColorName>{colorName}</ColorName>
            </div>
        </Container>
    );
}

const Container = styled.div`
    .container__box {
        width: 100vw;
        height: 100vh;
        background: ${(props) => props.color};
    }

    .container__box button {
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
    }
`;

const ColorName = styled.div`
    position: relative;
    margin: auto;
    margin-top: 38vh;
    font-size: 60px;
    font-weight: bold;
    color: #fff; 
`;

export default RandomColor;
