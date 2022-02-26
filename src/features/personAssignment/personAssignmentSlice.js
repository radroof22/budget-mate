import { createSlice } from "@reduxjs/toolkit";

export const personAssignmentSlice = createSlice({
    name: "personAssigment",
    initialState: {
        assignments: [],
        assignmentCount: 0,
    },
    reducers: {
        assignPerson: (state, action) => {
            action.payload.id = state.assignmentCount
            state.assignments.push(action.payload)
            state.assignmentCount++;
        }
    }
})

export const {assignPerson} = personAssignmentSlice.actions

export default personAssignmentSlice.reducer