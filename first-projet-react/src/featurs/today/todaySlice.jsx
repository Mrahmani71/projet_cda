import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import todayService from "./todayService"
const initialState = {
	today: [],
	isError: false,
	isSucces: false,
	isLoading: false,
	message: ""
}

// get current weather
export const getWeatherToday = createAsyncThunk('Current/getWeather',
	async (ville, thunkAPI) => {
		try {
			return await todayService.getWeatherToday(ville)
		} catch (error) {
			const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// get let lon weather
export const getWeatherLocation = createAsyncThunk('Current/getWeatherLocation',
	async (location, thunkAPI) => {
		try {
			return await todayService.getWeatherLocation(location)
		} catch (error) {
			const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const todaySlice = createSlice({
	name: "today",
	initialState,
	reducers: {
		// eslint-disable-next-line no-unused-vars
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
		// Current
			.addCase(getWeatherToday.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getWeatherToday.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSucces = true
				state.today = action.payload
			})
			.addCase(getWeatherToday.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			// Location
			.addCase(getWeatherLocation.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getWeatherLocation.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSucces = true
				state.today = action.payload
			})
			.addCase(getWeatherLocation.rejected, (state, action) => {
				state.isSucces = false
				state.isError = true
				state.message = action.payload
			})

	}
})

export const { reset } = todaySlice.actions
export default todaySlice.reducer