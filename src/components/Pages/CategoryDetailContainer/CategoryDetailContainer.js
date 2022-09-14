import React, { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";

import {
  getFirestore,
  where,
  query,
  getDocs,
  collection,
} from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTfY-mPw1XAN6SL7zWbFwr3XEpQr7S6iY",
  authDomain: "e-commerce-react-4d8ab.firebaseapp.com",
  projectId: "e-commerce-react-4d8ab",
  storageBucket: "e-commerce-react-4d8ab.appspot.com",
  messagingSenderId: "975293860797",
  appId: "1:975293860797:web:481b12b7accc38f428a0d4",
};

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Sirve para seleccionar la base de datos de FireStore
    const db = getFirestore(app);
    const consulta = query(
      collection(db, "productos"),
      where("category", "==", id)
    );
    //
    getDocs(consulta).then(
      (snapshot) => {
        const productosArray = snapshot.docs.map((rawDoc) => {
          return {
            id: rawDoc.id,
            ...rawDoc.data(),
          };
        });
        setProducts(productosArray);
      },
      (error) => {
        console.log("error al intentar llamar la base de datos", error);
      }
    );
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <ItemList productList={products} />
      </div>
    </div>
  );
}
