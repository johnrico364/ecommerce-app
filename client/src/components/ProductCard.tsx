export const ProductCard = () => {
  return (
    <div className="items-card">
      <div className="card card-compact bg-base-100 shadow-sm shadow-blue-100">
        <figure>
          <img
          className=" h-32"
            src={require('../images/assets/Logo_v2.png')}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p className="card-discription">If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="card-price"> P 3,100</div>
          </div>
        </div>
      </div>
    </div>
  );
};
