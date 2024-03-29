import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const key = "favoriteStations";
type favoriteStation = {
  value: string[];
};
const initialState = {
  value: getstoredfavorites(),
};
function getstoredfavorites(): string[] {
  const item = localStorage.getItem(key);
  if (item && !!item.length) {
    return item.split(",");
  } else return [];
}
export const FavoriteStationSlice = createSlice({
  name: "Favorite Stations",
  initialState,
  reducers: {
    addFavoriteStation: (
      state: favoriteStation,
      action: PayloadAction<string>
    ) => {
      state.value.push(action.payload);
      localStorage.removeItem(key);
      localStorage.setItem(key, state.value.toString());
    },
    removeFavoriteStation: (
      state: favoriteStation,
      action: PayloadAction<string>
    ) => {
      state.value = state.value.filter((item) => {
        return item !== action.payload;
      });
      localStorage.removeItem(key);
      localStorage.setItem(key, state.value.toString());
    },
  },
});

export const { addFavoriteStation, removeFavoriteStation } =
  FavoriteStationSlice.actions;
export default FavoriteStationSlice.reducer;
