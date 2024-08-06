import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../src/features/user/userSlice";

const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default store;
