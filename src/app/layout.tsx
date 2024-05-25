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
							<a href="https://discord.com/oauth2/authorize?client_id=1236707962383241288&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&scope=identify+email+guilds.join+guilds+connections+openid+rpc">
								<img className="icon icon-clr" src="/icons/ProfileIcon.png"></img>
							</a>
						</div>
					</div>
					<div className="rainbow"></div>
				</header>
				{children}
			</body>
		</html>
	);
}
