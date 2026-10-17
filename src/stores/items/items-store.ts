import { createStore } from "zustand";
import { ColumnType } from "@/constants/types";

export type TaskType = {
  columns: ColumnType[],
  addColumn: (column: ColumnType) => void,
  initColumns: (data: ColumnType[]) => void,
}

export function createItemsStore() {
  return createStore<TaskType>(set => ({
    columns: [],
    initColumns: data => set(() => ({
      columns: data,
    })),
    addColumn: column => set(state => ({
      columns: [...state.columns, column],
    })),
  }));
}