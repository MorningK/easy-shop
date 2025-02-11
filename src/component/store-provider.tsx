'use client';

import { makePersistor, makeStore } from '@/lib/persist';
import { AppStore } from '@/lib/store';
import { setupListeners } from '@reduxjs/toolkit/query';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

export default function StoreProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<AppStore | null>(null);
  const peristRef = useRef<Persistor | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  if (!peristRef.current && storeRef.current) {
    peristRef.current = makePersistor(storeRef.current);
  }

  useEffect(() => {
    if (storeRef.current != null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<p>Loading...</p>} persistor={peristRef.current!}>
        {children}
      </PersistGate>
    </Provider>
  );
}
