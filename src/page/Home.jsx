import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "../ui/Button";
function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="text-center sm:mt-9  m-8">
      <h1 className="text-red-500 sm:text-5xl text-sm font-semibold text-nowrap tracking-normal mb-4">
        we deal with all types of pizzas
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/product" type="primary">
          continue to order
        </Button>
      )}
    </div>
  );
}

export default Home;
