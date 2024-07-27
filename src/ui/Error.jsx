import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1> {error.statusText} </h1>
      <h1> {error.data || error.message} </h1>
      <p>CHECK AM AGAIN!!</p>
      <LinkButton to="">Go back</LinkButton>
    </div>
  );
}

export default Error;
