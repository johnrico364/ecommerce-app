import { FaBoxOpen, FaCirclePlus } from "react-icons/fa6";
import { ProductDetails } from "../../components/ProductDetails";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAddProduct } from "../../hooks/useAddProduct";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Products = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Product name required")
      .min(3, "Name too short"),
    description: yup.string().required("Provide product description"),
    supplier: yup.string().required("Supplier required"),
    price: yup.number().integer("Whole number only").min(5, "Price too low"),
    stocks: yup.number().integer("Whole number only").min(2, "Stocks too low"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [productImg, set_productImg] = useState<File | null>(null);
  const [successMess, set_successMess] = useState<string>("");
  const [allProducts, set_allProducts] = useState<any>([]);

  const { addProduct, isLoading, exception, set_exception } = useAddProduct();

  const getProductsFn = async () => {
    try {
      const products = await axios.get("/api/product/getall");
      set_allProducts(products.data.products);

      return true;
    } catch (error) {}
  };

  const addProductFn = async (form: any) => {
    const productData = new FormData();

    productImg && productData.append("image", productImg);
    productData.append("product", JSON.stringify(form));

    try {
      const prod = await addProduct(productData);
      prod?.response && set_successMess(prod?.message);
    } catch (error) {}
  };

  const productData = useQuery({
    queryKey: ["product"],
    queryFn: getProductsFn,
    // refetchInterval: 2000,
  });

  return (
    <div className="admin-product-container">
      <div className="product-data-container">
        {allProducts.map((product: any) => {
          return (
            <div className="flex data-card">
              <div className="md:basis-10/12 basis-full">
                <ProductDetails data={product} />
              </div>
              <div className="md:basis-2/12 basis-full">
                <button className="button">Edit</button>
                <button className="button">Delete</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="xl:basis-7/12 basis-11/12">
        <div className="flex justify-end mt-3">
          <label htmlFor="my_modal_7">
            <FaCirclePlus className="icon" />
          </label>

          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <form onSubmit={handleSubmit(addProductFn)}>
                <div className="text-2xl font-semibold mb-1">
                  <FaBoxOpen className="inline" /> Add Product
                </div>
                <div className="flex flex-wrap justify-center">
                  <div className="basis-11/12 mb-2">
                    <input
                      className="img-input"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        set_productImg(
                          e.target.files ? e.target.files[0] : null
                        );
                        set_exception("");
                      }}
                    />
                    <div className="form-error">{exception}</div>
                  </div>
                  <div className="basis-11/12 mb-2">
                    <input
                      className="prod-input"
                      type="text"
                      placeholder="Name"
                      {...register("name")}
                    />
                    <div className="form-error">{errors.name?.message}</div>
                  </div>
                  <div className="basis-11/12 mb-2">
                    <textarea
                      className="w-full prod-input pt-2 min-h-20"
                      placeholder="Description"
                      {...register("description")}
                    ></textarea>
                    <div className="form-error">
                      {errors.description?.message}
                    </div>
                  </div>
                  <div className="basis-11/12 mb-2">
                    <input
                      className="prod-input"
                      type="text"
                      placeholder="Supplier"
                      {...register("supplier")}
                    />
                    <div className="form-error">{errors.supplier?.message}</div>
                  </div>
                  <div className="basis-6/12 md:me-1 mb-2">
                    <input
                      className="prod-input"
                      type="number"
                      placeholder="Price"
                      defaultValue={0}
                      {...register("price")}
                    />
                    <div className="form-error">{errors.price?.message}</div>
                  </div>
                  <div className="basis-5/12 mb-2">
                    <input
                      className="prod-input"
                      type="number"
                      placeholder="Stocks"
                      defaultValue={0}
                      {...register("stocks")}
                    />
                    <div className="form-error">{errors.stocks?.message}</div>
                  </div>
                  <div className="basis-11/12 mb-2">
                    <button className="form-button">Add Product</button>
                  </div>
                  <div className="basis-11/12 mb-2 text-lg font-sans">
                    {successMess}
                  </div>
                </div>
              </form>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
