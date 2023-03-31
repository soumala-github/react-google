import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: (state, action) => action.payload
  }
});
