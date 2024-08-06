import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="px-12 mt-3">
      <h1 className=" sm:block sm:uppercase sm:text-red-500 sm:mx-4 hidden">
        {username}
      </h1>
      ;
    </div>
  );
}

export default Username;
