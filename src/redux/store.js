import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { persistReducer, persistStore } from 'redux-persist';
import persistConfig from './persistConfig';

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    phonebook: persistedReducer,
  },
});

export const persistor = persistStore(store);
