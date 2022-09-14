import Contador from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

export default function ProductDetail({
  title,
  description,
  image,
  id,
  price,
}) {
  //Uso del Context
  const { addCartItem } = useContext(CartContext);
  //

  const [productAddedToCard, setProductAddedToCard] = useState(false);
  const onAdd = (quantityToAdd) => {
    //Props enviadas al context
    addCartItem({ id, title, image, price, quantity: quantityToAdd });
    //
    setProductAddedToCard(true);
  };

  //

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>

            <p className="leading-relaxed">{description}</p>

            <div className="flex justify-center">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${price}
              </span>
            </div>

            <div className="flex justify-center">
              {productAddedToCard ? (
                <Link className="btn btn-primary" to="/Carrito">
                  Producto agregado, ver carrito!
                </Link>
              ) : (
                <Contador onAddItemsToCart={onAdd} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
