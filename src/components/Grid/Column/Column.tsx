import styles from './Column.module.scss';

interface PropsType {
  title: string,
}

export default function Column({title}: PropsType) {
  return <div className={styles.columnWr}>
    <h2>
      {title}
    </h2>
  </div>
}