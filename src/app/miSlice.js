import { createSlice } from "@reduxjs/toolkit";
import data from '../../public/data.json'



export const miSlice = createSlice({
    name: "misShows",
    initialState: {
        show: data
    },
    reducers: {
        cambiarValor: (state, action) => {
           const verdad = state.show.find(e => e.title === action.payload.title)
           if (verdad.isBookmarked == false) {
            verdad.isBookmarked = true;
           } else {
            verdad.isBookmarked = false;
           }
        }
    },
}
)

export const { cambiarValor } = miSlice.actions;