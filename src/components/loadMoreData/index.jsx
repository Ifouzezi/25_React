import React from "react";

function LoadMoreData () {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Load More Data</h1>
    </div>
  );
}

export default LoadMoreData ;