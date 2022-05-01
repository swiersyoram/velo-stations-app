import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { map, Map } from "leaflet";
import { act } from "react-dom/test-utils";

interface MapState {
  value: any;
}
const initialState = {
  value: 1,
};
export const MapSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    setMap: (state: MapState, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { setMap } = MapSlice.actions;
export default MapSlice.reducer;
