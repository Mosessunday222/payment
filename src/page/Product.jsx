import { useLoaderData } from "react-router-dom";
import { getMenu } from "../features/service/apiCloth";
import ProductList from "./ProductList";

function Product() {
  const products = useLoaderData();
  // console.log(products);
  return (
    <ul className="grid grid-cols-1  sm:grid-cols-2 rounded-md  my-5  mx-3" >
      {products.map((product) => (
        <ProductList product={product} key={product.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const product = await getMenu();
  return product;
}

export default Product;
