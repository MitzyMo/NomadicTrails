import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);

    const imagePath = item.image;

    const onAdd = (quantity) => {
        addItem(item, quantity);
    };

    return (
        <>
        <MDBContainer fluid alignment="end">
            <MDBCard  style={{ maxWidth: "90%" }}>
            <MDBRow className="g-0">
                <MDBCol md="4">
                <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay">
                    <MDBCardImage
                    className="card-img-top img-fluid"
                    src={imagePath}
                    alt={item.title}
                    />
                </MDBRipple>
                </MDBCol>
                <MDBCol md="8">
                <MDBCardBody>
                    <MDBCardTitle className="m-1">{item.title}</MDBCardTitle>
                    <hr />
                    <MDBCardText className="m-5 fw-bold">${item.price}</MDBCardText>
                    <MDBCardText>{item.description}</MDBCardText>
                    <br></br>
                    <ItemCount
                    className="m-5"
                    stock={item.Stock}
                    onAdd={onAdd}
                    />
                </MDBCardBody>
                </MDBCol>
            </MDBRow>
            </MDBCard>
        </MDBContainer>
        </>
    );
};

export default ItemDetail;
