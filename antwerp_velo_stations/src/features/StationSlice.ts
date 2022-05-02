import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAllStations } from "../Api/VeloDataService";
import { station } from "../Models/station";

export const fetchStations = createAsyncThunk(
  "stations/fetchstations",
  async () => {
    const data = await GetAllStations();
    // console.log(data);

    return data;
  }
);
const initialState = {
  stations: [],
  status: "idle",
  error: null,
};
export const StationSlice = createSlice({
  name: "Stations",
  initialState,
  reducers: {
    // addStations: (state: Stationstate, action: PayloadAction<station>) => {
    //   state.value.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStations.fulfilled, (state, action: any) => {
        state.status = "idle";
        state.stations = action.payload;
      })
      .addCase(fetchStations.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = StationSlice.actions;
export default StationSlice.reducer;
