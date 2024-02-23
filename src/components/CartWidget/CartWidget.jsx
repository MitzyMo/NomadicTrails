import React, { useContext } from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { LiaOpencart } from "react-icons/lia";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      {totalQuantity > 0 ? (
        <Link to={"/cart"} className="btn btn-warning position-relative">
          <LiaOpencart />
          <span>
            <MDBBadge pill color="danger">
              {totalQuantity}!
            </MDBBadge>
          </span>
        </Link>
      ) : (
        ""
      )}
    </>
  );
};

export default CartWidget;
