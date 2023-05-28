import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
});

export const persistor = persistStore(store);
