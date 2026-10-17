import { ItemsStoreProvider } from "@/stores/items/items-provider-store";
import ItemsGrid from "@/components/Grid/Grid/Grid";
import styles from "./page.module.scss";

export default function Home() {
  return <ItemsStoreProvider>
    <div className={styles.pageWr}>
      <ItemsGrid />
    </div>
  </ItemsStoreProvider>
}
