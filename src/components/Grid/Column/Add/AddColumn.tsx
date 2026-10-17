import { Dispatch, SetStateAction } from 'react';
import styles from './AddColumn.module.scss';
import Image from 'next/image';

interface PropsType {
  handleClick: Dispatch<SetStateAction<boolean>>,
}

export default function AddColumn({ handleClick }: PropsType) {
  return <button className={styles.addColumnWr} onClick={() => handleClick(true)}>
    <h2>
      <Image
        width={16}
        height={16}
        src='/icons/plus.svg'
        alt=''
      />
      Добавить колонку
    </h2>
    <div className={styles.addColumnContent}>
      <div className={styles.addColumnItem} />
      <div className={styles.addColumnItem} />
      <div className={styles.addColumnItem} />
    </div>
  </button>
};