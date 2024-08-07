import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../service/apiCloth";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";


// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function OrderDetails() {
  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  console.log("Navigation state:", navigation.state);

  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="py-6 px-4">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col sm:flex-row items-center">
          <label className="sm:w-40">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input w-full h-10"
          />
        </div>

        <div className="mb-5 flex flex-col sm:flex-row items-center">
          <label className="sm:w-40">Phone number</label>
          <div className="w-full">
            <input
              type="tel"
              name="phone"
              required
              className="input w-full h-10"
            />
            {formErrors?.phone && (
              <p className="text-xs font-bold mt-3 bg-red-600 text-red-200 rounded-md">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col sm:flex-row items-center">
          <label className="sm:w-40">Address</label>
          <div className="w-full">
            <input
              type="text"
              name="address"
              required
              className="input w-full h-10"
            />
          </div>
        </div>

        <div className=" mb-7 flex items-center gap-6 ">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-stone-600 focus:outline-none focus:ring focus:ring-stone-600"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        <div className="text-center">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now!"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  console.log(order);

  const errors = {};
  if (!isValidPhone(order))
    errors.phone =
      "abeg put your corrrect phone number here, we fit wan contact abeg!";

  if (Object.keys(errors).length > 0) return errors;

  // if everything is okay create new order and redirect
  // const newOrder = await createOrder(order);

  // return redirect(`/order/${newOrder.id}`);
}

export default OrderDetails;
