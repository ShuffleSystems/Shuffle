import { ReactNode } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export interface HeaderProps {
  children?: ReactNode;
}
export function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Image src="/logo.png" width={80} height={80} alt="Logo" />
      {children}
    </header>
  );
}
