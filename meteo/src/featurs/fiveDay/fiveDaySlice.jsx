import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import fiveDaysService from "./fiveDayService"
const initialState = {
	fiveDay: [],
	isError: false,
	isSucces: false,
	isLoading: false,
	message: ""
}

export const getFiveDays = createAsyncThunk('Days/getFiveDays',
	async (ville, thunkAPI) => {
		try {
			return await fiveDaysService.getFiveDays(ville)
		} catch (error) {
			const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// get let lon weather
export const getFiveLocation = createAsyncThunk('Current/getFiveLocation',
	async (location, thunkAPI) => {
		try {
			return await fiveDaysService.getFiveLocation(location)
		} catch (error) {
			const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const fiveDaysSlice = createSlice({
	name: "fiveDays",
	initialState,
	reducers: {
		// eslint-disable-next-line no-unused-vars
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getFiveDays.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getFiveDays.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSucces = true
				state.fiveDay = action.payload
			})
			.addCase(getFiveDays.rejected, (state, action) => {
				state.isSucces = false
				state.rejected = true
				state.message = action.payload
			})
			// Location
			.addCase(getFiveLocation.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getFiveLocation.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSucces = true
				state.fiveDay = action.payload
			})
			.addCase(getFiveLocation.rejected, (state, action) => {
				state.isSucces = false
				state.isError = true
				state.message = action.payload
			})
	}
})

export const { reset } = fiveDaysSlice.actions
export default fiveDaysSlice.reducer