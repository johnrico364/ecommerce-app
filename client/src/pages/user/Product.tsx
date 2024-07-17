import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "../../components/ProductCard";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  const navigate = useNavigate();
  const [allProducts, set_allProducts] = useState<any>([]);

  const getProductsFn = async () => {
    try {
      const products = await axios.get("/api/product/getall");
      set_allProducts(products.data.products);
      return true;
    } catch (error) {}
  };

  const productData = useQuery({
    queryKey: ["product"],
    queryFn: getProductsFn,
    // refetchInterval: 2000,
  });

  return (
    <div className="product-container">
      <div className="search-nav">
        <input className="search-bar" type="text" placeholder="Search" />
      </div>
      <div className="flex justify-center mt-3">
        <img
          className="banner"
          src={require("../../images/assets/milk-banner.jpg")}
          alt="banner"
        />
      </div>
      {productData.isLoading && <div className="text-6xl">Loading...</div>}

      <div className="items-container">
        {allProducts?.map((product: any) => {
          console.log(product);
          return (
            <div
              onClick={() =>
                navigate(`/user/product/${product?.name}-${product?._id}`)
              }
            >
              <ProductCard data={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
