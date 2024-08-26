//import React from 'react'
import PropTypes from 'prop-types';
import styles from './product-item.module.css';

const ProductItem = (props) => {
    //const {key, name} = props;
  return (
    <div key={props.key} style={{padding:'20px', border:'2px solid red', marginBottom: '12px'}}>
      <p>{props.name}</p>
      <Button />
    </div>
  )
}

ProductItem.propTypes = {
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired, // 'name' is expected to be a string and required
  }

const Button = () => {
    const handleClick = () => {
        alert('Button clicked!');
      }
    
      return (
        <button className={styles.btn} onClick={handleClick}>Add to cart</button>
      );
}

export default ProductItem;
