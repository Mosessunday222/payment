import Button from "../../ui/Button";
import { formatCurrency } from "../../utlis.js/helpers";
import DeleteItem from "./DeleteItem";
import UpdatingCartQuantity from "./UpdatingCartQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-7">
      <div className=" flex justify-between items-center  grow-1">
        <p className="font-semibold">
          {quantity}&times; {name}
        </p>
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
        <div className="flex ">
        <DeleteItem pizzaId={pizzaId} />
        <UpdatingCartQuantity pizzaId={pizzaId} />
        </div>
    </li>
  );
}

export default CartItem;
