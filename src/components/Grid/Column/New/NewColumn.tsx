import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { useItemsStore } from '@/stores/items/items-provider-store';
import styles from './NewColumn.module.scss';

interface PropsType {
  setIsAdding: Dispatch<SetStateAction<boolean>>
};

export default function NewColumn({setIsAdding}: PropsType) {
  const addColumn = useItemsStore(s => s.addColumn);

  const inputRef = useRef<HTMLInputElement>(null);

  const saveChanges = () => {
    if(inputRef.current && inputRef.current.value) {
      addColumn({
        id    : crypto.randomUUID(),
        name  : inputRef.current.value,
        items : [],
      });
    }

    setIsAdding(false);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  return <div className={styles.NewColumnWr}>
    <input
      type="text"
      ref={inputRef}
      onBlur={saveChanges}
      placeholder='Введите название'
    />
  </div>
}