import { formatDistanceToNow } from "date-fns";
import React from "react";

interface UserDetailsProps {
  data: {
    fname: string;
    lname: string;
    address: string;
    email: string;
    picture: string;
    updatedAt: string;
  };
  index: number;
}

export const UserDetails: React.FC<UserDetailsProps> = ({ data, index }) => {
  const updateDate = formatDistanceToNow(new Date(data.updatedAt), {
    addSuffix: true,
  });

  return (
    <div className="flex flex-wrap">
      <div className="basis-4/12 pr-2">
        <img src={require(`../images/user/${data.picture}`)} alt="" />
      </div>
      <div className="basis-8/12">
        <div className="font-semibold ps-2"># {index}</div>
        <div>
          <span className="font-semibold">Name: </span>
          {data.lname}, {data.fname}
        </div>
        <div>
          <span className="font-semibold">Address: </span>
          {data.address}
        </div>
        <div>
          <span className="font-semibold">Email: </span>
          {data.email}
        </div>
        <div>
          <span className="font-semibold">Updated: </span>
          {updateDate}
        </div>
      </div>
    </div>
  );
};
