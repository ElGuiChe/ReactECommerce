import React, { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";
import { useParams } from 'react-router-dom'

export default function ItemListContainer() {

  const [products, setProducts] = useState([]);

  const { id } = useParams();
    console.log(id)

  useEffect(() => {
    async function callProducts() {
      try {
        let response = await fetch(`https://fakestoreapi.com/products/category/${id}`);
        let data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    callProducts();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <ItemList productList={products} />
      </div>
    </div>
  );
}

