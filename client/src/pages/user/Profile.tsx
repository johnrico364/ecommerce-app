import {
  FaArrowRightFromBracket,
  FaMapLocation,
  FaUserGear,
} from "react-icons/fa6";
import { OrderDetails } from "../../components/OrderDetails";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParseToken } from "../../hooks/user/useParseToken";

interface UserData {
  address: string;
  fname: string;
  lname: string;
  picture: string;
}

export const Profile = () => {
  const navigate = useNavigate();
  const { parseToken } = useParseToken();

  const [userData, set_userData] = useState<UserData>();

  const effectProf = async () => {
    try {
      const user = await parseToken();
      set_userData(user);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getUserOrders = async (query: string) => {
    console.log(query);
  };

  useEffect(() => {
    effectProf();
  }, []);

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
          <div className="p-img">
            <img
              src={
                userData?.picture
                  ? require(`../../images/user/${userData?.picture}`)
                  : ""
              }
              alt="Profile"
            />
          </div>

          <div className="name">
            {userData?.fname} {userData?.lname}
          </div>
          <div className="address">
            <FaMapLocation className="inline" /> {userData?.address}
          </div>
          <div onClick={logoutFn} className="logout">
            <FaArrowRightFromBracket className="inline me-1" />
            Log Out
          </div>
          <div className="xl:mb-60 mb-0"></div>
        </div>

        <div className="data-side">
          <div className="xl:w-10/12 lg:px-0 w-full px-2  mx-auto">
            <select
              className="border-2 rounded-md"
              onChange={(e) => getUserOrders(e.target.value)}
            >
              <option selected>To Approve</option>
              <option>To Ship</option>
              <option>Purchase History</option>
            </select>

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
