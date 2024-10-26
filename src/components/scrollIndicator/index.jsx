import React, { useState, useEffect } from "react";
import './style.css';

const ScrollIndicator = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => {
                // Take only the first 50 products
                setData(data.products.slice(0, 50));
                setLoading(false);
            })
            .catch((error) => {
                setErrorMessage('Error loading data');
                setLoading(false);
            });
    }, []);

    // Scroll indicator effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollProgress(scrolled);

            console.log(`Scroll distance: ${scrollTop}px`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="scroll-indicator-container">
            <div className="headerContainer">
                <h1>Custom Scroll Indicator</h1>
            </div>
            {/* Scroll Indicator Bar */}
            <div
                className="scroll-indicator"
                style={{ width: `${scrollProgress}%` }}
            ></div>

            {/* Loading/Error Message */}
            {loading && <p>Loading...</p>}
            {errorMessage && <p>{errorMessage}</p>}

            {/* Display Products */}
            <div className="products">
                {data.map((product) => (
                    <div key={product.id} className="product">
                        <h3>{product.title}</h3>
                        {/* <p>{product.description}</p> */}
                        <img src={product.thumbnail} alt={product.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollIndicator;
