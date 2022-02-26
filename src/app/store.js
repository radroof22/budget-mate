import {configureStore} from "@reduxjs/toolkit";
import peopleReducer from "../features/people/peopleSlice";
import itemReducer from "../features/items/itemSlice"
import personAssignmentSlice from "../features/personAssignment/personAssignmentSlice"
export default configureStore({
    reducer: {
        people: peopleReducer,
        items: itemReducer,
        personAssignments: personAssignmentSlice
    }
})