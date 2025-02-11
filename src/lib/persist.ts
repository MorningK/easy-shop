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
} from "redux-persist";
import localforage from "localforage";

import { rootReducer } from "./store"; // 你的 Redux reducers
import { configureStore, Store } from "@reduxjs/toolkit";

// 配置 localForage
localforage.config({
  driver: localforage.INDEXEDDB,
  name: "shop",
  version: 1.0,
  storeName: "shop",
});

// 创建一个适配器
const localForageAdapter: WebStorage = {
  getItem(key) {
    return localforage.getItem(key);
  },
  async setItem(key, value) {
    await localforage.setItem(key, value);
  },
  removeItem(key) {
    return localforage.removeItem(key);
  },
};

// 配置 redux-persist
const persistConfig = {
  key: "root",
  storage: localForageAdapter,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 创建 Redux store
export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

// 创建持久化存储
export const makePersistor = (store: Store) => persistStore(store);
