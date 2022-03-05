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
        },

        removeAssignment: (state, action) => {
            state.assignments = state.assignments.filter(assignment => {
                return assignment.personId !== action.payload.personId || assignment.itemId !== action.payload.itemId;
            })
        },

        removeAssignmentsByPerson: (state, action) => {
            state.assignments = state.assignments.filter(assignment => { 
                return assignment.personId !== (action.payload);
            })
        },

        removeAssignmentsByItem: (state, action) => {
            state.assignments = state.assignments.filter(assignment => { 
                return assignment.itemId !== (action.payload);
            })
        }
    }
})

export const {assignPerson, removeAssignment, removeAssignmentsByPerson, removeAssignmentsByItem} = personAssignmentSlice.actions

export default personAssignmentSlice.reducer