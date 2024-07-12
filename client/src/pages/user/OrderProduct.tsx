import { useParams } from "react-router-dom";

export const OrderProduct = () => {
  const { details } = useParams();
  const _id = details?.split("-")[1];

  return (
    <div className="product-details">
      <div className="basis-8/12 mt-5 border">
        <div className="flex flex-wrap">
          <div className="basis-5/12 p-3">
            <img
              className="w-96"
              src={require("../../images/product/1719658973782.png")}
              alt="product"
            />
          </div>
          <div className="basis-7/12 p-5">
            <div className="product-title"> Nido</div>
            <div className="brake-row"></div>
            <div className="product-price">P 311</div>
          </div>
        </div>
      </div>
    </div>
  );
};
