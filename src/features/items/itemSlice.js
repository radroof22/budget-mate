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
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => {
                return item.id !== action.payload;
            })
        }
    }
})

export const {addItem, removeItem} = itemSlice.actions

export default itemSlice.reducer