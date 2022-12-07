import { configureStore } from "@reduxjs/toolkit";
import Post from "./Slicer/Counterslicer";
export const store = configureStore({
  reducer: {
    AllPost: Post,
  },
});
