import {
  FaCalendarCheck,
  FaFaceSmileBeam,
  FaMinus,
  FaPlus,
  FaTruck,
} from "react-icons/fa6";
import { useParams } from "react-router-dom";

export const OrderProduct = () => {
  const formatter = new Intl.NumberFormat("en").format;

  const { details } = useParams();
  const _id = details?.split("-")[1];

  return (
    <div className="order-product-container">
      <div className="lg:basis-8/12 basis-11/12 mt-5">
        <div className="flex flex-wrap">
          <div className="lg:basis-5/12 max-sm:w-72 p-3">
            <img
              className="w-96 bg-cover"
              src={require("../../images/product/1719658973782.png")}
              alt="product"
            />
          </div>
          <div className="lg:basis-7/12 p-5">
            <div className="product-title"> Nido</div>
            <div className="brake-row"></div>
            <div className="product-price">₱ {formatter(30000)}</div>
            <div className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio neque, quam, sed ut vel eos hic adipisci non impedit
              eius, cum odio nisi excepturi corrupti recusandae perspiciatis.
              Nisi alias molestias deserunt atque quo corporis consequuntur
              veritatis, nam incidunt, ab cumque enim saepe tempora.
            </div>
            <div className="product-quantity mt-3">
              <span className="mr-4">Quantity:</span>
              <FaPlus className="icon mr-3" />
              1
              <FaMinus className="icon ml-3" />
            </div>
            <div className="order-actions mt-3">
              <button className="button mr-2">Add To Cart</button>
              <button className="button ml-2">Order</button>
            </div>
            <div className="flex mt-5">
              <div className="badges">
                <FaCalendarCheck className="inline" /> 100 % Authentic
              </div>
              <div className="badges">
                <FaFaceSmileBeam className="inline" /> Free & Easy Returns
              </div>
              <div className="badges">
                <FaTruck className="inline" /> Guaranteed Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
