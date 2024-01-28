import React from "react";
import { Link } from "react-router-dom";
import { LiaCartPlusSolid } from "react-icons/lia";

const ProductCard = ({ item, onClick }) => {
  return (
    <div className="col-md-3" onClick={onClick}>
      <div className="card border-0 text-center">
      <img
  src={item.images && item.images.length > 0 ? item.images[0] : ''}
  className="card-img-top"
  alt={item.title}
  style={{ objectFit: 'contain' }}
/>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">${item.price}</p>
          <Link to={`/Store/${item.category}/${item.id}`} className="btn btn-primary">
  ADD TO CART <LiaCartPlusSolid size={24} />
</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;