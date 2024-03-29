import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllStations } from "../Api/station.api";

export const fetchStations = createAsyncThunk(
  "stations/fetchstations",
  async () => {
    const { data } = await getAllStations();
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStations.fulfilled, (state, action) => {
        state.status = "idle";
        state.stations = action.payload;
      })
      .addCase(fetchStations.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default StationSlice.reducer;
