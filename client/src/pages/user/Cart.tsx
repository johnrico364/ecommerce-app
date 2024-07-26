import { CartedProducts } from "../../components/CartedProducts";

export const Cart = () => {
  return (
    <div className="cart-container">
      <div className="product-container">
        <div className="flex flex-wrap">
          <div className="basis-10/12 lg:px-10 mb-5">
            <CartedProducts />
          </div>
          <div className="basis-1/12 text-end lg:pe-5 pt-5">
            <input className="checkbox" type="checkbox" />
          </div>

          <div className="basis-10/12 lg:px-10 mb-5">
            <CartedProducts />
          </div>
          <div className="basis-1/12 text-end lg:pe-5 pt-5">
            <input className="checkbox" type="checkbox" />
          </div>
        </div>
      </div>

      <div className="payment-container flex items-center">
        <div className="basis-1/2">Payment: ₱ 3234</div>
        <div className="basis-1/2 text-end lg:pe-5 pe-2">
          <button className="button">Check Out</button>
        </div>
      </div>
    </div>
  );
};
