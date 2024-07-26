import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1> {error.statusText} </h1>
      <h1> {error.data || error.message} </h1>
      <p>CHECK AM AGAIN!!</p>
      <button onClick={() => navigate(-2)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
