import React, { useState } from 'react';
import imageData from './imageData';
import styled from 'styled-components';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length);
    };

    return (
        <Container>
            <Slider>
                <img
                    src={imageData[currentIndex].src}
                    alt={imageData[currentIndex].title}
                />
                <p>{imageData[currentIndex].title}</p>
                <button
                    onClick={handlePrev}
                    className="prev"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="next"
                >
                    Next
                </button>
            </Slider>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;  /* Full viewport width */
    height: 100vh; /* Full viewport height */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Slider = styled.div`
    position: relative;
    width: 80%; /* Adjust as needed */
    height: 80%; /* Adjust as needed */

    img {
        width: 100%;
        height: 100%;
        object-fit: contain; 
    }

    p {
        text-align: center;
        margin-top: 10px;
        font-size: 24px;
        font-weight: 500;
    }

    button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        z-index: 10;
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }
`;

export default ImageSlider;
