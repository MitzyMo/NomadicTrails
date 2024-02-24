import React, { useState, useContext } from "react";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import { LiaCartPlusSolid, LiaTrashAltSolid } from "react-icons/lia";
import { CartContext } from "../context/CartContext";

const ItemCount = () => {
  const { addItem, CantTotalProductos } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [showCartElements, setShowCartElements] = useState(false);

  const handleAddToCart = () => {
    setQuantity(1);
    setShowCartElements((prevShowCartElements) => !prevShowCartElements);
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      setShowCartElements(false);
    }
  };

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
          ADD TO CART <LiaCartPlusSolid size={24} />
        </MDBBtn>
      ) : (
        <MDBBtnGroup>
          <MDBBtn outline color="success" onClick={handleIncrease}>
            +
          </MDBBtn>
          <MDBBtn outline color="secondary" onClick={handleIncrease}>
            {quantity}
          </MDBBtn>
          {renderActionButton()}
        </MDBBtnGroup>
      )}
      <p>Total Products: {CantTotalProductos()}</p>
    </>
  );
};

export default ItemCount;
