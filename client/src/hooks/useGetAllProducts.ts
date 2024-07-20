import axios from "axios";

export const getAllProducts = () => {
  const getProductsAPI = async () => {
    try {
      const products = await axios.get("/api/product/getall");
      return products.data.products;
    } catch (error) {
      console.log(error);
    }
  };

  return { getProductsAPI };
};
