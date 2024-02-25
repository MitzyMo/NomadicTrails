import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ pageId, productName }) => {
    const [page, setPage] = useState("");

    useEffect(() => {
        setPage(pageId);
    }, [pageId]);

    return (
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
            <Link to={"/Store"}>Store</Link>
            </li>
            {pageId && (
            <>
                <li className="breadcrumb-item">
                <Link to={`/Store/${pageId}`}>{pageId}</Link>
                </li>
            </>
            )}
            {productName && (
            <>
                <li className="breadcrumb-item active" aria-current="page">
                <Link to={`/Store/${pageId}/${productName}`}>{productName}</Link>
                </li>
            </>
            )}
        </ol>
        </nav>
    );
};

export default Breadcrumb;
