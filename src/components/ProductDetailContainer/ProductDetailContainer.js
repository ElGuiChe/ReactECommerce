import { useParams } from 'react-router-dom'
import { useEffect, useState} from "react";
import ProductDetail from '../ProductDetail/ProductDetail';

export default function ProductDetailContainer() {

//
   const [user, setUser] = useState({});
//
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
      async function callDetail() {
        try {
          let response = await fetch(`https://fakestoreapi.com/products/${id}`);
          let data = await response.json();
          //
          setUser(data)
          //

          console.log(data)
        } catch (error) {
          console.log(error);
        }
      }
        callDetail();
    }, [id]);

    return(

      //ultimo
      <div>
        <ProductDetail {...user} />
      </div>
      //ultimo
    );
}