import PropTypes from "prop-types";
import { formatCurrency } from "../../utlis.js/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 ">
      <div className="felx justify-center items-center gap-3 text-sm">
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}
OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

export default OrderItem;
