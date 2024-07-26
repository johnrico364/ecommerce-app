export const CartedProducts = () => {
  return (
    <div className="carted-products">
      <div className="card card-side bg-base-100 h-44">
        <div className="sm:basis-4/12 basis-6/12">
          <img src={require("../images/user/1719302861288.jpg")} alt="product" />
        </div>
        <div className="basis-8/12">
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <div className="details">
              <div>Price: P 304</div>
              <div>Quantity: x2</div>
              <div className="text-end mt-4">Total: ₱ 608</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
