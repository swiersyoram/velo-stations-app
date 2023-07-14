import { configureStore } from "@reduxjs/toolkit";
import mapreducer from "../slices/MapSlice";
import drawerreducer from "../slices/MenuSlice";
import stationreducer from "../slices/StationSlice";
import favoritestationreducer from "../slices/FavoriteStationsSlice";
import { userReducer } from "../slices/UserSlice";
export const store = configureStore({
  reducer: {
    map: mapreducer,
    drawer: drawerreducer,
    stations: stationreducer,
    favorite_stations: favoritestationreducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
