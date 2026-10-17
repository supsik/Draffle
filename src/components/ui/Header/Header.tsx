import styles from './Header.module.scss';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return <header className={styles.headerWr}>
    <Link href="/">
      <Image
        width={90}
        height={22}
        src="/icons/logo.svg"
        alt="logo"
      />
    </Link>
  </header>
}