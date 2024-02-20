import { useContext, useState } from "react";
import {MDBCard,MDBCardBody,MDBCardText,MDBCardTitle,MDBCardImage,MDBRipple,MDBContainer} from "mdb-react-ui-kit";
import { CartContext } from "../context/CartContext";
import Loading from "./Loading";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
      addItem(item, quantity);
  };

  if (!item) {
    return <Loading></Loading>;
  }
  return (
    <MDBContainer fluid className="w-50" alignment="center">
      <MDBCard>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
            <MDBCardImage
              src={item.image}
              className="card-img-top"
              alt={item.title}
            />

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
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default ItemDetail;
