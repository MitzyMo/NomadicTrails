import { MDBBadge, MDBIcon } from "mdb-react-ui-kit";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { CantTotalProductos } = useContext(CartContext);

  return (
    CantTotalProductos() > 0 ? (
      <Link to={"/cart"}>
        <MDBIcon fas icon="shopping-cart"></MDBIcon>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MDBBadge pill color="danger">
            {CantTotalProductos()}
          </MDBBadge>
        </span>
      </Link>
    ) : null
  );
};

export default CartWidget;