import { BsTypeH3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  // const className =
  //   "inline-block bg-stone-600  py-3 rounded-full tracking-widest px-4 mx-3 font-semibold uppercase hover:bg-stone-500 hover:underline transition-colors duration-500 focus:outline-none focus:ring focus:ring-red-600 focus:ring-offset-2 disabled:cursor-not-allowed sm:py4 sm:px-6";

  const base =
    "inline-block bg-stone-600  text-sm rounded-full tracking-widest  mx-3 font-semibold uppercase hover:bg-stone-500 hover:underline transition-colors duration-500 focus:outline-none focus:ring focus:ring-red-600 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " py-3  px-4 md:py-4 md:px-6",
    small: base + " py-2 px-4 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block bg-blue-300  text-sm py-3  px-4 md:py-4 md:px-6 rounded-full tracking-widest  mx-3 font-semibold uppercase hover:bg-blue-500 hover:underline transition-colors duration-500 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed",
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  {
    if (onClick)
      return (
        <button onClick={onClick} disabled={disabled} className={styles[type]}>
          {children}
        </button>
      );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
