//import ProductDetailContainer from "../ProductDetailContainer/ProductDetailContainer";

export default function ProductDetail ({ title , description, image}) {
  console.log(title)
  return (
      <div className="container">
        <img src={image}></img>
          <span>{title} </span>
          <p>{description}</p>
      </div>
  );
}