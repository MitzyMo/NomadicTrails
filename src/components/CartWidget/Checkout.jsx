import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Breadcrumb from "../ItemListContainer/Breadcrumb";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const { cart, clear, CantTotalProductos, SumaTotalProductos } =
        useContext(CartContext);

    const generarOrden = () => {
        if (nombre.length === 0) {
        return false;
        }

        if (email.length === 0) {
        return false;
        }

        if (telefono.length === 0) {
        return false;
        }

        const buyer = { name: nombre, email: email, phone: telefono };
        const items = cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        }));
        const fecha = new Date();
        const date = `${fecha.getDate()}/${
        fecha.getMonth() + 1
        }/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = SumaTotalProductos();
        const order = { buyer: buyer, items: items, date: date, total: total };

        // Inserto Documento en Firestore
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((resultado) => {
        clear();
        setOrderId(resultado.id);
        });
    };

    return (
        <MDBContainer className="mt-5">
        {orderId ? (
            <>
            <div className="text-center" role="alert">
                <p className="display-1">
                <MDBCardImage
                    src="https://img.freepik.com/free-psd/fireworks-element-isolated_23-2151045883.jpg?t=st=1708828840~exp=1708832440~hmac=52cc3fbe455cb025111dda94ca9f960f606c0638687711627e455a160d666f15&w=826"
                    fluid
                    className="rounded-3"
                    alt="Fireworks"
                    style={{ objectFit: "contain", width: "360px" }}
                />
                </p>
                <MDBTypography tag="h1" className="fw-bold mb-5 deep-blue">
                Thank for your purchase
                </MDBTypography>
                <p>
                Your order ID is: <b>{orderId}</b>
                </p>
                <Link to={"/"} className="btn btn-outline-secondary">
                Back Home
                </Link>
            </div>
            </>
        ) : (
            <>
            <MDBRow className="">
                <MDBCol className="col text-center my-3">
                <h1 className="my-5 blue-deep">Checkout</h1>
              <Breadcrumb pageId={cart.category} productName={cart.title} />
            </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className="col-md-6">
                <form>
                    <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onInput={(e) => {
                        setNombre(e.target.value);
                        }}
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        onInput={(e) => {
                        setEmail(e.target.value);
                        }}
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        onInput={(e) => {
                        setTelefono(e.target.value);
                        }}
                    />
                    </div>
                    <button
                    type="button"
                    className="btn btn-outline-success mt-3"
                    onClick={generarOrden}
                    >
                    Generar Orden
                    </button>
                </form>
                </MDBCol>
                <MDBCol className="col-md-6 text-center">
                <MDBTable className="table">
                    <MDBTableBody>
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
                        </tr>
                    ))}
                    <tr>
                        <td className="text-start align-middle" colSpan={4}>
                        Total
                        </td>
                        <td className="text-start align-middle">
                        ${SumaTotalProductos()}
                        </td>
                    </tr>
                    </MDBTableBody>
                </MDBTable>
                </MDBCol>
            </MDBRow>
            </>
        )}
        </MDBContainer>
    );
};

export default Checkout;
