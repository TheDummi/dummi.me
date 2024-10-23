/** @format */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { config } from 'dotenv';
import Link from 'next/link';

config();

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
			<ClerkProvider>
				<body className={inter.className}>
					<header>
						<div className="flex space">
							<div>
								<a href="/">
									<img className="icon" src="/icon.png"></img>
								</a>
							</div>
							<div>
								<SignedOut>
									<Link href="/auth/login">login</Link>
								</SignedOut>
								<SignedIn>
									<UserButton />
								</SignedIn>
							</div>
						</div>
						<div className="rainbow"></div>
					</header>
					{children}
				</body>
			</ClerkProvider>
		</html>
	);
}
