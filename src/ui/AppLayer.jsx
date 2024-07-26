import { Outlet, useNavigation } from "react-router-dom";

import Loader from "./Loader";
import ReviewCart from "../features/cart/ReviewCart";

import Header from "./header";

function AppLayer() {
  const navigationLoader = useNavigation();
  const isLoading = navigationLoader.state === "loading";
  console.log(navigationLoader);

  return (
    <div className="h-screen  grid grid-rows-[auto_1fr_auto]    ">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className=" max-w-3xl bg-stone-400 mx-auto">
          <Outlet />
        </main>
      </div>

      <ReviewCart />
    </div>
  );
}

export default AppLayer;
