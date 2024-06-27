import { ProductCard } from "../../components/ProductCard";

export const Product = () => {
  return (
    <div className="product-container">
      <div className="search-nav">
        <input className="search-bar" type="text" placeholder="Search" />
      </div>

      <div className="flex justify-center mt-3">
        <img
          className="banner"
          src={require("../../images/assets/milk-banner.jpg")}
          alt="banner"
        />
      </div>

      <div className="items-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
