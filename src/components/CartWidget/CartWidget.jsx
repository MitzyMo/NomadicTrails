import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { LiaOpencart } from "react-icons/lia";

const CartWidget = () => {
  const { CantTotalProductos } = useContext(CartContext);

  return CantTotalProductos() > 0 ? (
    <Link to={"/cart"} className="position-relative .text-info">
      <LiaOpencart size={24} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {CantTotalProductos()}
      </span>
    </Link>
  ) : (
    ""
  );
};

export default CartWidget;
