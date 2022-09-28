import React from "react";
import { Link } from "react-router-dom";

export default function Item({
  id,
  image,
  price,
  title,
}) {
  return (
    <Link to={`/Producto/${id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={image}
          alt=""
          style={{ objectFit: "contain", height: "200px" }}
          className="bg-white h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
      <>
        <Link
          to={`/Producto/${id}`}
          className="btn bg-indigo-500 font-semibold hover:bg-indigo-600 text-sm text-white w-full contend-end"
          id={id}
        >
          Ver detalle
        </Link>
      </>
    </Link>
  );
}
