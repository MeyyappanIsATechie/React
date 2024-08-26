//also refer Hooks.jsx

import React, { useMemo, useState } from "react";
import UseFetch from "../hooks/UseFetch";

const UseMemo = () => {
  const { data, loading, error } = UseFetch("https://dummyjson.com/products");
  const [flag, setFlag] = useState(false);
  const filteredProducts = useMemo(() => {
    return data?.products?.length > 0 ? data.products.filter(product => product.price > 10) : [];
}, [data?.products]);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if(error){
    return <p>{error.message}</p>;
  }
  if (!data || !data.products) {
    return <h3>No products available</h3>;
  }
  console.log(data);
  return (
    <div>
      <h1 style={{ color: flag ? "red" : "blue" }}>use memo</h1>
      <button onClick={() => setFlag(!flag)}>Toggle Filter</button>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;
