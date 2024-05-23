/** @format */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Xernerx',
	description: 'Hi',
	icons: { icon: '/icons/XernerxIconPurple.png' },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header>
					<div className="flex space">
						<div>
							<img className="icon" src="/icons/XernerxLogoPurple.png"></img>
						</div>
						<div>
							<img className="icon icon-clr" src="/icons/ProfileIcon.png"></img>
						</div>
					</div>
					<div className="rainbow"></div>
				</header>
				{children}
			</body>
		</html>
	);
}
