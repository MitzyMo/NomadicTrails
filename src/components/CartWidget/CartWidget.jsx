import { useContext } from "react";
import { LiaOpencart } from "react-icons/lia";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        CantTotalProductos() > 0 ? <Link to={"/cart"} className="position-relative">
            <LiaOpencart/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
        </Link> : ""
    )
}

export default CartWidget;