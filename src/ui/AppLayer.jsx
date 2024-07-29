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
      {/* {true && <Loader />} */}

      <Header />

      <div className="overflow-scroll bg-yellow-200">
        <main className=" max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>

      <ReviewCart />
    </div>
  );
}

export default AppLayer;
