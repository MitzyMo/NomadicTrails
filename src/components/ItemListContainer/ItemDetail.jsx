import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCardImage, MDBRipple, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Loading from "./Loading";
import ItemCount from "./ItemCount";
import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";


const ItemDetail = ({ item }) => {
  const {addItem} = useContext(CartContext);
  
  if (!item) {
    return <Loading />;
  }
  const onAdd = (quantity) => {
    addItem(item, quantity);
}
  return (
    <MDBContainer fluid className="w-50" alignment="center">
      <MDBCard>
      <MDBRow>
          <MDBCol>
          <Breadcrumb pageId={item.category} productName={item.title} />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
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
          </MDBCol>
          <MDBCol>
            <MDBCardBody>
              <MDBCardTitle className="mb-3">{item.title}</MDBCardTitle>
              <MDBCardText className="text-secondary">Stock: {item.Stock}</MDBCardText>
              <hr />
              <MDBCardText className="fw-bold">Price: ${item.price}</MDBCardText>
              <MDBCardText>{item.description}</MDBCardText>
              <ItemCount stock={item.Stock} onAdd={onAdd} />
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default ItemDetail;
