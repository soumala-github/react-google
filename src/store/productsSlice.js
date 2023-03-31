import { createSlice } from "@reduxjs/toolkit";
import faker from "faker";

export default createSlice({
  name: "products",
  initialState: Array(10)
    .fill(null)
    .map((_, i) => ({
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.random.words(10)
    })),
  reducers: {
    delete: (state, { payload }) =>
      state.filter((product) => payload !== product.id),
    add: (state, { payload }) =>
      state.concat({
        ...payload,
        id: Math.random() * 100
      })
  }
});
