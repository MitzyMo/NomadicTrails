import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBBadge,
} from "mdb-react-ui-kit";
import Logo from "../Brand/Logo";

export default function App() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light" className="font">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
        <Logo size={40} alt="Mo's Logo" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarLink alt="Home"  aria-current="page" href="/" >Home</MDBNavbarLink>
            <MDBNavbarLink alt="About me"  aria-current="page" href="/About" >About me</MDBNavbarLink>
            <MDBNavbarLink alt="Travel Tips"  aria-current="page" href="/Travel" >Travel Tips</MDBNavbarLink>
            <MDBNavbarLink alt="Gallery"  aria-current="page" href="/Gallery" >Gallery</MDBNavbarLink>
            <MDBNavbarLink alt="Store"  aria-current="page" href="/Store" >Store</MDBNavbarLink>
            <MDBNavbarLink alt="Contact"  aria-current="page" href="/Contact" >Contact me</MDBNavbarLink>
            <MDBNavbarLink>
              <MDBBadge pill color='danger'>!</MDBBadge>
              <span>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
