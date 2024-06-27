import {
  FaArrowRightFromBracket,
  FaMapLocation,
  FaUserGear,
} from "react-icons/fa6";
import { OrderDetails } from "../../components/OrderDetails";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  const logoutFn = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <div className="flex">
        <div className="details-side">
          <div className="w-1/3">
            <FaUserGear className="ms-auto text-3xl" />
          </div>
          <img
            className="p-img"
            src={require("../../images/user/1716705236599.jpg")}
            alt="Profile"
            width={130}
          />
          <div className="name">John Anthony Rico</div>
          <div className="address">
            <FaMapLocation className="inline" /> Cebu
          </div>
          <div onClick={logoutFn} className="logout">
            <FaArrowRightFromBracket className="inline me-1" />
            Log Out
          </div>
          <div className="xl:mb-60 mb-0"></div>
        </div>

        <div className="data-side">
          <div className="xl:w-10/12 lg:px-0 w-full px-2  mx-auto">
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1">
                Select
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
              >
                <li>
                  <span>To Approve</span>
                </li>
                <li>
                  <span>To Ship</span>
                </li>
                <li>
                  <span>Purchase History</span>
                </li>
              </ul>
            </div>

            <div className="card-container flex">
              <div className="basis-full">
                <OrderDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
