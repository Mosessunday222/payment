import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotoalCartQuantity } from "./cartSlice";

function ReviewCart() {
  const totalQuantity = useSelector(getTotoalCartQuantity);
  const totalPrice = useSelector(getTotalPrice);
  if (!totalQuantity & !totalPrice) return null;
  return (
    <div className="  bg-stone-800  mx-1 my-1 ">
      <div className="flex justify-center items-center">
        <p className="text-red-500 space-x-4 text-xs sm:font-bold sm:text-sm ">
          <span>{totalPrice}</span>
          <span>{totalQuantity}</span>
        </p>
      </div>
      <Link
        to="/cart"
        className="uppercase tracking-widest text-blue-200 text-sm  hover:text-blue-500 hover:underline"
      >
        {" "}
        check wetin you don buy &rarr;
      </Link>
    </div>
  );
}

export default ReviewCart;
