import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./layoutSlice";

export const store = configureStore({
    reducer:{
        layoutAside: layoutSlice
    }
})