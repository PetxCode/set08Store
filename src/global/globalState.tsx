import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleState: false,
  cart: [] as any,
};

const globalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    changeState: (state, { payload }) => {
      state.toggleState = payload;
    },

    addToCart: (state, { payload }) => {
      const check = state.cart.findIndex((el: any) => el.id === payload.id);

      if (check >= 0) {
        state.cart[check].qty += 1;
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }
    },
  },
});

export const { changeState, addToCart } = globalState.actions;

export default globalState.reducer;
