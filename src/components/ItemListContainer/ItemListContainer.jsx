import React, { useEffect, useState } from "react";
import arrayproducts from "../json/products.json";
import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import ProductCard from "./ProductCard";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [id, setId] = useState(""); 
  const { category } = useParams(); 

  // Extract unique categories from the products
  const categories = Array.from(
    new Set(arrayproducts.map((item) => item.category.name))
  );

  useEffect(() => {
    setId(category); // Update the selected category when the category parameter changes

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
    console.log("Selected Category:", selectedCategory);

    setId(selectedCategory); // Set the selected category as the id state

    const filteredProducts = arrayproducts.filter(
      (item) => item.category.name === selectedCategory
    );
    console.log("Filtered Products:", filteredProducts);

    setProducts(filteredProducts);
  };

  return (
    <>
      <div className="container mt-100">
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
                {categories.map((category) => (
                  <MDBDropdownItem
                    className="m-2 text-center pe-auto"
                    style={{ cursor: "pointer" }}
                    key={category}
                    eventkey={category}
                    onClick={() => handleFilterChange(category)}
                    link
                  >
                    {category}
                  </MDBDropdownItem>
                ))}
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </div>
        <div className="row">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
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
