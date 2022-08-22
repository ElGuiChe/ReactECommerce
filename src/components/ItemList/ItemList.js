import Item from "../Item/Item";

export default function ItemList({ productList }) {
  return (
    <div className="container">
      <div className="row">
        {productList.map((product) => {
          return (
            <Item {...product}
              /*category={product.category}
              id={product.id}
              img={product.image}
              description={product.description}
              price={product.price}
              title={product.title}*/
            />
          );
        })}
      </div>
    </div>
  );
}
