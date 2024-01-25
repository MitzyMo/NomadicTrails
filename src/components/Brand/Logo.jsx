import React from 'react'
import brandLogo from "../../assets/media/Logo.webp"
import "../../assets/styles/styles.css";

//Componente presentación
const Logo = ({size}) => {
  return (
    <img src={brandLogo} alt="MercyLogo" loading="lazy"
    className="align-self-center" width={size} />
  )
}

export default Logo