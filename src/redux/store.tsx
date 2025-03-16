import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './interceptor/apiSlice';
import authReducer from './reducer/auth';
import commonReducer from './reducer/common';
import loaderReducer from '../redux/reducer/loader'
import { permissionReducer } from './reducer/permissions';
import commonResMessage from './reducer/commonResMessage';
import { persistStore, persistReducer } from 'redux-persist';
import {
  permissionsPersistConfig
} from './config';
import pageTitle from './reducer/pageTitle';


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    loader: loaderReducer,
    message: commonResMessage,
    common: commonReducer,
    pageTitle: pageTitle,
    permissions: persistReducer(permissionsPersistConfig, permissionReducer)
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
    ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

