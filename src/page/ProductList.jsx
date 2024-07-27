import OrderDetails from "../features/order/OrderDetails";
import { formatCurrency } from "../utlis.js/helpers";
// import PropTypes from "prop-types";

function ProductList({ product }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = product;
  return (
    <li className="py-4 sm:mx-3 ">
      <div className="   w-42 h-[70%] border-4 border-solid divide-y-2 divide-red-900 rounded-md border-stone-500">
        <img
          src={imageUrl}
          alt={name}
          className="h-[90%] w-full object-cover "
        />
      </div>

      <div className="border-4 rounded-md border-stone-500 w-full sm:border-none ">
        <p className="font-bold text-sm text-center  sm:font-normal ">
          {name}{" "}
        </p>

  
        <p className=" sm:text-sm leading-loose  ">{ingredients.join(", ")}</p>
        
      </div>
      <div>
        {!soldOut ? (
          <p className="text-green-600">{formatCurrency(unitPrice)}</p>
        ) : (
          <p className="text-red-600">Sold Out</p>
        )}
      </div>
      {/* <OrderDetails /> */}
    </li>
  );
}

// ProductList.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     unitPrice: PropTypes.number.isRequired,
//     ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
//     soldOut: PropTypes.bool.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default ProductList;
