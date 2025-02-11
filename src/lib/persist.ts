import {
  persistStore,
  persistReducer,
  WebStorage,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import localforage from 'localforage';

import { rootReducer } from './store';
import { configureStore, Store } from '@reduxjs/toolkit';

// 创建 Redux store
export const makePersistStore = () => {
  // 配置 localForage
  localforage.config({
    driver: localforage.INDEXEDDB,
    name: 'shop',
    version: 1.0,
    storeName: 'shop',
  });

  // 创建一个适配器
  const localForageAdapter: WebStorage = {
    async getItem(key) {
      try {
        return localforage.getItem(key);
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    async setItem(key, value) {
      try {
        await localforage.setItem(key, value);
      } catch (e) {
        console.error(e);
      }
    },
    async removeItem(key) {
      try {
        await localforage.removeItem(key);
      } catch (e) {
        console.error(e);
      }
    },
  };

  // 配置 redux-persist
  const persistConfig = {
    key: 'root',
    storage: localForageAdapter,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

// 创建持久化存储
export const makePersistor = (store: Store) => persistStore(store);
