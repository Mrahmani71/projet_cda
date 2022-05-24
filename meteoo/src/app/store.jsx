import {configureStore} from "@reduxjs/toolkit"
import todayReducer from "../featurs/today/todaySlice"
import fiveDaysReducer from "../featurs/fiveDay/fiveDaySlice"

export const store = configureStore ({
    reducer: {
        today : todayReducer,
        fiveDay : fiveDaysReducer,
    },
    devTools: process.env.REACT_APP_NODE_ENV !== 'production',
})