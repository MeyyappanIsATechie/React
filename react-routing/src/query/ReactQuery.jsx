import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addProduct, fetchList } from "../api";

const ReactQuery = () => {
  const [productName, setProductName] = useState("");

  const getQueryClient = useQueryClient();
  
  const { data: productList, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: () => fetchList(),
  });

  const { mutateAsync: handleAddProduct } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      getQueryClient.invalidateQueries(["productList"]);
    },
    onError: (error) => console.error(error),
  });

  const handleAddNewProduct = async () => {
    await handleAddProduct(productName);
    setProductName("");
  };

  return (
    <div>
      <h1>React Query</h1>
      <div>
        <input
          name="name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="enter product name"
        />
        <button
          onClick={handleAddNewProduct}
          disabled={productName.trim() === ""}
          type="button"
        >
          Add new product
        </button>
      </div>
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          productList.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ReactQuery;
