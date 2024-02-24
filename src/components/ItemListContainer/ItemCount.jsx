import React, { useState, useContext } from "react";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import { LiaCartPlusSolid, LiaTrashAltSolid } from "react-icons/lia";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({ item, onAdd }) => {
  const [counter, setCounter] = useState(1);
  const [itemAdded, setItemAdded] = useState(false);
  const [showCartElements, setShowCartElements] = useState(false);

  const handleAddToCart = () => {
    setShowCartElements(!showCartElements);
  };

  const handleIncrease = () => {
    setCounter((prevcounter) => prevcounter + 1);
  };

  const handleDecrease = () => {
    if (counter > 1) {
      setCounter((prevcounter) => prevcounter - 1);
    } else {
      setShowCartElements(false);
    }
  };

  const addToCart = () => {
    setCounter(1);
    onAdd(counter);
    setItemAdded(true);
    //console.log("Agregaste " + counter + " productos al carrito. Quedan " + (itemStock - counter) + " productos disponibles.");
  };

  const handleAddToCartClick = () => {
    handleAddToCart();
    addToCart();
  };

  const renderActionButton = () => {
    if (counter > 1) {
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
        <MDBBtn to="" className="btn btn-primary" onClick={handleAddToCartClick}>
          ADD TO CART <LiaCartPlusSolid size={24} />
        </MDBBtn>
      ) : (
        <div>
          <MDBBtnGroup className="mr-5">
            <MDBBtn outline color="success" onClick={handleIncrease}>
              +
            </MDBBtn>
            <MDBBtn outline color="secondary" onClick={handleIncrease}>
              {counter}
            </MDBBtn>
            {renderActionButton()}
          </MDBBtnGroup>
          {itemAdded ? (
            <Link to={"/cart"} className="btn btn-outline-info">
              Go to Cart
            </Link>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default ItemCount;