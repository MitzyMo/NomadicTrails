import React, { useState, useContext, useEffect } from "react";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import { LiaCartPlusSolid, LiaTrashAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [showCartElements, setShowCartElements] = useState(false);

  useEffect(() => {
    setItemStock(stock);
  }, [stock]);

  const handleAddToCart = () => {
    setShowCartElements(!showCartElements);
    console.log("Intentando Imprimir Stock:" + itemStock);
  };

  const handleIncrease = () => {
    if (counter < itemStock) {
      setCounter(counter + 1);
    }
    console.log(
      "Agregaste " +
        counter +
        " productos al carrito. Quedan " +
        (itemStock - counter) +
        " productos disponibles."
    );
    //setCounter((prevcounter) => prevcounter + 1);
  };

  const handleDecrease = () => {
    if (counter > 1) {
      setCounter((prevcounter) => prevcounter - 1);
    } else {
      setShowCartElements(false);
    }
    console.log(
      "Agregaste " +
        counter +
        " productos al carrito. Quedan " +
        (itemStock - counter) +
        " productos disponibles."
    );
  };

  const addToCart = (counter) => {
    if (counter <= itemStock) {
      setItemStock(itemStock - counter);
      setCounter(1);
      onAdd(counter);
      console.log(
        "Agregaste " +
          counter +
          " productos al carrito. Quedan " +
          (itemStock - counter) +
          " productos disponibles. - -"
      );
    }
  };
  const handleAddToCartClick = () => {
    handleAddToCart();
    addToCart(counter); // Passing the current counter value
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
        <MDBBtn
          to=""
          className="btn btn-primary"
          onClick={handleAddToCartClick}
        >
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
          <Link to={"/cart"} className="btn btn-outline-info">
            Go to Cart
          </Link>
        </div>
      )}
    </>
  );
};

export default ItemCount;
