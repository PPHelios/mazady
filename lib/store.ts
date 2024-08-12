import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authSlice from "./features/auth/authSlice";
import { AsyncEncryptStorage } from "encrypt-storage";
import addItemSlice from "./features/addItem/addItemSlice";
import { searchSlice } from "./features/search/searchSlice";
export const encryptStorage = new AsyncEncryptStorage(
  process.env.NEXT_PUBLIC_SECRET_KEY ?? "",
  {
    stateManagementUse: true,
  },
);

const persistConfig = {
  key: "root",
  version: 1,
  storage: encryptStorage,
};

const rootReducer = combineReducers({
  auth: authSlice,
  addItem: addItemSlice,
  search: searchSlice,
});

const makeConfiguredStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return makeConfiguredStore();
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
    store.__persistor = persistStore(store);
    return store;
  }
};
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
