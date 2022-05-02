import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LatLngExpression } from "leaflet";

interface MapState {
  value: string;
}
const initialState = {
  value: "",
};
export const MapSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    setMap: (state: MapState, action: PayloadAction<MapState>) => {
      return action.payload;
    },
  },
});

export const { setMap } = MapSlice.actions;
export default MapSlice.reducer;
