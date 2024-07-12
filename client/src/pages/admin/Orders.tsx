import { FaBell } from "react-icons/fa6";
import { OrderDetails } from "../../components/OrderDetails";

export const Orders = () => {
  return (
    <div className="admin-orders-container">
      <div className="lg:basis-7/12 basis-11/12 pt-6">
        <div className="flex flex-wrap">
          <div className="basis-10/12">
            <OrderDetails />
          </div>
          <div className="basis-2/12 text-center">
            <label htmlFor="my_modal_6" className="btn">
              <FaBell />
            </label>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Order K$Alakndasekb123k4j1h3kjh
                </h3>
                <p className="py-4">
                  <button className="action-btn">Approved</button>
                  <button className="action-btn">Decline</button>
                </p>
                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn">
                    Cancel
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="basis-10/12">
            <OrderDetails />
          </div>
          <div className="basis-2/12 text-center">
            <label htmlFor="my_modal_6" className="btn">
              <FaBell />
            </label>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Order K$Alakndasekb123k4j1h3kjh
                </h3>
                <p className="py-4">
                  <button className="action-btn">Approved</button>
                  <button className="action-btn">Decline</button>
                </p>
                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn">
                    Cancel
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="basis-10/12">
            <OrderDetails />
          </div>
          <div className="basis-2/12 text-center">
            <label htmlFor="my_modal_6" className="btn">
              <FaBell />
            </label>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Order K$Alakndasekb123k4j1h3kjh
                </h3>
                <p className="py-4">
                  <button className="action-btn">Approved</button>
                  <button className="action-btn">Decline</button>
                </p>
                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn">
                    Cancel
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
