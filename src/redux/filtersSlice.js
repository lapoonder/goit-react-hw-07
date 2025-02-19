import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "filters",

    initialState: {
        text: "",
    },

    reducers: {
        changeFilter(state, action) {
            state.text = action.payload;
        },
    },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
