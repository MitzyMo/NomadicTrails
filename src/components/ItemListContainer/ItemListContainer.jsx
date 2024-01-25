import React, { useEffect } from "react";
import Nomad from "../../assets/media/NomadTum.webp";
import arrayProductos from "../json/productos.json"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    fetch("https://fakestoreapi.com/products").then((result) =>
        result.json().then((data) => {
        setProductos(data);
        })
    );

    useEffect(()=>{
        const promesa = new Promise((result)=>{
            result(arrayProductos);
        })
    })

    return (
        <div className="container-fluid">
        <div className="row">
            {productos.map((products) => (
            <div key={products.id} className="col-md-3 card">
                <img src={products.image} className="card-img-top" alt={products.title} />
                <div className="card-body">
                    <h2>{products.title}</h2>
                    <h3>${products.price}</h3>
                <p className="card-text">
                    {products.description}
                </p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default ItemListContainer;


{/* <div className="bg-white">
<div
className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
role="alert">
{greeting}
</div>
<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
<h2 className="text-2xl tracking-tight text-gray-900"></h2>
<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    <div className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
        src={Nomad}
        alt="Front of men&#039;s Basic Tee in black."
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        ></img>
    </div>
    <div className="mt-4 flex justify-between">
        <div>
        <h3 className="text-sm text-gray-700">
            <a href="#">
            <span
                aria-hidden="true"
                className="absolute inset-0"
            ></span>
            Nomad Tumbler
            </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">Militar</p>
        </div>
        <p className="text-sm font-medium text-gray-900">$35</p>
    </div>
    </div>
</div>
</div>
</div> */}