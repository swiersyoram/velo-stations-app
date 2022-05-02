import { configureStore } from "@reduxjs/toolkit";
import mapreducer from "../features/MapSlice";
import drawerreducer from "../features/MenuSlice";
export const store = configureStore({
  reducer: {
    map: mapreducer,
    drawer: drawerreducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
