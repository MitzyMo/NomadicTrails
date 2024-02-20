import { useEffect, useState } from "react";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import { LiaCartPlusSolid, LiaTrashAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(0);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);
console.log("Before")
console.log(itemAdded)
console.log(itemStock)
console.log(counter)
    const increase = () => {
        if (counter < itemStock) {
        setCounter((prevCounter) => prevCounter + 1);
        onAdd(counter + 1);
        }
    };

    const addToCart = () => {
        setCounter(1);
        setItemStock(itemStock - counter);
        setItemAdded(true);
        onAdd(counter);
    };

    const decrease = () => {
        if (counter > 1) {
        setCounter((prevCounter) => prevCounter - 1);
        onAdd(counter - 1);
        } else {
        setItemAdded(false);
        }
    };

    const renderActionButton = () => {
        if (counter > 1) {
        return (
            <MDBBtn outline color="danger" onClick={decrease}>
            -
            </MDBBtn>
        );
        } else {
        return (
            <MDBBtn outline color="danger" onClick={addToCart}>
            <LiaTrashAltSolid />
            </MDBBtn>
        );
        }
    };

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <>
        <div className="row my-1">
            <div className="col-md-5">
            {!itemAdded ? (
                <MDBBtn to="" className="btn btn-primary" onClick={addToCart}>
                ADD TO CART <LiaCartPlusSolid size={24} />
                </MDBBtn>
            ) : (
                <div>
                <MDBBtnGroup>
                    <MDBBtn outline color="success" onClick={increase}>
                    +
                    </MDBBtn>
                    <MDBBtn outline color="secondary">
                    {counter}
                    </MDBBtn>
                    {renderActionButton()}
                </MDBBtnGroup>
                <Link to={"/cart"} className="btn btn-outline-info ">
                    Go to Cart
                </Link>
                </div>
            )}
            </div>
        </div>
        </>
    );
};

export default ItemCount;
