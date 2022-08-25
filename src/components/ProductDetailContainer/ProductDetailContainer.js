import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";

import { getFirestore, doc, getDoc } from "firebase/firestore";
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

export default function ProductDetailContainer() {
  //
  const [product, setProduct] = useState({});
  //
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Sirve para seleccionar la base de datos de FireStore
    const db = getFirestore(app);
    const itemRef = doc(db, "productos", id);
    getDoc(itemRef).then(
      (snapshot) => {
        //if (snapshot.exist()){
        console.log({ id: snapshot.id, ...snapshot.data() });
        //}
        //, ...snapshot.data
        setProduct({ id: snapshot.id, ...snapshot.data() });
      },
      (error) => {
        console.log("error al intentar llamar la base de datos", error);
      }
    );
  }, [id]);

  /*useEffect(() => {
      async function callDetail() {
        try {
          let response = await fetch(`https://fakestoreapi.com/products/${id}`);
          let data = await response.json();
          //
          setProduct(data)
          //

          //console.log(data)
        } catch (error) {
          console.log(error);
        }
      }
        callDetail();
    }, [id]);*/

  return (
    //ultimo
    <div>
      <ProductDetail {...product} />
    </div>
    //ultimo
  );
}
