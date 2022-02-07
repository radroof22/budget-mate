import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
        numberPeople: 0,
    },
    reducers: {
        addPerson: (state, action) => {
            state.people.push({
                "id": state.numberPeople,
                "name": action.payload,
                "total": 0,
            })
            state.numberPeople++;
        }
    }
})

export const {addPerson} = peopleSlice.actions

export default peopleSlice.reducer