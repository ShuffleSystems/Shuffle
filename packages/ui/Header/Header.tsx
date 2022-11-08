import { ReactNode } from "react";
import Image from "next/image";

export interface HeaderProps {
  children?: ReactNode;
}
export function Header({ children }: HeaderProps) {
  return (
    <header>
      <Image src="/logo.png" width={80} height={80} alt="Logo" />
      {children}
    </header>
  );
}
