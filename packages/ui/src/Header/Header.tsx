import { ReactNode } from "react";

export interface HeaderProps {
	children?: ReactNode;
}
export function Header({ children }: HeaderProps) {
	return (
		<header className="mb-4 flex items-center justify-start gap-4 p-4 ">
			{children}
		</header>
	);
}
