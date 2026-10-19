import { createStore } from "zustand";
import { ColumnType } from "@/constants/types";
import { saveItems } from "@/lib/storage/items-storage";

export type TaskType = {
  columns      : ColumnType[],
  addColumn    : (column: ColumnType) => void,
  initColumns  : (data: ColumnType[]) => void,
  removeColumn : (id: string) => void,
}

export function createItemsStore() {
  return createStore<TaskType>(set => ({
    columns: [],
    initColumns: data => set(() => ({
      columns: data,
    })),
    addColumn: column => set(state => {
      const columns = [...state.columns, column];
      saveItems(columns);
      return { columns }
    }),
    removeColumn: id => set(state => {
      const columns = state.columns.filter(column => column.id !== id);
      saveItems(columns);
      return { columns };
    }),
  }));
}