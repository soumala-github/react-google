import { configureStore, createSlice } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import productsSlice from "./productsSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    filter: filterSlice.reducer,
    products: productsSlice.reducer
  }
});
