import { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
}
declare function Header({ children }: HeaderProps): JSX.Element;

export { Header, HeaderProps };
