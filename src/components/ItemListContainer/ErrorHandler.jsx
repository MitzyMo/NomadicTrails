import React from "react";
import error404 from "../../assets/media/404.webp"
import { Link } from "react-router-dom";

const ErrorHandler = () => {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100 bg-primary">
        <img src={error404} alt="error 404" />
      <Link><h1 class="display-1 fw-bold text-white btn btn-outline-primary">Page Not Found</h1></Link>
    </div>
  );
};

export default ErrorHandler;
