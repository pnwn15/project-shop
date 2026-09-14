import { Link } from "react-router-dom";

function ProdutCart({ items }) {
  return (
    <div className="product-card">
      <div className="bg-body-secondary rounded d-flex justify-content-center p-4">
        <Link to="/product">
          <img src={items.image} alt={items.title} />
        </Link>
      </div>
      <h6 className="pt-3">{items.title}</h6>
      <div className="product-rating">
        <span className="stars">★★★★★</span>
        <span className="rating-score">{items.rating.rate}/5</span>
        <span className="badge-count">quantity {items.rating.count}</span>
      </div>
      <p className="text-black">${items.price.toLocaleString()}</p>
    </div>
  );
}

export default ProdutCart;
