import React, { useState } from "react";

import {
  getFirestore,
  doc,
  setDoc,
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Sirve para seleccionar la base de datos de FireStore
const db = getFirestore(app);


export const CartContext = React.createContext([]);

export default function CartCustomContext({ children }) {
  const [cart, setCart] = useState([]);

  const addCartItem = (item) => {
    const itemInCart = cart.find((itemInCart) => itemInCart.id === item.id);
    if (itemInCart) {
      const newCart = cart.map((itemInCart) => {
        if (itemInCart.id === item.id) {
          return {
            ...itemInCart,
            quantity: itemInCart.quantity + item.quantity,
          };
        } else {
          return itemInCart;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
    //console.log("elementos del carrito ", cart)
  };

  const removeCartItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart
  .map((item) => item.price)
  .reduce((prev, curr) => prev + curr, 0);

//Crea el objeto para subirlo a la DB
  let order = {}
  const createOrder = () => {
    const itemForOrder = cart.map (item => ({
      id: item.id,
      title: item.title,
      price: item.price,
    }))
    order = {
      buyer:{
        name: "Cosme Fulanito",
        phone: "123456789",
        email: "LaCumbanchaVolante@gmail.com"
      },
      items:itemForOrder,
      total:totalPrice
    }
//

    createOrderInFireStore()
    .then (result=> alert("Tu número de orden es: " + result.id ))
    .catch (error=> console.log(error))
  };

  const createOrderInFireStore = async () =>{
    const newOrder = doc(collection(db, "orders"))
    await setDoc (newOrder, order)
    return newOrder
  }

  return (
    <CartContext.Provider
      value={{ addCartItem, removeCartItem, clearCart, cart, totalPrice, createOrder }}
    >
      {children}
    </CartContext.Provider>
  );
}