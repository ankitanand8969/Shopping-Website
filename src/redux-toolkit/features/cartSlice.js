import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: [],
  totalsum:0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },

    totalAmount: (state, action) => {
      state.total = [...state.total, action.payload];
    },
    totalSum :(state,action)=>{
      state.totalsum = action.payload
    }
  },
});

export const { addToCart, totalAmount ,totalSum} = cartSlice.actions;

export default cartSlice.reducer;
