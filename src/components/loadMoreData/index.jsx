import React, { useState, useEffect } from "react";
import "./styles.css";

function LoadMoreData() {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
      );

      const result = await response.json();

      // Check if products array exists and has data
      if (result.products && result.products.length) {
        setProducts(prevProducts => [...prevProducts, ...result.products]); // Append products
        setLoading(false);
      }

      console.log(result);

    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]); // Trigger fetchProducts when count changes

  return (
    <div className="container">
      <h1>Load More Data</h1>

      {/* Show loading text when data is being fetched */}
      {loading && <p>Loading...</p>}

      <div className="product__container">
        {
          products && products.length ? products.map(item => (
            <div className="product" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          )) : <p>No products to display</p>
        }
      </div>

      <div className="button__container">
        <button onClick={() => setCount(count + 1)}>Load More</button> {/* Add button label */}
      </div>
    </div>
  );
}

export default LoadMoreData;
