import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import ProductCard from "./ProductCard";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]); // State to store categories

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const querySnapshot = await getDocs(itemsCollection);
        const categoriesSet = new Set();
        querySnapshot.forEach((doc) => {
          const category = doc.data().category;
          if (category) {
            categoriesSet.add(category.name);
          }
        });
        const categoriesArray = Array.from(categoriesSet);
        setCategories(categoriesArray); // Set the categories state
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []); // Run once when component mounts

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = category
          ? query(itemsCollection, where("category", "==", category))
          : itemsCollection;
        const querySnapshot = await getDocs(consulta);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setErrorMsg("Error fetching products: " + error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  useEffect(() => {
    setActiveCategory(category);
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container mt-100">
        <div className="row justify-content-start">
          <div className="col-2 mt-5 align-self-star">
            <h3>Filter</h3>
            <h5>Category</h5>
            <ul className="list-group">
              <li
                className={`list-group-item ${
                  activeCategory === "" ? "active" : ""
                }`}
                aria-current="true"
              >
                <Link to={"/Store"}>All Products</Link>
              </li>
              <li
                className={`list-group-item ${
                  activeCategory === "" ? "active" : ""
                }`}
                aria-current="true"
              >
                {" "}
                <Link to={`/Store/Men's`}>Men's</Link>
              </li>
              <li
                className={`list-group-item ${
                  activeCategory === "" ? "active" : ""
                }`}
                aria-current="true"
              >
                {" "}
                <Link to={`/Store/Women's`}>Women's</Link>
              </li>
              <li
                className={`list-group-item ${
                  activeCategory === "" ? "active" : ""
                }`}
                aria-current="true"
              >
                {" "}
                <Link to={`/Store/Electronics`}>Electronics</Link>
              </li>
              <li
                className={`list-group-item ${
                  activeCategory === "" ? "active" : ""
                }`}
                aria-current="true"
              >
                {" "}
                <Link to={`/Store/Miscellaneous`}>Miscellaneous</Link>
              </li>
            </ul>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col">
                <Breadcrumb pageId={category} />
              </div>
            </div>
            <div className="row">
              {products.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  onClick={() => {}}
                />
              ))}
            </div>
            <div className="row">
              <div className="col">
                <h1 className="text-center text-danger">{errorMsg}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
