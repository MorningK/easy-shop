'use client';

import { makePersistor, makePersistStore } from '@/lib/persist';
import { AppStore, makeStore } from '@/lib/store';
import { setupListeners } from '@reduxjs/toolkit/query';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

export default function StoreProvider({ children }: PropsWithChildren) {
  // 默认使用没有持久化的store进行初始化，store变成persistStore后需要重新渲染，所以不能使用ref而需要使用state
  const [store, setStore] = useState<AppStore>(makeStore);
  const [persistor, setPersistor] = useState<Persistor | null>(null);

  useEffect(() => {
    // 有关持久化的操作只能在客户端进行，包括了localForage的配置
    console.debug('setup persist');
    const persistStore = makePersistStore();
    setStore(persistStore);
    const persistor = makePersistor(persistStore);
    setPersistor(persistor);
  }, []);

  useEffect(() => {
    if (store !== null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(store.dispatch);
      return unsubscribe;
    }
  }, [store]);

  return (
    <Provider store={store}>
      {persistor ? (
        <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
          {children}
        </PersistGate>
      ) : (
        children
      )}
    </Provider>
  );
}
