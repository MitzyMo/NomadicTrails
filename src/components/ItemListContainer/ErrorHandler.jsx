import React from "react";
import { Link } from "react-router-dom";

const ErrorHandler = () => {
    return (
        <div className="container ">
        <div className="d-flex align-items-center justify-content-center vh-100 ">
            <Link to={"/"}>
            <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-blog-2768b.appspot.com/o/404.webp?alt=media&token=47e1cbfa-4214-4287-a746-44a711470c68" alt="error 404" />
            </Link>
        </div>
        </div>
    );
};

export default ErrorHandler;
