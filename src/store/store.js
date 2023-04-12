import { configureStore } from "@reduxjs/toolkit";
import mainDataReducer from "../store/slices/mainDataSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'tableData',
  storage,
}

const persistedReducer = persistReducer(persistConfig, mainDataReducer)

export const store = configureStore({
  reducer: {
    mainData: persistedReducer,
  },
  middleware: [thunk]
});

export const persistor = persistStore(store)