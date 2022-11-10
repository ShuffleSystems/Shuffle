import { ReactNode } from 'react';

interface HeaderProps {
    logoSrc: string;
    logoAlt: string;
    children?: ReactNode;
}
declare function Header({ children, logoSrc, logoAlt }: HeaderProps): JSX.Element;

export { Header, HeaderProps };
