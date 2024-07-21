import { useParams } from "react-router-dom";

export const ProductEdit = () => {
  const { details } = useParams();
  const _id = details?.split("-")[1];

  return <div className="product-edit-container">HElo</div>;
};
