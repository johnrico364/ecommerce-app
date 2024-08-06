import axios from "axios";
import { useSelector } from "react-redux";

export const useParseToken = () => {
  const userToken = useSelector((state: any) => state.user.value.token);

  const parseToken = async () => {
    try {
      const userData = await axios.get(`/api/user/user-data/${userToken}`);
      return userData?.data?.user;
    } catch (error) {
      console.log(error);
    }
  };

  return { parseToken };
};
