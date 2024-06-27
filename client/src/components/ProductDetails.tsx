export const ProductDetails = () => {
  return (
    <div className="product-details mb-3 me-4 overflo-auto">
      <div className="card card-side h-42 bg-base-100">
        <figure>
          <img
            className="w-40 "
            src={require('../images/user/1716705236599.jpg')}
            alt="Product"
          />
        </figure>
        <div className="card-body text-nowrap">
          <h2 className="card-title mb-2">Lactom</h2>
          <div className="details">2 litter of milk</div>
          <div className="details">Stocks: 2422</div>
          <div className="details">Supplier: K&M Marketing</div>
          <div className="price">Price: P2000 each</div>
        </div>
      </div>
    </div>
  );
};
