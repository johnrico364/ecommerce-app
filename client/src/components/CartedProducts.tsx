export const CartedProducts = () => {
  return (
    <div className="carted-products">
      <div className="card card-side bg-base-100 h-48">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <div className="details">
            <div>Price: P 304</div>
            <div>Quantity: x2</div>
            <div className="text-end mt-4">Total: P 608</div>
          </div>
        </div>
      </div>
    </div>
  );
};
