import { configureStore } from "@reduxjs/toolkit";
import reducer from "./globalState";

export const store = configureStore({
  reducer,
});
