import {configureStore} from "@reduxjs/toolkit";
import peopleReducer from "../features/people/peopleSlice";
import itemReducer from "../features/items/itemSlice"
export default configureStore({
    reducer: {
        people: peopleReducer,
        items: itemReducer
    }
})