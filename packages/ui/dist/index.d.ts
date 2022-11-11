import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface HeaderProps {
    logoSrc: string | StaticImageData;
    logoAlt: string;
    children?: ReactNode;
}
declare function Header({ children, logoSrc, logoAlt }: HeaderProps): JSX.Element;

export { Header, HeaderProps };
