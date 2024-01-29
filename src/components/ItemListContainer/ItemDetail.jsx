import React, { useState } from "react";
import {MDBCard,MDBCardBody,MDBCardText,MDBCardTitle,MDBCardImage,MDBBtn,MDBRipple,MDBContainer, MDBBtnGroup,} from "mdb-react-ui-kit";
import {LiaCartPlusSolid,LiaTrashAltSolid,} from "react-icons/lia";

const ItemDetail = ({ item,onQuantityChange }) => {

  
  if (!item) {
    return <div>Loading...</div>;
  }
  const [quantity, setQuantity] = useState(0);
  const [showCartElements, setShowCartElements] = useState(false);

  const handleAddToCart = () => {
    setQuantity(0);
    setShowCartElements((prevShowCartElements) => !prevShowCartElements);
    onQuantityChange(quantity);
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onQuantityChange(quantity - 1);
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
    <MDBContainer fluid className="w-50" alignment="center">
      <MDBCard>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          {item.images.length > 0 && (
            <MDBCardImage
              src={item.images[0]}
              className="card-img-top"
              alt={item.title}
            />
          )}
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardText>${item.price}</MDBCardText>
          <MDBCardText>{item.description}</MDBCardText>
          {!showCartElements ? (
              <MDBBtn
              to=""
              className="btn btn-primary"
              onClick={handleAddToCart}
            >
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
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default ItemDetail;
