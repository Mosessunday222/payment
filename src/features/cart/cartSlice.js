import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     name: "cdcdfedfc",
  //     pizzasId: 1,
  //     quantity: 6,
  //     unitprice: 2,
  //     totalPrice: 12,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.pizzasId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzasId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitprice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzasId === action.payload);
      item.qunatity--;
      item.totalPrice = item.qunatity * item.unitprice;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  clearCart,
  addItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotoalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;
