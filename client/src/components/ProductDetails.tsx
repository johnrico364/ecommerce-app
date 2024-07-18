import React from "react";

interface ProductDetailsProps {
  data: {
    createdAt: any;
    description: string;
    isDeleted: boolean;
    name: string;
    picture: string;
    price: number;
    stocks: number;
    supplier: string;
    updatedAt: any;
  };
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  return (
    <div className="product-details mb-3 me-4 overflo-auto">
      <div className="card card-side h-42 bg-base-100">
        <div className="basis-3/12">
          <img
            src={require(`../images/product/${data.picture}`)}
            alt="Product"
          />
        </div>
        <div className="basis-9/12">
          <div className="card-body ">
            <h2 className="card-title mb-2">{data.name}</h2>
            <div className="details">{data.description}</div>
            <div className="details">Stocks: {data.stocks}</div>
            <div className="details">Supplier: {data.supplier}</div>
            <div className="price">Price: ₱ {data.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
