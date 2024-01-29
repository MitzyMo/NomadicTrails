import { MDBBadge, MDBIcon } from "mdb-react-ui-kit";


const CartWidget = ({ totalQuantity }) => {

  return (
    <>
      <MDBBadge pill color='danger'>{totalQuantity}!
      </MDBBadge>
      <span>
        <MDBIcon fas icon='shopping-cart'></MDBIcon>
      </span>
    </>
  );
};

export default CartWidget;
