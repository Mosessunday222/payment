import OrderDetails from "../features/order/OrderDetails";
import { formatCurrency } from "../utlis.js/helpers";
import PropTypes from "prop-types";

function ProductList({ product }) {
  const { id, name, unitPrice, ingredients , soldOut, imageUrl } = product;
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(",")}</p>
      </div>
      <div>
        {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>sold out</p>}
      </div>
      {/* <OrderDetails/> */}
    </li>
  );
}

ProductList.propTypes = {
  proudcts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductList;
