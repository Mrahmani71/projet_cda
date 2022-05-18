import {configureStore} from "@reduxjs/toolkit"
import todayReducer from "../featurs/today/todaySlice"
import fiveDaysReducer from "../featurs/fiveDay/fiveDaySlice"

export const store = configureStore ({
    reducer: {
        today : todayReducer,
        fiveDay : fiveDaysReducer,
    },
    devTools: import.meta.env.VITE_NODE_ENV !== 'production',
})