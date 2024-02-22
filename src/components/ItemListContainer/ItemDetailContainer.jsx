import { useEffect, useState } from "react";
import arrayProductos from "../json/products.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {itemId} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id == itemId); // Obtenemos el producto con Id capturado por parámetro
                resolve(producto);
            }, 1000);
        })
        promesa.then(data => {
            //console.log("Fetched item:", data);// Log the fetched item
            setItem(data);
        })
    }, [itemId]);
    
    return (
        <ItemDetail item={item} />
    )
    
}

export default ItemDetailContainer;
