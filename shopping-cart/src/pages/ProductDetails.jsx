import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingContext } from "../Context";
import LoadingSpinner from "../components/LoadingSpinner";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    productDetails,
    setProductDetails,
    loading,
    setLoading,
    handleAddToCart,
    cartItems,
  } = useContext(ShoppingContext);
  //const navigate = useNavigate()

  const fetchProductDetails = async () => {
    setLoading(true);
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    //console.log(data);
    if (data) {
      setProductDetails(data);
      setLoading(false);
    }
  };

  // const handleGoToCart = () => {
  //   navigate('/cart');
  // }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // console.log(productDetails);

  if (!productDetails || loading) return <LoadingSpinner />;

  return (
    <div>
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-lg relative">
              <img
                className="w-4/5 rounded object-cover"
                src={productDetails?.thumbnail}
                alt={productDetails?.title}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {productDetails?.images?.length
                ? productDetails?.images.map((image) => (
                    <div key={image} className="rounded-xl p-4 shadow-md">
                      <img
                        className="w-24 cursor-pointer"
                        src={image}
                        alt="secondary image"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-black">
              {productDetails?.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-bold">{productDetails?.price}</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-lg font-semibold">
                {productDetails?.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                disabled={
                  productDetails
                    ? cartItems.findIndex(
                        (item) => item.id === productDetails.id
                      ) !== -1
                    : false
                }
                onClick={() => handleAddToCart(productDetails)}
                className="min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded mt-5 hover:bg-black hover:text-white  disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:focus:ring-0 disabled:border-gray-400 disabled:text-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
