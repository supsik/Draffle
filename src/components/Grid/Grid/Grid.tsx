'use client';

import { useEffect, useState } from "react";
import { useItemsStore } from "@/stores/items/items-provider-store";
import { getItems } from "@/lib/storage/items-storage";
import NewColumn from "../Column/New/NewColumn";
import AddColumn from "../Column/Add/AddColumn";
import styles from './Grid.module.scss';
import Column from "../Column/Column";

export default function ItemsGrid() {
  const initColumns = useItemsStore(s => s.initColumns);
  const columns     = useItemsStore(s => s.columns);

  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    initColumns(getItems());
  }, [])

  return <div className={styles.gridWr}>
    <div className={styles.gridContent}>
      {columns.map(column => <Column key={column.id} title={column.name} />)}
      {isAdding && <NewColumn setIsAdding={setIsAdding} />}
      <AddColumn handleClick={setIsAdding} />
    </div>
  </div>
}