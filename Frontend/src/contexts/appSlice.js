import { configureStore } from "@reduxjs/toolkit";
import aqiData from "./aqiData";

const appStore = configureStore({
    reducer: {
        aqiSlice: aqiData,
    }
});

export default appStore;