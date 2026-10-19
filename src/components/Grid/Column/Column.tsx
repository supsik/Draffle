import { useState } from 'react';
import Options from '@/components/Modals/Options/Options';
import styles from './Column.module.scss';
import Image from 'next/image';

interface PropsType {
  title: string,
}

export default function Column({title}: PropsType) {
  const [isOptions, setIsOptions] = useState(false);

  return <div className={styles.columnWr}>
    <div className={styles.columnHeader}>
      <h2>
        {title}
      </h2>
      <button onClick={() => setIsOptions(true)}>
        <Image
          width={14}
          height={4}
          src="/icons/options.svg"
          alt=""
        />
      </button>
      {isOptions && <Options />}
    </div>
  </div>
}