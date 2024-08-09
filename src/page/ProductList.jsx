import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../features/cart/cartSlice";
import Button from "../ui/Button";
import DeleteItem from "../features/cart/DeleteItem";
import { formatCurrency } from "../utlis.js/helpers";
import UpdatingCartQuantity from "../features/cart/UpdatingCartQuantity";

function ProductList({ product }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = product;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  console.log(currentQuantity);

  const isInCart = currentQuantity > 0;

  function handlerAddNewItem() {
    const newitems = {
      name,
      pizzaId: id,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newitems));
  }

  return (
    <li className="py-4 sm:mx-3">
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

      <div className="grow border-4 rounded-md border-stone-500 w-full sm:border-none py-3 sm:py-0">
        <p className="uppercase text-sm text-center font-medium">{name}</p>

        <p className="sm:text-sm leading-loose capitalize italic">
          {ingredients.join(", ")}
        </p>

        <div className="flex items-center justify-between grid-rows-0">
          {!soldOut ? (
            <p className="text-green-600">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-red-600 uppercase md:text-nowrap">Sold Out</p>
          )}
            {isInCart && (
            <div className="">
              
              <UpdatingCartQuantity
                pizzaId={id}
                currentQuantity={currentQuantity} 
              />
              
              <div className="py-1">
              <DeleteItem pizzaId={id} />
              </div>
            </div>
          )}
          {!soldOut && !isInCart && (
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

export default ProductList;
