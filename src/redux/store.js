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
import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { contactsReducer } from "./contacts/contacts-reducer";
import usersReducers from "./users/users-reducers";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(persistConfig, usersReducers),
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
