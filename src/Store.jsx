import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./CartSlice.jsx";
const store = configureStore(
    {
        reducer:{
           mycart:myReducer
        }
    }
)

export default store;