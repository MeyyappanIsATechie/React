import { useEffect } from "react";
import useCounter, { useActions } from "../store/useCounter";

const Products = () => {
  //   const getProducts = useCounter((state) => state.fetchList);
  const productsList = useCounter((state) => state.products);
  const { fetchList } = useActions();
  useEffect(() => {
    fetchList(); // Fetching products data here
  }, []);
  return (
    <div>
      <h1> Products List</h1>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {productsList?.length ? (
          productsList.map((product) => (
            <div key={product?.id}>
              <p>{product?.title}</p>
              <img src={product?.thumbnail} alt={product?.thumbnail} />
            </div>
          ))
        ) : (
          <h3>No products available</h3>
        )}
      </ul>
    </div>
  );
};

export default Products;
