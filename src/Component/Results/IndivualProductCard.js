

const IndivualProductCard = ({product}) => (
    <div key={product.id} className="col-lg-2 col-md-4 col-sm-4 mb-3">
      <div className="card position-relative">
        <button className="btn btn-primary btn-add position-absolute top-0 end-0 rounded-circle">
          +
        </button>
        <img src={product.image} alt={product.name} className="card-img-top" />
        <div className="card-body bg-light">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text text-start btn btn-dark">{product.price}</p>
          <p className="card-text">Typical-range :{product.price}</p>
          <p>
           {/*  <FilledStar /> */}
          </p>
        </div>
      </div>
    </div>
  );
  
  export default IndivualProductCard;
  