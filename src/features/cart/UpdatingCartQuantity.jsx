import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdatingCartQuantity({ pizzaId,currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecreaseQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div>
      <Button type="round" onClick={handleDecreaseQuantity}>
        -
      </Button>
      <Button type="round" onClick={handleIncreaseQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdatingCartQuantity;
