// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utlis.js/helpers";
import { getOrder } from "../service/apiCloth";
import OrderItem from "./OrderItems";

const order = {
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function OrderId() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-6 px-4 space-y-8">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-sm font-semibold">order {id} status</h2>

        <div className="flex-wrap flex gap-2 " > 
          {priority && (
            <span className="bg-red-500 text-sm  text-red-50 py-1 px-2 tracking-wide font-semibold uppercase rounded-full">
              Priority
            </span>
          )}
          <span className="bg-green-500 text-sm mx-1 text-green-50 py-1 px-2 tracking-wide font-semibold uppercase rounded-full">
            {" "}
            {status} order
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-2 bg-stone-200 px-3 py-2">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs font-semibold text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      <ul className="divide-y divide-stone-500 border-b border-stone-500 border-t">
        {cart.map((item) => <OrderItem item={item} key={item.id}/>)}
      </ul>

      <div className="space-y-2 bg-stone-200 px-3 py-2">
        <p className="text-sm  font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm  font-medium text-stone-600">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold" >To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderid);
  return order;
}

export default OrderId;
