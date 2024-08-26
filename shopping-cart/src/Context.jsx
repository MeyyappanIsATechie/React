//create context
//provide state to context
//wrap context in root component
//consume context using useContext

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingContext = createContext(null);

const Context = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      if (data && data?.products) setProductsList(data?.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (productDetails) => {
    console.log(productDetails);
    let existingItems = [...cartItems];
    const itemIndex = existingItems.findIndex(
      (item) => item.id === productDetails.id
    );

    if (itemIndex !== -1) {
      // Item exists, update the quantity and total price
      const updatedItem = {
        ...existingItems[itemIndex],
        quantity: existingItems[itemIndex].quantity + 1,
        totalPrice:
          (existingItems[itemIndex].quantity + 1) *
          existingItems[itemIndex].price,
      };
      existingItems[itemIndex] = updatedItem;
    } else {
      // Item does not exist, add a new one
      existingItems.push({
        ...productDetails,
        quantity: 1,
        totalPrice: productDetails.price,
      });
    }

    setCartItems(existingItems);
    localStorage.setItem("cartItems", JSON.stringify(existingItems));
    console.log(existingItems[0].quantity + " " + existingItems[0].totalPrice);
    navigate("/cart");
  };

  const handleRemoveFromCart = (productDetails, isFullyRemove) => {
    let existingItems = [...cartItems];
    const itemIndex = existingItems.findIndex(
      (item) => item.id === productDetails.id
    );
    if (isFullyRemove) {
      existingItems.splice(itemIndex, 1);
    } else {
      const existingItem = {
        ...existingItems[itemIndex], // Shallow copy of the object
        quantity: Math.max(0, existingItems[itemIndex].quantity - 1),
        totalPrice: Math.max(0, existingItems[itemIndex].quantity-1)*existingItems[itemIndex].price
      };
      existingItems[itemIndex] = existingItem;
      if (existingItem.quantity === 0)
        existingItems.splice(itemIndex, 1);
    }

      localStorage.setItem('cartItems',JSON.stringify(existingItems));
      setCartItems(existingItems); // Updating state with the new array
  };

  useEffect(() => {
    fetchProducts();
    const storedItems = JSON.parse(localStorage.getItem("cartItems") || []);
    setCartItems(storedItems);
  }, []);

  //console.log(productsList);

  return (
    <ShoppingContext.Provider
      value={{
        productsList,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
export default Context;
