import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let nombre = "";
let apellido = "";
let email = "";
let emailValidacion = "null";
let telefono = "";

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

export default function Carrito() {
  const { removeCartItem, clearCart, cart, totalPrice } =
    useContext(CartContext);

  //Crea el objeto para subirlo a la DB
  let order = {};
  const createOrder = () => {
    const itemForOrder = cart.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price * item.quantity,
      quantity: item.quantity,
    }));
    order = {
      buyer: {
        name: nombre + " " + apellido,
        phone: telefono,
        email: email,
      },
      items: itemForOrder,
      date: new Date().toDateString(),
      status: "Generada",
      total: totalPrice,
    };
    //Envío de objeto a la DB

    createOrderInFireStore()
      .then((result) => alert("Tu número de orden es: " + result.id))
      .catch((error) => console.log(error));
    clearCart();
  };

  const createOrderInFireStore = async () => {
    const newOrder = doc(collection(db, "orders"));
    await setDoc(newOrder, order);
    return newOrder;
  };
  //

  const [validador, setValidador] = useState(false);
  const validacion = () => {
    if (email === emailValidacion) {
      setValidador(true);
    } else {
      alert("Los correos ingresados deben coincidir");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container">
        <h1 class="font-semibold text-2xl">Tu carrito está vacio</h1>
        <Link class="font-semibold text-indigo-600 text-sm mt-10" to="/">
          Vuelve a la tienda
        </Link>
      </div>
    );
  } else {
    return (
      <body class="bg-gray-100">
        <div class="container mx-auto mt-10">
          <div class="flex shadow-md my-10">
            <div class="w-3/4 bg-white px-10 py-10">
              <div class="flex justify-between border-b pb-8">
                <h1 class="font-semibold text-2xl">Carrito de Compra</h1>
              </div>
              <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Producto
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Cantidad
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Precio
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              {cart.map((item) => {
                return (
                  <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div class="flex w-2/5">
                      <div class="w-20">
                        <img class="h-24" src={item.image} alt="" />
                      </div>
                      <div class="flex flex-col justify-between ml-4 flex-grow">
                        <span class="font-bold text-sm">{item.title}</span>
                        <button
                          onClick={() => removeCartItem(item.id)}
                          type="button"
                          class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                    <div class="flex justify-center w-1/5">
                      <input
                        class="mx-2 border text-center w-8"
                        type="text"
                        value={item.quantity}
                      />
                    </div>
                    <span class="text-center w-1/5 font-semibold text-sm">
                      ${item.price}
                    </span>
                    <span class="text-center w-1/5 font-semibold text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                );
              })}

              <Link
                to="/"
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Sigue Comprando
              </Link>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Ingresa tus datos para finalizar la compra
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <form
                  onSubmit={(ev) => {
                    ev.preventDefault();

                    nombre = ev.target.nombre.value;
                    apellido = ev.target.apellido.value;
                    email = ev.target.email.value;
                    emailValidacion = ev.target.email.value;
                    telefono = ev.target.telefono.value;
                  }}
                >
                  <fieldset>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label for="nombre" class="form-label">
                          Nombre
                        </label>
                        <input
                          type="text"
                          name="nombre"
                          id=""
                          className="form-control"
                          required
                          placeholder="Pedro"
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="apellido" class="form-label">
                          Apellido
                        </label>
                        <input
                          type="text"
                          name="apellido"
                          id=""
                          className="form-control"
                          required
                          placeholder="Pérez"
                        />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label for="email" class="form-label">
                          E-mail*
                        </label>
                        <input
                          type="email"
                          name="email"
                          id=""
                          className="form-control"
                          required
                          placeholder="pedroperez@gmail.com"
                        />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label for="email" class="form-label">
                          Repite tu e-mail*
                        </label>
                        <input
                          type="email"
                          name="emailValidacion"
                          id=""
                          className="form-control"
                          required
                          placeholder="pedroperez@gmail.com"
                        />
                      </div>
                      <div class="mb-3 col-md-12">
                        <label for="telefono" class="form-label">
                          Teléfono
                        </label>
                        <input
                          type="text"
                          name="telefono"
                          id=""
                          className="form-control"
                          placeholder="+56 9 1234 5678"
                        />
                      </div>
                    </div>

                    {validador ? (
                      <button
                        onClick={() => createOrder()}
                        type="button"
                        className="bg-green-500 font-semibold hover:bg-green-600 py-3 my-1 text-sm text-white uppercase w-full"
                      >
                        Terminar Compra
                      </button>
                    ) : (
                      <button
                        onClick={() => validacion()}
                        type="submit"
                        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 my-1 text-sm text-white uppercase w-full"
                      >
                        Validar Datos
                      </button>
                    )}
                  </fieldset>
                </form>
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Precio Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => clearCart()}
                  type="button"
                  className="bg-red-500 font-semibold hover:bg-red-600 py-3 my-1 text-sm text-white uppercase w-full"
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
