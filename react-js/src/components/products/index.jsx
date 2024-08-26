//import React from 'react'
import PropTypes from "prop-types";
import "./styles.css";

import ProductItem from "./components/product-item";
import { useEffect, useState } from "react";

const ProductList = (props) => {

  const { arr } = props;
  //const flag = true;

  const [flag, setFlag] = useState(true);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  const handleClick = () => {
    setFlag(!flag);
  };

  useEffect(()=>{
    setFlag(!flag);
    return() => { console.log("component unmounting - side effects can be added here");};
    
  },[]);

  useEffect(() => {
    //console.log("count changes");
    if(count === 10) setChangeStyle(true);
  }, [count]);

  console.log(changeStyle);

  return (
    <div>

      <h3 className="title">product list</h3>

      <button onClick={handleClick}>toggle</button>

      {/* <ProductItem/> */}

      {flag ? (
        arr.map((product, index) => <ProductItem key={index} name={product} />)
      ) : (
        <h1> Oops flag is false</h1>
      )}

      <div>
        <p>Count: {count}</p>
        <button style={{backgroundColor: changeStyle? 'black':'white', color: changeStyle? 'white':'black'}} onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

    </div>
  );
};

ProductList.propTypes = {
  arr: PropTypes.array.isRequired, // Ensure `arr` is an array and required
};

ProductList.defaultProps = {
  arr: [], // Provide a default empty array if no `arr` prop is passed
};

export default ProductList;
