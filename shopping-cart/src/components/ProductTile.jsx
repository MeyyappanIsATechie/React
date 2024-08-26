import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../Context";

const ProductTile = ({ productTile }) => {
  const navigate = useNavigate();
  const {handleAddToCart, cartItems} = useContext(ShoppingContext);

  const handleProductDetails = (productId) => {
    console.log(`Viewing details of product with ID: ${productId}`);
    navigate(`/product-details/${productId}`);
    // Navigate to product details page with productId as a query parameter
    // window.location.href = `/product/${productId}`;
    // or use React Router
    // history.push(`/product/${productId}`);
  };
  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={productTile?.thumbnail}
          alt={productTile?.title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            {productTile?.title}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            ${productTile.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleProductDetails(productTile?.id)}
        className="px-5 mt-5 w-full py-3 rounded-none bg-black text-white font-bold text-lg transition transform hover:bg-white hover:text-black hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-black/30"
      >
        View Details
      </button>
      <button disabled={cartItems && cartItems.findIndex(
                  (item) => item.id === productTile?.id) !== -1
                } onClick={()=>handleAddToCart(productTile)} className="px-5 mt-5 w-full py-3 rounded-none bg-black text-white font-bold text-lg transition transform hover:bg-white hover:text-black hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-black/30  disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:focus:ring-0 disabled:border-gray-400">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductTile;
