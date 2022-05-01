import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type station = {};

interface Stationstate {
  value: string[];
}
const initialState = {
  value: [],
};
export const StationSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    addStations: (state: Stationstate, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

// export const { addReservation, removeReservation } = StationSlice.actions;
// export default reservationsSlice.reducer;
