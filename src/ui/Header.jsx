import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className=" bg-stone-700 p-4 ">
      <div className="flex justify-around ">
        <Logo />

        <SearchOrder />

        <NavBar />
      </div>
      <Username/>
    </header>
  );
}

export default Header;
