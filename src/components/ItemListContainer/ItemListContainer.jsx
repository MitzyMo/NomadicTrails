import { useEffect, useState } from "react";
import arrayproducts from "../json/products.json";
import { useParams, Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import { LiaCartPlusSolid } from "react-icons/lia";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const { id } = useParams(); //Capturar los parámetros de la url

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
        let allProducts = id
            ? arrayproducts.filter((item) => item.categoria === id)
            : arrayproducts;

        allProducts.length > 0
            ? resolve(allProducts)
            : reject("No se encontraron produtos!");
        });

        promesa
        .then((data) => {
            setProducts(data);
        })
        .catch((error) => {
            setErrorMsg(error);
        });
    }, [id]);

    return (
        <>
        <div className="container mt-100">
            <div className="row">
            <div className="col">
                <Breadcrumb pageId={id} />
            </div>
            </div>
            <div className="row"> {products.map((item) => (<div key={item.id} className="col-md-3">
                <div className="card border-0 text-center">
                    <img
                    src={item.images}
                    className="card-img-top"
                    alt={item.title} style={{objectFit:'contain'}}
                    />
                    <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                        ${item.price}
                    </p>
                    <Link to="" className="btn btn-primary">
                        ADD TO CART <LiaCartPlusSolid size={24}/>
                    </Link>
                    </div>
                </div>
                </div>
            ))}
            </div>
            <div className="row">
            <div className="col">
            <h1 className="text-center text-danger">{errorMsg}</h1> 
            </div>
            </div>
        </div>
        </>
    );
};

export default ItemListContainer;
