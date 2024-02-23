import { useState } from "react";
//import arrayProductos from "./json/productos.json";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import Loading from "./Loading";
import FilterCard from "./FilterCard";
import Breadcrumb from "./Breadcrumb";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // Llamada a Productos desde el archivo JSON
  /* useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
        })
    }, [id]); */

  // Subida de Productos a nuestra collection "items"
  /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });

        console.log("Los productos se subieron correctamente!");
    }, []) */

  // Llamada de Productos desde el Firestore
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const consulta = id
      ? query(itemsCollection, where("categoria", "==", id))
      : itemsCollection;
    getDocs(consulta).then((resultado) => {
      setLoading(false);
      setItems(
        resultado.docs.map((producto) => ({
          id: producto.id,
          ...producto.data(),
        }))
      );
    });
  }, [id]);

  return (
    <>
      <div className="container mt-100">
        <div className="row justify-content-start">
          <div className="col-4 mt-5 align-self-star">
            <FilterCard></FilterCard>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                {/* Pass the selected category (id) to the Breadcrumb component */}
                <Breadcrumb pageId={id} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                {loading ? <Loading /> : <ItemList items={items} />}
              </div>
            </div>
          </div>{" "}
          {/* Closing tag for <div className="col-10"> */}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
