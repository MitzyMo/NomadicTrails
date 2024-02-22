import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import { LiaOpencart } from "react-icons/lia";

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementar = () => {
        if (counter < itemStock) {
        setCounter(counter + 1);
        }
    };

    const decrementar = () => {
        if (counter > 1) {
        setCounter(counter - 1);
        }
    };

    const addToCart = () => {
        if (counter <= itemStock) {
        setItemStock(itemStock - counter);
        setCounter(1);
        onAdd(counter);
        setItemAdded(true);
        }
    };

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <>
        <div className="d-flex justify-content-start gap-5 h-100">
            <MDBBtnGroup>
            <MDBBtn outline color="success" onClick={decrementar}>
                -
            </MDBBtn>

            <MDBBtn outline color="secondary">
                {counter}
            </MDBBtn>
            <MDBBtn outline color="success" onClick={incrementar}>
                +
            </MDBBtn>
            </MDBBtnGroup>

            {itemAdded ? (
            <Link to={"/cart"} className="btn btn-primary ">
                {" "}
                Go to Cart <LiaOpencart size={24} />
            </Link>
            ) : (
            <MDBBtn className="btn btn-primary" onClick={addToCart}>
                {" "}
                Add to Cart <LiaOpencart size={19} />
            </MDBBtn>
            )}
        </div>
        </>
    );
};

export default ItemCount;
