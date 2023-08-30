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
      const checkCart = state.cart.findIndex((el: any) => {
        return el.id === payload.id;
      });

      if (checkCart >= 0) {
        state.cart[checkCart].qty += 1;
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }
    },

    remove: (state: any, { payload }) => {
      const removal = state.cart.filter((el: any) => el.id !== payload.id);
      state.cart = removal;
    },

    removeQTY: (state, { payload }) => {
      const itemQTY = state.cart.findIndex((el: any) => {
        return el.id === payload.id;
      });

      if (state.cart[itemQTY].qty > 1) {
        state.cart[itemQTY].qty -= 1;
      } else if (state.cart[itemQTY].qty === 1) {
        const removal = state.cart.filter((el: any) => el.id !== payload.id);
        state.cart = removal;
      }
    },
  },
});

export const { changeState, addToCart, remove, removeQTY } =
  globalState.actions;

export default globalState.reducer;
