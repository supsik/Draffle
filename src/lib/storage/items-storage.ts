import { ColumnType } from "@/constants/types";

export const saveItems = (columns: ColumnType[]): void => {
  localStorage.setItem("columns", JSON.stringify(columns));
};

export const getItems = (): ColumnType[] => {
  const raw = localStorage.getItem("columns");
  if (!raw) return [];
  return JSON.parse(raw) as ColumnType[];
};