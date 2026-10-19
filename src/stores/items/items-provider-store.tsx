"use client";

import { createContext, useContext, useRef, type ReactNode } from "react";
import { createItemsStore, type TaskType } from "./items-store";
import { useStore } from "zustand";

export type ItemsStoreApi = ReturnType<typeof createItemsStore>;

const ItemsStoreContext = createContext<ItemsStoreApi | undefined>(undefined);

interface ItemsStoreProviderProps {
  children: ReactNode;
}

export function ItemsStoreProvider({ children }: ItemsStoreProviderProps) {
  const storeRef = useRef<ItemsStoreApi | null>(null);

  if (!storeRef.current)
    storeRef.current = createItemsStore();

  return <ItemsStoreContext.Provider value={storeRef.current}>
      {children}
    </ItemsStoreContext.Provider>
}

export function useItemsStore<T>(selector: (store: TaskType) => T): T {
  const store = useContext(ItemsStoreContext);

  if (!store) {
    throw new Error("useItemsStore must be used within ItemsStoreProvider");
  }

  return useStore(store, selector);
}