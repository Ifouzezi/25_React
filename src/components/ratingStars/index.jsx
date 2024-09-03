import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from './ratingStars.module.css';

function StarRating({ noOfStars = 5 }) {
    // State to keep track of the selected rating
    const [rating, setRating] = useState(0);

    // Function to handle star click
    const handleClick = (index) => {
        setRating(index + 1); // Set the rating to the index + 1 because index is 0-based
    };

    return (
        <div className={styles.starRating}>
            <div className={styles.starContainer}>
                {Array.from({ length: noOfStars }, (_, index) => (
                    <FaStar
                        key={index}
                        className={`${styles.star} ${index < rating ? styles.active : ''}`}
                        onClick={() => handleClick(index)}
                    />
                ))}

            </div>
        </div>
    );
}

export default StarRating;
