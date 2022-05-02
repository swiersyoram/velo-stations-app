import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { station } from "../Models/station";

interface Stationstate {
  value: station[];
}
const initialState = {
  value: [],
};
export const StationSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    addStations: (state: Stationstate, action: PayloadAction<station>) => {
      state.value.push(action.payload);
    },
  },
});

// export const { addReservation, removeReservation } = StationSlice.actions;
// export default reservationsSlice.reducer;
