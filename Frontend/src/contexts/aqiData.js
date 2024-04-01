import { createSlice } from "@reduxjs/toolkit";

 const aqiSlice = createSlice({
    name: "aqiSlice",
    initialState: { data: null },
    reducers: {
        addData: (state, action) => {
            return {
                data: action.payload,
            }
        },
    }
 });

 export const { addData } = aqiSlice.actions;
 export default aqiSlice.reducer;

