import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";

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
      //console.log("Agregaste " + counter + " productos al carrito. Quedan " + (itemStock - counter) + " productos disponibles.");
    }
  };

  useEffect(() => {
    setItemStock(stock);
  }, [stock]);

  return (
    <>
      <div className="gap-5">
        <MDBBtnGroup className="mr-5">
        <MDBBtn outline color="danger" onClick={decrementar}>
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
          <Link to={"/cart"} className=" btn btn-outline-info">
            Go To Cart
          </Link>
        ) : (
          <MDBBtn
            type="button"
            className="ml-5 btn btn-outline-warning"
            onClick={addToCart}
          >
            Add to Cart
          </MDBBtn>
        )}
      </div>
    </>
  );
};

export default ItemCount;
