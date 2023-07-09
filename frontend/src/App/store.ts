import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import mapreducer from "../features/MapSlice";
import drawerreducer from "../features/MenuSlice";
import stationreducer from "../features/StationSlice";
import favoritestationreducer from "../features/FavoriteStationsSlice";
import {userReducer} from "../features/UserSlice";
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
