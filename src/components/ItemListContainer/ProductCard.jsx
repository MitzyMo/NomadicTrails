
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";

const ProductCard = ({ item }) => {

  return (
    <div className="col-md-3">
      <div className="card border-0 text-center">
        <img
          src={item.image}
          className="card-img-top"
          alt={item.title}
          style={{ objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">${item.price}</p>
              <MDBBtn outline color="primary">
                <Link to={`/Store/${item.category}/${item.id}`}>
                  View Details
                </Link>
              </MDBBtn>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
