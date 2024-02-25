import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { LiaTrashAlt } from "react-icons/lia";
import {
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTypography,
} from "mdb-react-ui-kit";
import Breadcrumb from "../ItemListContainer/Breadcrumb";

const Cart = () => {
  const { cart, removeItem, clear, CantTotalProductos, SumaTotalProductos } =
    useContext(CartContext);

  if (CantTotalProductos() == 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <MDBTypography
              tag="h2"
              className="alert alert-danger mt-5 fw-bold mb-0"
            >
              Your Cart is Empty!
            </MDBTypography>
            <p className="display-1">
              <img
                src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?t=st=1708806413~exp=1708810013~hmac=dba04bffce85d4a1258051df038a73a0300f609b324e4c718bd4852febeda9d5&w=826"
                alt="empty cart"
                style={{ height: "400px" }}
              />
            </p>

            <Link
              to={"/Store"}
              style={{ width: "360px", fontSize: "1em" }}
              className="btn btn-outline-secondary my-5 fw-bold"
            >
              Back to Store
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <MDBContainer fluid className="w-50" alignment="center">
        <MDBCard>
          <MDBRow>
            <MDBCol>
              <Breadcrumb pageId={cart.category} productName={cart.title} />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <div className="container">
                <div className="row">
                  <div className="col text-center">
                    <MDBTypography tag="h1" className="fw-bold mb-5 deep-blue">
                      Shopping Cart
                    </MDBTypography>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <MDBTable align="middle">
                      <MDBTableHead className="table-light">
                        <tr>
                          <th scope="col" colSpan={6}></th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td className="text-end align-middle" colSpan={6}>
                            <a
                              href="#"
                              onClick={clear}
                              className="btn btn-outline-danger"
                            >
                              Empty Cart <LiaTrashAlt />
                            </a>
                          </td>
                        </tr>
                        {cart.map((product) => (
                          <tr key={product.id}>
                            <td className="align-middle">
                              <img
                                src={product.image}
                                alt={product.title}
                                width={80}
                              />
                            </td>
                            <td className="text-start align-middle">
                              {product.title}
                            </td>
                            <td className="text-start align-middle">
                              ${product.price}
                            </td>
                            <td className="text-start align-middle">
                              {product.quantity}
                            </td>
                            <td className="text-start align-middle">
                              ${product.quantity * product.price}
                            </td>
                            <td className="text-end align-middle">
                              <a
                                href="#"
                                onClick={() => {
                                  removeItem(product.id);
                                }}
                              >
                                <LiaTrashAlt />
                              </a>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td className="text-start align-start" colSpan={4}>
                            Total
                          </td>
                          <td className="text-start align-middle">
                            ${SumaTotalProductos()}
                          </td>
                          <td className="text-end align-middle">
                            <Link
                              to={"/checkout"}
                              className="btn btn-outline-primary"
                            >
                              Checkout
                            </Link>
                          </td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Cart;
