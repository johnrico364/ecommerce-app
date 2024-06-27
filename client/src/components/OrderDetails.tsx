export const OrderDetails = () => {
  return (
    <div className="order-card">
      <div className="card card-side h-40 bg-base-100 overflow-auto">
        <figure>
          <img
            className="h-40"
            src={require("../images/assets/Logo_v2.png")}
            alt="product"
          />
        </figure>
        <div className="card-body py-0 px-3">
          <div className="card-title">Lactom</div>
          <div className="details">200ml canned milk powder shaboha yko pina twerk</div>
          <div className="details">Order By: dq3n312oi12h3o13</div>
          <div className="text-end">x 2</div>
          <div className="price">P 3,100</div>
        </div>
      </div>
    </div>
  );
};
