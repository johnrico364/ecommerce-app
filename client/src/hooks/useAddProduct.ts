import axios from "axios";
import { useState } from "react";

export const useAddProduct = () => {
  const [isLoading, set_isLoading] = useState<boolean>(false);
  const [exception, set_exception] = useState<string>("");

  const addProductAPI = async (newProduct: any) => {
    set_isLoading(true);
    try {
      const product = await axios.post("/api/product/create", newProduct);
      console.log(product);

      return { response: true, message: "Product Created Successfully!" };
    } catch (error: any) {
      set_exception(error.response.data.error);
    }
    set_isLoading(false);
  };

  return { addProductAPI, isLoading, exception, set_exception };
};
