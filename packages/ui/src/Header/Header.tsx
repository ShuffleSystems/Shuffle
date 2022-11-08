import { ReactNode } from "react";

export interface HeaderProps {
  children?: ReactNode;
}
export function Header({ children }: HeaderProps) {
  return (
    <header className="h-12 mb-4 flex items-center justify-center">
      {children}
    </header>
  );
}
