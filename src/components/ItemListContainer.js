import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function callProducts() {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        //console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    callProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <ItemList productList={products} />
      </div>
    </div>
  );
}

export default ItemListContainer;