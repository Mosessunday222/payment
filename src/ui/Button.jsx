import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "inline-block bg-stone-600  py-3 rounded-full tracking-widest px-4 mx-3 font-semibold uppercase hover:bg-stone-500 hover:underline transition-colors duration-500 focus:outline-none focus:ring focus:ring-red-600 focus:ring-offset-2 disabled:cursor-not-allowed sm:py4 sm:px-6";

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
