import OrderDetails from "../features/order/OrderDetails";
import { formatCurrency } from "../utlis.js/helpers";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
// import PropTypes from "prop-types";

function ProductList({ product }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = product;

  function handlerAddNewItem() {
    // console.log(id);
    const newitems = {
      name,
      pizzasId: id,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newitems));
  }

  return (
    <li className="py-4 sm:mx-3 ">
      <div
        className={`md:h-[220px] w-full h-[60%] ${
          soldOut ? "opacity-70 grayscale" : ""
        } border-2 border-solid divide-y-2 divide-red-900 rounded-md border-stone-500`}
      >
        <img
          src={imageUrl}
          alt={name}
          className="h-[100%] w-full object-cover"
        />
      </div>

      <div className=" grow border-4 rounded-md border-stone-500 w-full sm:border-none py-3 sm:py-0 ">
        <p className=" uppercase text-sm  text-center font-medium">{name}</p>

        <p className="sm:text-sm leading-loose capitalize italic">
          {ingredients.join(", ")}
        </p>

        <div className="flex items-center justify-between grid-rows-0">
          {!soldOut ? (
            <p className="text-green-600">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-red-600  uppercase md:text-nowrap">Sold Out</p>
          )}

          {soldOut || (
            <Button type="small" onClick={handlerAddNewItem}>
              ADD to cart
            </Button>
          )}
        </div>
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
