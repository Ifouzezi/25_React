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
                <Indicators>
                    {imageData.map((_, index) => (
                        <Dot
                            key={index}
                            isActive={index === currentIndex}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </Indicators>
            </Slider>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

const Slider = styled.div`
    position: relative;
    width: 80%;
    height: 80%;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: opacity 0.5s ease-in-out;
    }

    p {
        text-align: center;
        margin-top: 10px;
        font-size: 24px;
        font-weight: 500;
        color: white;
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

const Indicators = styled.div`
    display: flex;
    position: relative;
    bottom: 25%;
    justify-content: center;
    margin-top: 15px;
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: ${({ isActive }) => (isActive ? 'white' : 'gray')};
    cursor: pointer;
`;

export default ImageSlider;
