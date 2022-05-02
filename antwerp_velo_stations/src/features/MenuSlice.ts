import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

interface DrawerState {
  value: { open: boolean };
}
const initialState = () => {
  //   console.log(window.location.pathname);
  if (window.location.pathname !== "/") return { value: { open: true } };
  else return { value: { open: false } };
};
export const DrawerSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    opendrawer: (state: DrawerState, action: PayloadAction<DrawerState>) => {
      return action.payload;
    },
  },
});

export const { opendrawer } = DrawerSlice.actions;
export default DrawerSlice.reducer;
