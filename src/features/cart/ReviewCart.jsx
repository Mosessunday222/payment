import { Link } from "react-router-dom";

function ReviewCart() {
  return (
  <div className="  bg-stone-800">
      
      <Link to="/cart" className="uppercase tracking-widest text-blue-200 text-sm  hover:text-blue-500 hover:underline"> check wetin you don buy &rarr;</Link>
    
  </div>
  );
}

export default ReviewCart;
