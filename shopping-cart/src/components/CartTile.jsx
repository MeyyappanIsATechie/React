import React, { Fragment, useContext } from "react";
import { ShoppingContext } from "../Context";

const CartTile = ({ cartItem }) => {
  const { handleRemoveFromCart, handleAddToCart } = useContext(ShoppingContext);
  return (
    <Fragment>
      <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              className="w-full h-full object-contain rounded-sm"
              src={cartItem.thumbnail}
              alt={cartItem.title}
            />
          </div>
          <div className="">
            <h3 className="text-base font text-gray-900 py-4">
              {cartItem?.title}
            </h3>
            <button
              onClick={() => handleRemoveFromCart(cartItem, true)}
              className="text-sm px-4 py-3 bg-black text-white font-extrabold transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h3 className="text-lg font-bold text-gray-900 py-4">
            ${cartItem.totalPrice.toFixed(2)}
          </h3>
          <p className="mt-4 mb-3 font-bold text-[16px]">
            Quantity: {cartItem?.quantity}
          </p>
          <div className="">
            <button
              onClick={() => handleRemoveFromCart(cartItem, false)}
              disabled={cartItem?.quantity === 1}
              className="border border-[#000] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:focus:ring-0 disabled:border-gray-400"
            >
              -
            </button>
            <button
              className="border border-[#000] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:focus:ring-0 disabled:border-gray-400"
              onClick={() => handleAddToCart(cartItem)}
              disabled={cartItem?.quantity === 10}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500"></hr>
    </Fragment>
  );
};

export default CartTile;
