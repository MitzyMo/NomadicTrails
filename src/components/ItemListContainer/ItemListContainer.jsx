import React, { useEffect, useState } from "react";
import arrayproducts from "../json/products.json";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import ProductCard from "./ProductCard";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const ItemListContainer = ({ onQuantityChange }) => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [id, setId] = useState("");
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(""); // Track active category change className to active

  // Extract unique categories from the products
  const categories = Array.from(
    new Set(arrayproducts.map((item) => item.category.name))
  );

  useEffect(() => {
    setId(category); // Update the selected category when the category parameter changes
    setActiveCategory(category); // Set active category when the component mounts
    const promesa = new Promise((resolve, reject) => {
      let allProducts = category
        ? arrayproducts.filter((item) => item.category.name === category)
        : arrayproducts;

      allProducts.length > 0
        ? resolve(allProducts)
        : reject("No se encontraron productos!");
    });
    promesa
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setErrorMsg(error);
      });
  }, [category]);

  const handleFilterChange = (selectedCategory) => {
    setId(selectedCategory); // Set the selected category as the id state
    setActiveCategory(selectedCategory); // Update active category on filter change
    const filteredProducts = arrayproducts.filter(
      (item) => item.category.name === selectedCategory
    );
    setProducts(filteredProducts);
  };

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
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={`list-group-item ${
                    activeCategory === cat ? "active" : ""
                  }`}
                >
                  <Link
                    to={`/Store/${cat}`}
                    onClick={() => handleFilterChange(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col">
                {/* Pass the selected category (id) to the Breadcrumb component */}
                <Breadcrumb pageId={id} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <MDBDropdown>
                  <MDBDropdownToggle variant="info" id="dropdown-basic">
                    Filter by Category
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    {categories.map((cat) => (
                      <MDBDropdownItem
                        className={`m-2 text-center pe-auto ${
                          activeCategory === cat ? "active" : ""
                        }`}
                        style={{ cursor: "pointer" }}
                        key={cat}
                        eventkey={cat}
                        href={`/Store/${cat}`}
                        onClick={() => handleFilterChange(cat)}
                        link
                      >
                        {cat}
                      </MDBDropdownItem>
                    ))}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </div>
            </div>
            <div className="row">
              {products.map((item) => (
                <ProductCard key={item.id} item={item} onClick={() => {}} onQuantityChange={onQuantityChange}/>
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
