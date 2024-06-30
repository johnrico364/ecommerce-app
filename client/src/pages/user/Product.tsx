import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "../../components/ProductCard";
import axios from "axios";
import { useState } from "react";

export const Product = () => {
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

      {productData.isLoading && <div className="text-6xl">Loading...</div>}
      <div className="flex justify-center mt-3">
        <img
          className="banner"
          src={require("../../images/assets/milk-banner.jpg")}
          alt="banner"
        />
      </div>

      <div className="items-container">
        {allProducts?.map((product: any) => {
          return (
            <div>
              <label htmlFor="my_modal_7" className="cursor-pointer">
                <ProductCard data={product}/>
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Hello!</h3>
                  <p className="py-4">
                    This modal works with a hidden checkbox!
                  </p>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
