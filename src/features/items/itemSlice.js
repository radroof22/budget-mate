import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: "items",
    initialState: {
        items: [],
        itemCount: 0,
    },
    reducers: {
        addItem: (state, action) => {
            action.payload.id = state.itemCount
            state.items.push(action.payload)
            state.itemCount++;
        }
    }
})

export const {addItem} = itemSlice.actions

export default itemSlice.reducer