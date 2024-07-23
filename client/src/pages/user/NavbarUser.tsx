import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  FaArrowRightFromBracket,
  FaBars,
  FaBox,
  FaCartShopping,
  FaCircleInfo,
  FaUserLarge,
  FaXmark,
} from "react-icons/fa6";
import { useSelector } from "react-redux";
import axios from "axios";

export const NavbarUser = () => {
  const navigate = useNavigate();
  const [sidebar, set_sidebar] = useState("none");

  const user = JSON.parse(localStorage.getItem("user") || `{"token":"null"}`);

  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  const checkAuthUser = async () => {
    try {
      const user = await axiosInstance.get("/api/user/auth-token");

      console.log(user.data.isAdmin);
      user.data.isAdmin && navigate("/admin/dashboard");
    } catch (error: any) {
      error.response.data.mess || navigate("/login");
      console.log(error.response.data.mess);
    }
  };

  useEffect(() => {
    checkAuthUser();
  }, []);

  return (
    <div>
      <div className="my-navbar">
        <nav>
          <ul
            className="sidebar"
            onClick={() => set_sidebar("none")}
            style={{ display: sidebar }}
          >
            <li>
              <span>
                <FaXmark className="icons" />
              </span>
            </li>
            <li onClick={() => navigate("product")}>
              <span>
                <FaBox className="me-1" />
                Products
              </span>
            </li>
            <li onClick={() => navigate("cart")}>
              <span>
                <FaCartShopping className="me-1" />
                Cart
              </span>
            </li>
            <li onClick={() => navigate("about")}>
              <span>
                <FaCircleInfo className="me-1" />
                About
              </span>
            </li>
            <li onClick={() => navigate("profile")}>
              <span>
                <FaUserLarge className="me-1" />
                Profile
              </span>
            </li>
            <li
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/login");
              }}
            >
              <span>
                <FaArrowRightFromBracket className="me-1" />
                Logout
              </span>
            </li>
          </ul>

          <ul>
            <li className="xl:ms-8 ms-2">
              <span>
                <img
                  src={require("../../images/assets/Logo.png")}
                  alt="Logo"
                  width={170}
                />
              </span>
            </li>
            <li className="hideOnMobile" onClick={() => navigate("product")}>
              <span>
                <FaBox className="me-1" />
                Products
              </span>
            </li>
            <li className="hideOnMobile" onClick={() => navigate("cart")}>
              <span>
                <FaCartShopping className="me-1" />
                Cart
              </span>
            </li>
            <li className="hideOnMobile" onClick={() => navigate("about")}>
              <span>
                <FaCircleInfo className="me-1" />
                About
              </span>
            </li>
            <li
              className="hideOnMobile xl:me-8 me-2"
              onClick={() => navigate("profile")}
            >
              <span>
                <FaUserLarge className="me-1" />
                Profile
              </span>
            </li>
            <li className="menu-button" onClick={() => set_sidebar("flex")}>
              <span>
                <FaBars className="icons" />
              </span>
            </li>
          </ul>
        </nav>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
