import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import AppLayer from "./ui/AppLayer";
import ABout from "./page/ABout";
import Product, { loader as productLoader } from "./page/Product";
import Cart from "./features/cart/Cart";
import Error from "./ui/Error";
import OrderDetails ,{action as formAction} from "./features/order/OrderDetails";
import OrderId, { loader as orderLoader } from "./features/order/OrderId";
const router = createBrowserRouter([
  {
    element: <AppLayer />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <ABout />,
      },

      {
        path: "/product",
        element: <Product />,
        loader: productLoader,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/order/:orderid",
        element: <OrderId />,
        loader: orderLoader,
        // fallback: true, // Optional: if you want to redirect to a fallback page when the order does not exist.
        errorElement: <Error />,
      },

      {
        path: "/order/new",
        element: <OrderDetails />,
        action: formAction
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
