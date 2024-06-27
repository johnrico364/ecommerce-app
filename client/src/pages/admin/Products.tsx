import { FaCirclePlus } from "react-icons/fa6";
import { ProductDetails } from "../../components/ProductDetails";

export const Products = () => {
  return (
    <div className="admin-product-container">
      <div className="product-data-container">
        <div className="flex data-card">
          <div className="md:basis-10/12 basis-full">
            <ProductDetails />
          </div>
          <div className="md:basis-2/12 basis-full">
            <button className="button">Edit</button>
            <button className="button">Delete</button>
          </div>
        </div>
      </div>

      <div className="xl:basis-7/12 basis-11/12">
        <div className="flex justify-end mt-3">
          <FaCirclePlus className="icon"/>
        </div>
      </div>
    </div>
  );
};
