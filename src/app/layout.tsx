/** @format */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

mongoose
	.connect(process.env.MongoToken as string)
	.then(() => console.info('Connected to mongoose'))
	.catch((e) => console.error(e));

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'dummi.me',
	description: 'Hi',
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
							<a href=".">
								<img className="icon" src="/icon.png"></img>
							</a>
						</div>
						<div>
							<a
								href={
									JSON.parse(process.env.Production as string)
										? 'https://discord.com/oauth2/authorize?client_id=1236707962383241288&response_type=code&redirect_uri=https%3A%2F%2Fdummi.me%2Fauth&scope=identify+guilds+email+guilds.join+connections+openid+rpc'
										: 'https://discord.com/oauth2/authorize?client_id=1236707962383241288&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&scope=identify+email+guilds.join+guilds+connections+openid+rpc'
								}>
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
