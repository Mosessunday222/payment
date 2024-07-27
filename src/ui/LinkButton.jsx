import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const className = "text-sm hover:underline text-blue-200 hover:text-blue-400";
  const navigate = useNavigate();
  if (to === "2") return;
  <button onClick={() => navigate(-2)} className={className}>
    &larr;{children}{" "}
  </button>;
  return (
    <Link to={to} className={className}>
      {" "}
      {children}
    </Link>
  );
}

export default LinkButton;
