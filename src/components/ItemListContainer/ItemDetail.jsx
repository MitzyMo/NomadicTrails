import React from "react";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCardImage, MDBRipple, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { LiaCartPlusSolid } from "react-icons/lia";
import Loading from "./Loading";
import ItemCount from "./ItemCount";
import Breadcrumb from "./Breadcrumb";

const ItemDetail = ({ item, onQuantityChange }) => {
  if (!item) {
    return <Loading />;
  }

  return (
    <MDBContainer fluid className="w-50" alignment="center">
      <MDBCard>
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
              <MDBCardTitle>{item.title}</MDBCardTitle>
              <MDBCardText>${item.price}</MDBCardText>
              <MDBCardText>{item.description}</MDBCardText>
              <ItemCount item={item} onQuantityChange={onQuantityChange} />
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default ItemDetail;
