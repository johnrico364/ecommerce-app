import { useQuery } from "@tanstack/react-query";
import { CartedProducts } from "../../components/CartedProducts";
import { useGetAllCarts } from "../../hooks/order/useGetAllCarts";
import { useParseToken } from "../../hooks/user/useParseToken";
import { useState } from "react";

export const Cart = () => {
  const { getAllCarts } = useGetAllCarts();
  const { parseToken } = useParseToken();

  const [cartData, set_cartData] = useState<any>([]);

  const effectCart = async () => {
    const userData = await parseToken();
    const carts = await getAllCarts(userData?._id);
    set_cartData(carts);

    return true;
  };

  useQuery({
    queryKey: ["carts"],
    queryFn: effectCart,
  });
  return (
    <div className="cart-container">
      <div className="product-container">
        {cartData?.map((cart: any) => {
          console.log(cart)
          return (
            <div className="flex flex-wrap">
              <div className="basis-10/12 lg:px-10 mb-5">
                <CartedProducts data={cart}/>
              </div>
              <div className="basis-1/12 text-end lg:pe-5 pt-5">
                <input className="checkbox" type="checkbox" />
              </div>
            </div>
          );
        })}
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
