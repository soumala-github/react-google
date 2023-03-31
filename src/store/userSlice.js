import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, { payload }) => payload,
    logout: () => null
  }
});
