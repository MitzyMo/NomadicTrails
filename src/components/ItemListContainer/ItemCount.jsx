import React, { useContext } from "react";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import { LiaCartPlusSolid, LiaTrashAltSolid } from "react-icons/lia";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = () => {

  const {
    handleAddToCart,
    handleDecrease,
    handleIncrease,
    showCartElements,
    quantity,
  } = useContext(CartContext);

  const renderActionButton = () => {
    if (quantity > 1) {
      return (
        <MDBBtn outline color="danger" onClick={handleDecrease}>
          -
        </MDBBtn>
      );
    } else {
      return (
        <MDBBtn outline color="danger" onClick={handleAddToCart}>
          <LiaTrashAltSolid />
        </MDBBtn>
      );
    }
  };

  return (
    <>
      {!showCartElements ? (
        <MDBBtn to="" className="btn btn-primary" onClick={handleAddToCart}>
          ADD TO CART<LiaCartPlusSolid size={24} />
        </MDBBtn>
        
      ) : (
        <div>
          <MDBBtnGroup className="mr-5">
            <MDBBtn outline color="success" onClick={handleIncrease}>
              +
            </MDBBtn>
            <MDBBtn outline color="secondary" onClick={handleIncrease}>
              {quantity}
            </MDBBtn>
            {renderActionButton()}
          </MDBBtnGroup>
          <Link to={"/cart"} className="btn btn-outline-info">
            Go to Cart
          </Link>
        </div>
      )}
    </>
  );
};

export default ItemCount;
