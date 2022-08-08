//import ProductDetailContainer from "../ProductDetailContainer/ProductDetailContainer";

export default function ProductDetail ({ title }) {
  console.log(title)
  return (
      <div>
          <span>Id: {title} </span>
      </div>
  );
}