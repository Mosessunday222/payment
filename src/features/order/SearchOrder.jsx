import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [qurey, setQurey] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!qurey) return;
    navigate(`/order/${qurey}`);
    setQurey("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search here"
        value={qurey}
        onChange={(e) => setQurey(e.target.value)}
        className=" w-28 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:ring focus:ring-stone-200 focus:outline-none rounded-full py-2 px-4 text-sm bg-stone-200 placeholder:text-stone-800"
      />
    </form>
  );
}

export default SearchOrder;
