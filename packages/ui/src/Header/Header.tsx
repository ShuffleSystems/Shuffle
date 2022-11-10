import Image from "next/image";
import { ReactNode } from "react";

export interface HeaderProps {
  logoSrc: string;
  logoAlt: string;
  children?: ReactNode;
}
export function Header({ children, logoSrc, logoAlt }: HeaderProps) {
  return (
    <header className="mb-4 flex items-center justify-start gap-4 p-4 ">
      <Image src={logoSrc} alt={logoAlt} className="h-8 w-auto" />
      {children}
    </header>
  );
}
